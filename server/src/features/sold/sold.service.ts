import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectStripe } from 'nestjs-stripe';
import { isActivePromotion } from 'src/utils/is-active-promotion';
import { ISold, Sold, SoldDocument } from './sold.model';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../product/product.model';
import { PurchaseHistory, User, UserDocument } from '../auth/auth.model';
import { ResId, ResMessage } from 'src/types/object.type';
import Ctx from 'src/types/context.type';
import Stripe from 'stripe';

@Injectable()
export class SoldService {
  constructor(
    @InjectModel(Sold.name) private soldModel: Model<SoldDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectStripe() private stripeClient: Stripe,
  ) {}

  async createPayment(ctx: Ctx): Promise<ResId> {
    const nowTime = Date.now();
    const userId = ctx.req.user.id;
    const user = await this.userModel.findById(userId);
    const basket = user.basket;

    const products = await Promise.all(
      user.basket.map((item) => this.productModel.findById(item.productId)),
    );

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
          quantity: basket.find(({ productId }) => productId === item.id)
            .quantity,
          price_data: {
            currency: 'usd',
            unit_amount:
              (activeSale ? item.sale.priceAfterSale : item.price.retail) * 100, // cent * 100
            product_data: {
              name: item.title,
              description: item.description,
              images: [item.image],
              metadata: {
                dbId: item.id,
                product_id: item.id,
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
    const stripeObj = await this.stripeClient.checkout.sessions.create({
      success_url: `${websiteUrl}/profile/success`,
      cancel_url: `${websiteUrl}/profile/cancel`,
      payment_method_types: ['card'],
      line_items,
      customer_email: user.email,
      client_reference_id: user.id,
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      phone_number_collection: {
        enabled: true,
      },
      mode: 'payment',
    });

    return { id: stripeObj.id };
  }

  async savePayment(ctx: Ctx): Promise<ResMessage> {
    const nowTime = Date.now();
    const userId = ctx.req.user.id;
    const user = await this.userModel.findById(userId);
    const basket = user.basket;

    const products = await Promise.all(
      user.basket.map((item) => this.productModel.findById(item.productId)),
    );

    const guestIP = ctx.req.socket.remoteAddress;
    const guestDevice = ctx.req.headers['user-agent'];

    const solds = await Promise.all(
      products.map(async (item) => {
        const { sale, distinction, price } = item;

        const quantity = basket.find(
          ({ productId }) => productId === item.id,
        ).quantity;

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

        const percentageDiscount = discount
          ? +(((purchasePrice + discount) / discount) ** -1 * 100).toFixed()
          : 0;

        return await new this.soldModel<ISold>({
          guestIP,
          guestDevice,
          productId: item._id,
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
    const percentageDiscount = discountTotal
      ? +(((priceTotal + discountTotal) / discountTotal) ** -1 * 100).toFixed()
      : 0;

    const purchaseHistory: PurchaseHistory = {
      date: new Date(),
      discountTotal,
      percentageDiscount,
      priceTotal,
      productsIds,
      quantityTotal,
      soldsIds,
    };

    await this.userModel.findByIdAndUpdate(userId, {
      basket: [],
      purchaseHistory: [...user.purchaseHistory, purchaseHistory],
    });

    await Promise.all(
      products.map((item) => {
        this.productModel.findByIdAndUpdate(item.id, {
          quantity:
            item.quantity -
            basket.find(({ productId }) => productId === item.id).quantity,
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
