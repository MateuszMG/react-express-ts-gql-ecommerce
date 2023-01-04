import { IdInput } from 'src/types/input.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductForGuest } from './product-for-guest.object';
import {
  Product,
  ProductDocument,
  Ratings,
  Solds,
  Views,
} from '../product/product.model';

@Injectable()
export class ProductForGuestService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getProductsForGuest(): Promise<ProductForGuest[]> {
    const products = await this.productModel.find({ active: true }).limit(10);

    const productsForGuest = products.map((product: any) => {
      product._doc.id = product._doc._id;
      delete product._doc._id;
      return this.extractProductForGuest(product._doc);
    });

    return productsForGuest || [];
  }

  async getProductForGuest(input: IdInput): Promise<ProductForGuest> {
    const product: any = await this.productModel.findById(input.id);
    if (!product.active) throw 'Inactive product';

    product._doc.id = product._doc._id;
    delete product._doc._id;

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
