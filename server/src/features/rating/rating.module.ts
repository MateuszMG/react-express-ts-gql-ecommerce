import { Module } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingResolver } from './rating.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { RatingSchema } from './rating.model';
import { ProductSchema } from '../product/product.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'rating', schema: RatingSchema }]),
    MongooseModule.forFeature([{ name: 'product', schema: ProductSchema }]),
  ],
  providers: [RatingService, RatingResolver],
})
export class RatingModule {}
