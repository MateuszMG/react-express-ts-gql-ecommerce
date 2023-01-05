import { Basket, User, UserDocument } from '../auth/auth.model';
import { calculatePercentage } from 'src/helpers/product.helpers';
import { Ctx } from 'src/types/context.type';
import { IdInput } from 'src/types/input.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductInUserBasket, UserBasket } from './user.object';
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

  async getUser(ctx: Ctx): Promise<User> {
    const userId = ctx.req.user.id;
    const user = await this.userModel.findById(userId);
    return user;
  }

  async getBasket(ctx: Ctx): Promise<UserBasket> {
    const userId = ctx.req.user.id;
    const user = await this.userModel.findById(userId).lean();

    const productIds = user.basket.map((item) => item.productId);

    return await this.loadUserBasket(user.basket, productIds);
  }

  async addToBasket(ctx: Ctx, input: IdInput) {
    console.log('input', input);

    const userId = ctx.req.user.id;
    const user = await this.userModel.findById(userId).lean();
    const basket = user.basket;

    const isExist = basket.find((item) => item.productId === input.id);

    const updatedBasket: Basket[] = !isExist
      ? [...basket, { productId: input.id, quantity: 1 }]
      : basket.map((item) =>
          item.productId === input.id
            ? {
                productId: item.productId,
                quantity: item.quantity + 1,
              }
            : item,
        );

    console.log('updatedBasket', updatedBasket);

    await this.userModel.findByIdAndUpdate(
      userId,
      { basket: updatedBasket },
      { new: true },
    );

    const productIds = basket.map((item) => item.productId);
    console.log('productIds', productIds);

    return await this.loadUserBasket(basket, productIds);
  }

  async removeFromBasket(ctx: Ctx, input: IdInput) {
    const userId = ctx.req.user.id;
    const user = await this.userModel.findById(userId).lean();
    const basket = user.basket;

    const canRemove =
      basket.find((item) => item.productId === input.id).quantity === 1;

    const updatedBasket = canRemove
      ? basket.filter((item) => item.productId !== input.id)
      : basket.map((item) =>
          item.productId === input.id
            ? {
                productId: item.productId,
                quantity: item.quantity - 1,
              }
            : item,
        );

    await this.userModel.findByIdAndUpdate(
      userId,
      { basket: updatedBasket },
      { new: true },
    );

    const productIds = basket.map((item) => item.productId);
    console.log('productIds', productIds);

    return await this.loadUserBasket(basket, productIds);
  }

  private async loadUserBasket(
    basket: Basket[],
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
        basket.find((item) => item.productId === id)?.quantity || 0;

      const priceTotal = !rest.sale.active
        ? price.retail * quantityTotal
        : rest.sale.priceAfterSale * quantityTotal;

      const discountTotal = !rest.sale.active
        ? 0
        : rest.sale.priceBeforeSale * quantityTotal -
          rest.sale.priceAfterSale * quantityTotal;

      const percentageDiscount = calculatePercentage({
        base: priceTotal,
        addition: discountTotal,
      });

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

        priceTotal,
        quantityTotal,
        discountTotal,
        percentageDiscount,
      };
    });

    const calculate = (key: 'quantityTotal' | 'priceTotal' | 'discountTotal') =>
      basketProducts
        .map((item) => item[key])
        .reduce((acc, val) => acc + val, 0);

    const quantityTotal = calculate('quantityTotal');
    const priceTotal = calculate('priceTotal');
    const discountTotal = calculate('discountTotal');
    const percentageDiscount = calculatePercentage({
      base: priceTotal,
      addition: discountTotal,
    });

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
