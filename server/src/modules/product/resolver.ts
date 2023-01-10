import { Arg, Mutation, Query, Resolver, Subscription } from 'type-graphql';
import { pubSub, pubSubTopics } from '../../config/PubSub';
import { IdInput } from '../../types/inputs';
import { ResMessage } from '../../types/responses';
import { EditProductInput, ProductInput } from './inputs';
import { Product } from './model';
import { ProductService } from './service';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {
    this.productService = new ProductService();
  }

  @Query(() => [Product])
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Query(() => Product)
  async getProduct(@Arg('input') input: IdInput) {
    return await this.productService.getProduct(input);
  }

  @Mutation(() => Product)
  async addProduct(@Arg('input') input: ProductInput) {
    return await this.productService.addProduct(input);
  }

  @Mutation(() => ResMessage)
  async editProduct(@Arg('input') input: EditProductInput) {
    return await this.productService.editProduct(input);
  }

  @Mutation(() => ResMessage)
  async deleteProduct(@Arg('input') input: IdInput) {
    return await this.productService.deleteProduct(input);
  }

  @Mutation(() => ResMessage)
  async changeActiveProduct(@Arg('input') input: IdInput) {
    return await this.productService.changeActiveProduct(input);
  }

  @Query(() => Product)
  async getHighlightedProduct() {
    return await this.productService.getHighlightedProduct();
  }

  @Subscription(() => Product, {
    topics: pubSubTopics.highlightedProductUpdated,
  })
  async highlightedProductUpdated() {
    return pubSub.asyncIterator(pubSubTopics.highlightedProductUpdated);
  }
}
