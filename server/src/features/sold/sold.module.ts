import { Module } from '@nestjs/common';
import { SoldService } from './sold.service';
import { SoldResolver } from './sold.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../product/product.model';
import { Sold, SoldSchema } from './sold.model';
import { User, UserSchema } from '../auth/auth.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Sold.name, schema: SoldSchema },
      { name: Product.name, schema: ProductSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [SoldService, SoldResolver],
})
export class SoldModule {}
