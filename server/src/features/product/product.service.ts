import { EditProductInput, ProductInput } from './product.input';
import { IdInput } from 'src/types/input.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';
import { pubSub, triggerNames } from 'src/config/PubSub';
import { ResMessage } from 'src/types/object.type';
import { timeoutService } from 'src/utils/services/timeout.service';
import { CategoryDocument } from '../category/category.model';
import { dataRangeValidation } from 'src/validations/dataRangeValidation';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('category') private categoryModel: Model<CategoryDocument>,
    @InjectModel('product') private productModel: Model<ProductDocument>,
  ) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find({}).limit(10);
    // console.log('products', products);

    // only active
    return products || [];
  }

  async getProduct(input: IdInput): Promise<Product> {
    const product = await this.productModel.findById(input.id);

    if (!product.active) throw 'Inactive product';

    return product;
  }

  async addProduct(input: ProductInput): Promise<Product> {
    console.log('input', input);

    dataRangeValidation(input.distinction);
    dataRangeValidation(input.sale);

    const category = await this.categoryModel.findOne({
      category: input.category,
    });
    if (!category) throw 'Category Error';

    const productInput: Omit<Product, 'id'> = {
      ...input,
      ratings: {
        ...input.ratings,
        originalTotal: 0,
        originalAmount: 0,
        originalAndFakeTotal: input.ratings.fakeTotal,
        originalAndFakeAmount: input.ratings.fakeAmount,
      },
      views: {
        ...input.views,
        details: [],
        originalAndFakeTotal: input.views.fakeTotal,
        originalTotal: 0,
        originalTotalViewsWithoutDuplicateIPAddresses: 0,
      },
      sold: {
        ...input.sold,
        details: [],
        originalAndFakeTotal: input.sold.fakeTotal,
        originalTotal: 0,
      },
    };

    const newProduct = await new this.productModel(productInput).save();
    console.log('newProduct', newProduct);

    return newProduct;
  }

  async editProduct(input: EditProductInput): Promise<ResMessage> {
    const { id, ...rest } = input;

    await this.productModel.findByIdAndUpdate(id, rest, { new: true });

    return { message: 'Updated' };
  }

  async deleteProduct(input: IdInput): Promise<ResMessage> {
    const { id } = input;

    await this.productModel.findByIdAndDelete(id);

    return { message: 'Deleted' };
  }

  async changeActiveProduct(input: IdInput): Promise<ResMessage> {
    const { id } = input;

    const product = await this.productModel.findById(id);
    await this.productModel.findByIdAndUpdate(id, { active: !product.active });

    return { message: 'Changed' };
  }

  async getHighlightedProduct(): Promise<Product> {
    const randomProduct = async () => {
      const products = await this.productModel.find({}).limit(50);

      if (products?.length)
        return products[(Math.random() * products.length).toFixed()];

      const defaultProduct: any = {
        //ProductInput
        title: `title -- ${Date.now()}`,
        description: `description -- ${Date.now()}`,

        image: `image -- ${Date.now()}`,
        price: {
          retail: +Date.now().toString().slice(-4),
          wholesale: +Date.now().toString().slice(-4),
        },
        quantity: +Date.now().toString().slice(-4),
        active: true,
      };

      return await this.addProduct(defaultProduct);
    };

    timeoutService.setGlobalTimeout('highlightedProduct', 5000, () => {
      this.getHighlightedProduct();
      pubSub.publish(triggerNames.highlightedProductUpdated, {
        highlightedProductUpdated: randomProduct(),
      });
    });

    return randomProduct();
  }

  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
}
