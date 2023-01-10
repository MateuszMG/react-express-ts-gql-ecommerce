import { Basket, User, UserModel } from '../auth/model';
import { calculatePercentage } from '../../helpers/product';
import { Context } from '../../types/context';
import { IdInput } from '../../types/inputs';
import { ProductInUserBasket, UserBasket } from './responses';
import { Product, ProductModel, Ratings, Solds, Views } from '../product/model';

export class UserService {
  async getUser(ctx: Context): Promise<User> {
    const userId = ctx.req.user!._id;
    const user = (await UserModel.findById(userId)) as User; // TODO: add validation
    return user;
  }

  async getBasket(ctx: Context): Promise<UserBasket> {
    const userId = ctx.req.user!._id;
    const user = (await UserModel.findById(userId).lean()) as User; // TODO: add validation

    const productIds = user.basket.map((item) => item.productId);
    console.log('productIds', productIds);

    return await this.loadUserBasket(user.basket, productIds);
  }

  async addToBasket(ctx: Context, input: IdInput) {
    console.log('input', input);

    const userId = ctx.req.user!._id;
    const user = (await UserModel.findById(userId).lean()) as User; // TODO: add validation
    const basket = user.basket;

    const isExist = basket.find((item) => item.productId === input._id);

    const updatedBasket: Basket[] = !isExist
      ? [...basket, { productId: input._id, quantity: 1 }]
      : basket.map((item) =>
          item.productId === input._id
            ? {
                productId: item.productId,
                quantity: item.quantity + 1,
              }
            : item,
        );

    await UserModel.findByIdAndUpdate(
      userId,
      { basket: updatedBasket },
      { new: true },
    );

    const productIds = basket.map((item) => item.productId);

    return await this.loadUserBasket(basket, productIds);
  }

  async removeFromBasket(ctx: Context, input: IdInput) {
    const userId = ctx.req.user!._id;
    const user = (await UserModel.findById(userId).lean()) as User; // TODO: add validation
    const basket = user.basket;

    const canRemove =
      basket.find((item) => item.productId === input._id)!.quantity === 1; // TODO: add validation

    const updatedBasket = canRemove
      ? basket.filter((item) => item.productId !== input._id)
      : basket.map((item) =>
          item.productId === input._id
            ? {
                productId: item.productId,
                quantity: item.quantity - 1,
              }
            : item,
        );

    await UserModel.findByIdAndUpdate(
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
      productIds.map(async (_id) => await ProductModel.findById(_id).lean()),
    );

    const basketProducts: ProductInUserBasket[] = products.map((item: any) => {
      const { active, solds, views, ratings, price, ...rest } = item as Product;
      const getTotal = (obj: Solds | Ratings | Views) =>
        obj.activeFake ? obj.originalAndFakeTotal : obj.originalTotal;

      console.log('item', item);

      const _id = (item._id as any).toString();

      const quantityTotal =
        basket.find((item) => item.productId === _id)?.quantity || 0;

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
        productId: _id,
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
