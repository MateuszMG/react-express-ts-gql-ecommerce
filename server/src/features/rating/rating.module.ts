import { Module } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingResolver } from './rating.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Rating, RatingSchema } from './rating.model';
import { Product, ProductSchema } from '../product/product.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Rating.name, schema: RatingSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  providers: [RatingService, RatingResolver],
})
export class RatingModule {}
