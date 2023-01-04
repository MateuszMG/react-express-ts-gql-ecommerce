import { Args, Query, Resolver } from '@nestjs/graphql';
import { IdInput } from 'src/types/input.type';
import { ProductForGuest } from './product-for-guest.object';
import { ProductForGuestService } from './product-for-guest.service';

@Resolver()
export class ProductForGuestResolver {
  constructor(private productForGuestService: ProductForGuestService) {}
  @Query(() => [ProductForGuest])
  async getProductsForGuest() {
    return await this.productForGuestService.getProductsForGuest();
  }

  @Query(() => ProductForGuest)
  async getProductForGuest(@Args('input') input: IdInput) {
    return await this.productForGuestService.getProductForGuest(input);
  }
}
