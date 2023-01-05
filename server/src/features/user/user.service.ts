import { Basket, User, UserDocument } from '../auth/auth.model';
import { IdInput } from 'src/types/input.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductInUserBasket, UserBasket } from './user.object';
import Ctx from 'src/types/context.type';
import {
  Product,
  ProductDocument,
  Ratings,
  Solds,
  Views,
} from '../product/product.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getBasket(ctx: Ctx): Promise<UserBasket> {
    const userId = ctx.req.user.id;
    const user = await this.userModel.findById(userId).lean();

    const productIds = user.basket.products.map((item) => item.productId);

    return await this.loadUserBasket(user.basket, productIds);
  }

  async addToBasket(ctx: Ctx, input: IdInput) {
    console.log('input', input);

    const userId = ctx.req.user.id;
    const user = await this.userModel.findById(userId).lean();

    const basketProducts = user.basket.products;

    const isExist = basketProducts.find((item) => item.productId === input.id);

    const updatedProducts = !isExist
      ? [...basketProducts, { productId: input.id, quantity: 1 }]
      : basketProducts.map((item) =>
          item.productId === input.id
            ? {
                productId: item.productId,
                quantity: item.quantity + 1,
              }
            : item,
        );

    const basket: Basket = {
      products: updatedProducts,
    };
    console.log('updatedProducts', updatedProducts);

    await this.userModel.findByIdAndUpdate(userId, { basket }, { new: true });

    const productIds = basket.products.map((item) => item.productId);
    console.log('productIds', productIds);

    return await this.loadUserBasket(basket, productIds);
  }

  async removeFromBasket(ctx: Ctx, input: IdInput) {
    const userId = ctx.req.user.id;
    const user = await this.userModel.findById(userId).lean();
    const basketProducts = user.basket.products;

    const canRemove =
      basketProducts.find((item) => item.productId === input.id).quantity === 1;

    const updatedProducts = canRemove
      ? basketProducts.filter((item) => item.productId !== input.id)
      : basketProducts.map((item) =>
          item.productId === input.id
            ? {
                productId: item.productId,
                quantity: item.quantity - 1,
              }
            : item,
        );

    const basket: Basket = {
      products: updatedProducts,
    };

    await this.userModel.findByIdAndUpdate(userId, { basket }, { new: true });

    const productIds = basket.products.map((item) => item.productId);
    console.log('productIds', productIds);

    return await this.loadUserBasket(basket, productIds);
  }

  private async loadUserBasket(
    basket: Basket,
    productIds: string[],
  ): Promise<UserBasket> {
    const products = await Promise.all(
      productIds.map(async (id) => await this.productModel.findById(id).lean()),
    );

    const basketProducts: ProductInUserBasket[] = products.map((item: any) => {
      const { active, solds, views, ratings, price, ...rest } = item as Product;
      const getTotal = (obj: Solds | Ratings | Views) =>
        obj.activeFake ? obj.originalAndFakeTotal : obj.originalTotal;

      const id = (item._id as any).toString();

      const quantityTotal =
        basket.products.find((item) => item.productId === id)?.quantity || 0;

      const priceTotal = !rest.sale.active
        ? price.retail * quantityTotal
        : rest.sale.priceAfterSale * quantityTotal;

      const discountTotal = !rest.sale.active
        ? 0
        : rest.sale.priceBeforeSale * quantityTotal -
          rest.sale.priceAfterSale * quantityTotal;

      return {
        ...rest,
        productId: id,
        price: price.retail,
        ratings: {
          amount: ratings.activeFake
            ? ratings.originalAndFakeAmount
            : ratings.originalAmount,
          total: getTotal(ratings),
        },
        solds: getTotal(solds),
        views: getTotal(views),

        quantityTotal,
        discountTotal,
        priceTotal,
      };
    });

    const calculate = (key: 'quantityTotal' | 'priceTotal' | 'discountTotal') =>
      basketProducts
        .map((item) => item[key])
        .reduce((acc, val) => acc + val, 0);

    const quantityTotal = calculate('quantityTotal');
    const priceTotal = calculate('priceTotal');
    const discountTotal = calculate('discountTotal');

    const percentageDiscount = discountTotal
      ? (priceTotal + discountTotal / discountTotal) ** -1
      : 0;

    const userBasket: UserBasket = {
      products: basketProducts,
      quantityTotal,
      priceTotal,
      discountTotal,
      percentageDiscount,
    };

    console.log('userBasket', userBasket);

    return userBasket;
  }
}
