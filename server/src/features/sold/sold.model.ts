import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Price } from '../product/product.model';
import { Document } from 'mongoose';
import { MongoModelContents } from 'src/types/other.type';

@Schema({ timestamps: true })
@ObjectType()
export class Sold {
  @Field(() => ID)
  id: string;

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

export const SoldSchema = SchemaFactory.createForClass(Sold);
export type SoldDocument = Sold & Document;
export type ISold = MongoModelContents<Sold>;
