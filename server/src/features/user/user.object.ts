import { Field, ObjectType } from '@nestjs/graphql';
import { RatingsForGuest } from '../product-for-guest/product-for-guest.object';
import { Distinction, Sale } from '../product/product.model';

@ObjectType()
export class ProductInUserBasket {
  @Field() productId: string;
  @Field() price: number;
  @Field() quantity: number;

  @Field() title: string;
  @Field() description: string;
  @Field() image: string;

  @Field() distinction: Distinction;
  @Field() sale: Sale;
  @Field() ratings: RatingsForGuest;
  @Field() views: number;
  @Field() solds: number;

  @Field() quantityTotal: number;
  @Field() discountTotal: number;
  @Field() priceTotal: number;
}

@ObjectType()
export class UserBasket {
  @Field(() => [ProductInUserBasket])
  products: ProductInUserBasket[];

  @Field() quantityTotal: number;
  @Field() priceTotal: number;
  @Field() discountTotal: number;
  @Field() percentageDiscount: number;
}
