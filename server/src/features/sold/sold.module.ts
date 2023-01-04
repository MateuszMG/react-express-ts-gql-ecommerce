import { Module } from '@nestjs/common';
import { SoldService } from './sold.service';
import { SoldResolver } from './sold.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../product/product.model';
import { Sold, SoldSchema } from './sold.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sold.name, schema: SoldSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  providers: [SoldService, SoldResolver],
})
export class SoldModule {}
