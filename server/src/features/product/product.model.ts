import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Prop({ required: true, unique: true })
  @Field()
  title: string;

  @Prop({ required: true })
  @Field()
  description: string;

  @Prop({ required: true })
  @Field()
  image: string;

  @Prop({ required: true })
  @Field()
  price: number;

  @Prop({ required: true })
  @Field()
  quantity: number;

  @Prop({ default: true })
  @Field()
  active: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
export type ProductDocument = Product & Document;

// title;
// subtitle;
// category;
// model;
// description;
// content;
// quantity;
// price: {
//   wholesale,
//   retail,
// },
// size: {
//   weight,
//   length,
//   width,
//   height,
// },
// images: {
//   type: Array,
//   required: true,
// },

// distinction: {
//   active,
//   startTime,
//   endTime,
// },
// sale: {
//   active
//   priceBeforeSale,
//   priceAfterSale,
//   percentageDiscount,
//   startTime,
//   endTime,
// },
// ratings: {
//   activeFake,
//   details: [{
//       ratingId,
//       userId,
//       rating,
//       date,
//   }],
//   fakeTotal,
//   fakeQuantity,
//   originalTotal,
//   originalQuantity,
//   totalOriginalAndFake,
//   quantityOriginalAndFake,
// },
// views: {
//   activeFake,
//   fakeTotal,
//   details: [{
//       guestIP,
//       date,
//   }],
//   originalTotal,
//   originalAndSetTotal,
//   originalTotalViewsWithoutDuplicateIPAddresses,
// },
// sold: {
//   activeFake,
//   fakeTotal,
//   details: [{
//       soldId,
//       userId,
//       quantity,

//       wholesale,
//       retail,

//       activeSale,
//       activeCoupon,
//       activeDistinction,

//       purchasePriceBeforeDiscount,
//       purchasePrice,
//       profit,

//       amountDiscount,
//       percentageDiscount,

//       date,
//   }],
//   originalTotal,
//   originalAndFakeTotal,
// },
// comments: [{
//   commentId,
//   userId,
//   username,
//   comment,
//   date,
// }],
