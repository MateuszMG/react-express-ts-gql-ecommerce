import { Arg, Query, Resolver } from 'type-graphql';
import { IdInput } from '../../types/inputs';
import { ProductForGuest } from './responses';
import { ProductForGuestService } from './service';

@Resolver()
export class ProductForGuestResolver {
  constructor(private productForGuestService: ProductForGuestService) {
    this.productForGuestService = new ProductForGuestService();
  }

  @Query(() => [ProductForGuest])
  async getProductsForGuest() {
    return await this.productForGuestService.getProductsForGuest();
  }

  @Query(() => ProductForGuest)
  async getProductForGuest(@Arg('input') input: IdInput) {
    return await this.productForGuestService.getProductForGuest(input);
  }
}
