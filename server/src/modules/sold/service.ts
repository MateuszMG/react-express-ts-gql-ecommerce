import { Product, ProductModel } from '../product/model';
import { PurchaseHistory, User, UserModel } from '../user/model';
import { Context } from '../../types/context';
import { ResId, ResMessage } from '../../types/responses';
import { calculatePercentage, isActivePromotion } from '../../helpers/product';
import { SoldContents, SoldModel } from './model';
import { Stripe } from 'stripe';
import { config } from '../../config/config';

const stripeConfig: Stripe.StripeConfig = {
  apiVersion: '2022-11-15',
};

export class SoldService {
  stripe: Stripe;
  constructor() {
    this.stripe = new Stripe(config.stripeSecret, stripeConfig);
  }

  async createPayment(ctx: Context): Promise<ResId> {
    console.log('createPayment');

    const nowTime = Date.now();
    const userId = ctx.req.user!._id;
    const user = await UserModel.findById(userId);
    if (!user) throw 'Error';

    const basket = user.basket;

    // TODO: add validation
    const products = (await Promise.all(
      user.basket.map((item) => ProductModel.findById(item.productId)),
    )) as Product[];

    const line_items = [
      ...products.map((item) => {
        const activeSale = isActivePromotion({
          object: item.sale,
          nowTime,
        });

        const activeDistinction = isActivePromotion({
          object: item.distinction,
          nowTime,
        });

        return {
          quantity: basket.find(
            ({ productId }) => productId === item._id.toString(),
          )!.quantity, // TODO: add validation
          price_data: {
            currency: 'usd',
            unit_amount:
              (activeSale ? item.sale.priceAfterSale : item.price.retail) * 100, // cent * 100
            product_data: {
              name: item.title,
              description: item.description,
              images: [item.image],
              metadata: {
                dbId: item._id.toString(),
                product_id: item._id.toString(),
                category: item.category,
                wholesalePrice: item.price.wholesale,
                sale: activeSale ? item.sale.percentageDiscount : 'No',
                distinction: activeDistinction ? 'Yes' : 'No',
              },
            },
          },
        };
      }),
    ];
    const websiteUrl = process.env.DOMAIN;
    const stripeObj = await this.stripe.checkout.sessions.create({
      success_url: `${websiteUrl}/profile/success`,
      cancel_url: `${websiteUrl}/profile/cancel`,
      payment_method_types: ['card'],
      line_items,
      customer_email: user.email,
      client_reference_id: user._id,
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      phone_number_collection: {
        enabled: true,
      },
      mode: 'payment',
    });

    return { _id: stripeObj.id };
  }

  async savePayment(ctx: Context): Promise<ResMessage> {
    const nowTime = Date.now();
    const userId = ctx.req.user!._id;
    const user = (await UserModel.findById(userId)) as User;
    const basket = user.basket;

    const products = (await Promise.all(
      user.basket.map((item) => ProductModel.findById(item.productId)),
    )) as Product[];

    const guestIP = ctx.req.socket.remoteAddress || 'Not found';
    const guestDevice = ctx.req.headers['user-agent'] || 'Not found';

    const solds = await Promise.all(
      products.map(async (item) => {
        const { sale, distinction, price } = item;

        const quantity = basket.find(
          ({ productId }) => productId === item._id.toString(),
        )!.quantity; // TODO: add validation

        const activeSale = isActivePromotion({
          object: sale,
          nowTime,
        });

        const activeDistinction = isActivePromotion({
          object: distinction,
          nowTime,
        });

        const purchasePrice = !activeSale
          ? price.retail * quantity
          : sale.priceAfterSale * quantity;

        const discount = !activeSale
          ? 0
          : sale.priceBeforeSale * quantity - sale.priceAfterSale * quantity;

        const percentageDiscount = calculatePercentage({
          base: purchasePrice,
          addition: discount,
        });

        return await new SoldModel<SoldContents>({
          guestIP,
          guestDevice,
          productId: item._id.toString(), // TODO: add validation
          userId,
          quantity,
          price,
          activeSale,
          activeDistinction,
          purchasePriceBeforeDiscount: purchasePrice + discount,
          purchasePrice,
          profit: purchasePrice - price.wholesale * quantity,
          amountDiscount: discount,
          percentageDiscount,
        }).save();
      }),
    );

    const calculate = (key: 'quantity' | 'purchasePrice' | 'amountDiscount') =>
      solds.map((item) => item[key]).reduce((acc, val) => acc + val, 0);

    const soldsIds = solds.map((item) => item._id);
    const productsIds = solds.map((item) => item.productId);
    const quantityTotal = calculate('quantity');
    const priceTotal = calculate('purchasePrice');
    const discountTotal = calculate('amountDiscount');
    const percentageDiscount = calculatePercentage({
      base: priceTotal,
      addition: discountTotal,
    });

    const purchaseHistory: PurchaseHistory = {
      date: new Date(),
      discountTotal,
      percentageDiscount,
      priceTotal,
      productsIds,
      quantityTotal,
      soldsIds,
    };

    await UserModel.findByIdAndUpdate(userId, {
      basket: [],
      purchaseHistory: [...user.purchaseHistory, purchaseHistory],
    });

    await Promise.all(
      products.map((item) => {
        ProductModel.findByIdAndUpdate(item._id, {
          quantity:
            item.quantity -
            basket.find(({ productId }) => productId === item._id.toString())!
              .quantity, // TODO: add validation
          solds: {
            ...item.solds,
            originalTotal: item.solds.originalTotal + 1,
            originalAndFakeTotal: item.solds.originalAndFakeTotal + 1,
          },
        });
      }),
    );

    return { message: 'Success' };
  }
}
