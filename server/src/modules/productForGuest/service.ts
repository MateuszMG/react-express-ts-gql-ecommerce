import { IdInput } from '../../types/inputs';
import { ProductForGuest } from './responses';
import { Product, ProductModel, Ratings, Solds, Views } from '../product/model';

export class ProductForGuestService {
  async getProductsForGuest(): Promise<ProductForGuest[]> {
    const products = await ProductModel.find({ active: true }).limit(10);

    const productsForGuest = products.map((product: any) => {
      return this.extractProductForGuest(product._doc);
    });

    return productsForGuest || [];
  }

  async getProductForGuest(input: IdInput): Promise<ProductForGuest> {
    const product: any = await ProductModel.findById(input._id);
    if (!product.active) throw 'Inactive product';

    return this.extractProductForGuest(product._doc);
  }

  private extractProductForGuest(product: Product): ProductForGuest {
    const { active, price, ratings, solds, views, ...rest } = product;

    const getTotal = (obj: Solds | Ratings | Views) =>
      obj.activeFake ? obj.originalAndFakeTotal : obj.originalTotal;

    return {
      ...rest,
      price: price.retail,
      ratings: {
        amount: ratings.activeFake
          ? ratings.originalAndFakeAmount
          : ratings.originalAmount,
        total: getTotal(ratings),
      },
      solds: getTotal(solds),
      views: getTotal(views),
    };
  }
}
