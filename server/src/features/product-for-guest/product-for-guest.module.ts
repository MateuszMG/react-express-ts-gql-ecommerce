import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../product/product.model';
import { ProductForGuestResolver } from './product-for-guest.resolver';
import { ProductForGuestService } from './product-for-guest.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProductForGuestService, ProductForGuestResolver],
})
export class ProductForGuestModule {}
