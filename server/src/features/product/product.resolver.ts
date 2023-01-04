import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { EditProductInput, ProductInput } from './product.input';
import { IdInput } from 'src/types/input.type';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { pubSub, triggerNames } from 'src/config/PubSub';
import { ResMessage } from 'src/types/object.type';
import { RolesGuard } from 'src/guards/roles.guard';
import { UseGuards } from '@nestjs/common';
import { UserRoles } from '../user/user.model';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [Product])
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Query(() => Product)
  async getProduct(@Args('input') input: IdInput) {
    return await this.productService.getProduct(input);
  }

  @Mutation(() => Product)
  @UseGuards(new RolesGuard([UserRoles.MODERATOR]))
  async addProduct(@Args('input') input: ProductInput) {
    return await this.productService.addProduct(input);
  }

  @Mutation(() => ResMessage)
  @UseGuards(new RolesGuard([UserRoles.MODERATOR]))
  async editProduct(@Args('input') input: EditProductInput) {
    return await this.productService.editProduct(input);
  }

  @Mutation(() => ResMessage)
  @UseGuards(new RolesGuard([UserRoles.MODERATOR]))
  async deleteProduct(@Args('input') input: IdInput) {
    return await this.productService.deleteProduct(input);
  }

  @Mutation(() => ResMessage)
  @UseGuards(new RolesGuard([UserRoles.MODERATOR]))
  async changeActiveProduct(@Args('input') input: IdInput) {
    return await this.productService.changeActiveProduct(input);
  }

  @Query(() => Product)
  async getHighlightedProduct() {
    return await this.productService.getHighlightedProduct();
  }

  @Subscription(() => Product, {
    name: triggerNames.highlightedProductUpdated,
    defaultValue: null,
    nullable: true,
  })
  async highlightedProductUpdated() {
    return pubSub.asyncIterator(triggerNames.highlightedProductUpdated);
  }
}
