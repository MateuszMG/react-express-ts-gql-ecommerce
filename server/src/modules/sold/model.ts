import { Field, ID, ObjectType } from 'type-graphql';
import { getModelForClass, Prop } from '@typegoose/typegoose';
import { Document } from 'mongoose';
import { Price } from '../product/model';
import { MongoModelContents } from '../../types/helpers';

@ObjectType()
export class Sold {
  @Field(() => String)
  _id: string;

  @Prop()
  @Field()
  guestIP: string;

  @Prop()
  @Field()
  guestDevice: string;

  @Prop()
  @Field()
  productId: string;

  @Prop()
  @Field()
  userId: string;

  @Prop()
  @Field()
  quantity: number;

  @Prop()
  @Field()
  price: Price;

  //   @Prop()
  //   @Field()
  //   activeCoupon: boolean;

  @Prop()
  @Field()
  activeSale: boolean;

  @Prop()
  @Field()
  activeDistinction: boolean;

  @Prop()
  @Field()
  purchasePriceBeforeDiscount: number;

  @Prop()
  @Field()
  purchasePrice: number;

  @Prop()
  @Field()
  profit: number;

  @Prop()
  @Field()
  amountDiscount: number;

  @Prop()
  @Field()
  percentageDiscount: number;

  @Prop()
  @Field(() => Date)
  createdAt: Date;

  @Prop()
  @Field(() => Date)
  updatedAt: Date;
}

export const SoldModel = getModelForClass<typeof Sold>(Sold);
export type SoldDocument = Sold & Document;
export type SoldContents = MongoModelContents<Sold>;
