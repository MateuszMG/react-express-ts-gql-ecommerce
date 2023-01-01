import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from '../category/category.model';
import { ProductSchema } from './product.model';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'category', schema: CategorySchema }]),
    MongooseModule.forFeature([{ name: 'product', schema: ProductSchema }]),
  ],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
