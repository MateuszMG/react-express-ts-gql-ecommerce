import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../product/product.model';
import { ViewResolver } from './view.resolver';
import { ViewSchema } from './view.model';
import { ViewService } from './view.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'view', schema: ViewSchema }]),
    MongooseModule.forFeature([{ name: 'product', schema: ProductSchema }]),
  ],
  providers: [ViewService, ViewResolver],
})
export class ViewModule {}
