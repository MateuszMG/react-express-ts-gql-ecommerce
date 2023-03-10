import { Field, ID, ObjectType } from 'type-graphql';
import { Distinction, Sale, Size } from '../product/model';

@ObjectType()
export class RatingsForGuest {
  @Field()
  total: number;

  @Field()
  amount: number;
}

@ObjectType()
export class ProductForGuest {
  @Field(() => String)
  _id: string;

  @Field()
  title: string;

  @Field()
  subtitle: string;

  @Field()
  description: string;

  @Field()
  model: string;

  @Field()
  category: string;

  @Field()
  quantity: number;

  @Field()
  image: string;

  @Field() price: number;

  @Field()
  size: Size;

  @Field()
  distinction: Distinction;

  @Field()
  sale: Sale;

  @Field()
  ratings: RatingsForGuest;

  @Field()
  views: number;

  @Field()
  solds: number;
}
