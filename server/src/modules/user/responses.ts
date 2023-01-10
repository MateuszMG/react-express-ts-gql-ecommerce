import { Field, ObjectType } from 'type-graphql';
import { Distinction, Sale } from '../product/model';
import { RatingsForGuest } from '../productForGuest/responses';

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
  @Field() priceTotal: number;
  @Field() discountTotal: number;
  @Field() percentageDiscount: number;
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
