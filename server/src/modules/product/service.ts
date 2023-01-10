import { CategoryModel } from '../category/model';
import { dateRangeValidation } from '../../validations/dateRangeValidation';
import { EditProductInput, ProductInput } from './inputs';
import { IdInput } from '../../types/inputs';
import { Product, ProductContents, ProductModel } from './model';
import { pubSub, pubSubTopics } from '../../config/PubSub';
import { ResMessage } from '../../types/responses';
import { timeoutService } from '../../utils/services/TimeoutService';

export class ProductService {
  async getProducts(): Promise<Product[]> {
    const products = await ProductModel.find({}).limit(10);
    // console.log('products', products);

    // only active
    return products || [];
  }

  async getProduct(input: IdInput): Promise<Product> {
    const product = await ProductModel.findById(input._id);

    if (!product?.active) throw 'Inactive product';

    return product;
  }

  async addProduct(input: ProductInput): Promise<Product> {
    console.log('input', input);

    dateRangeValidation(input.distinction);
    dateRangeValidation(input.sale);

    const category = await CategoryModel.findOne({
      category: input.category,
    });
    if (!category) throw 'Category Error';

    const newProduct = await new ProductModel<ProductContents>({
      ...input,
      sale: {
        ...input.sale,
        percentageDiscount: 0,
      },
      ratings: {
        ...input.ratings,
        originalTotal: 0,
        originalAmount: 0,
        originalAndFakeTotal: input.ratings.fakeTotal,
        originalAndFakeAmount: input.ratings.fakeAmount,
      },
      views: {
        ...input.views,
        originalAndFakeTotal: input.views.fakeTotal,
        originalTotal: 0,
        originalTotalViewsWithoutDuplicateIPAddresses: 0,
      },
      solds: {
        ...input.solds,
        originalAndFakeTotal: input.solds.fakeTotal,
        originalTotal: 0,
      },
    }).save();

    return newProduct;
  }

  async editProduct(input: EditProductInput): Promise<ResMessage> {
    const { _id, ...rest } = input;

    await ProductModel.findByIdAndUpdate(_id, rest, { new: true });

    return { message: 'Updated' };
  }

  async deleteProduct(input: IdInput): Promise<ResMessage> {
    const { _id } = input;

    await ProductModel.findByIdAndDelete(_id);

    return { message: 'Deleted' };
  }

  async changeActiveProduct(input: IdInput): Promise<ResMessage> {
    const { _id } = input;

    const product = await ProductModel.findById(_id);

    if (!product) throw 'Error';

    await ProductModel.findByIdAndUpdate(_id, { active: !product.active });

    return { message: 'Changed' };
  }

  async getHighlightedProduct(): Promise<Product> {
    const randomProduct = async () => {
      const products = await ProductModel.find({}).limit(50);

      // if (products?.length)
      //   return products[+(Math.random() * products.length).toFixed()];

      return products[0];
    };

    timeoutService.setGlobalTimeout('highlightedProduct', 5000, () => {
      this.getHighlightedProduct();
      pubSub.publish(pubSubTopics.highlightedProductUpdated, {
        highlightedProductUpdated: randomProduct(),
      });
    });

    return randomProduct();
  }
}
