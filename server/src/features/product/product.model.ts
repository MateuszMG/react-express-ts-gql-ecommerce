import { Category } from '../category/category.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

//////////////////////////////////////////////// Price

@ObjectType()
export class Price {
  @Prop({ required: true, min: 0.01, max: 1_000_000 })
  @Field()
  wholesale: number;

  @Prop({ required: true, min: 0.01, max: 1_000_000 })
  @Field()
  retail: number;
}

//////////////////////////////////////////////// Size

@ObjectType()
export class Size {
  @Prop({ min: 0, max: 1_000_000 })
  @Field()
  weight: number;

  @Prop({ min: 0, max: 1_000_000 })
  @Field()
  length: number;

  @Prop({ min: 0, max: 1_000_000 })
  @Field()
  width: number;

  @Prop({ min: 0, max: 1_000_000 })
  @Field()
  height: number;
}

//////////////////////////////////////////////// Distinction

@ObjectType()
export class Distinction {
  @Prop({ default: false })
  @Field()
  active: boolean;

  @Prop()
  @Field()
  startTime: Date;

  @Prop()
  @Field()
  endTime: Date;
}

//////////////////////////////////////////////// Sale

@ObjectType()
export class Sale {
  @Prop({ default: false })
  @Field()
  active: boolean;

  @Prop({ default: '' })
  @Field()
  startTime: Date;

  @Prop({ default: '' })
  @Field()
  endTime: Date;

  @Prop()
  @Field()
  priceBeforeSale: number;

  @Prop()
  @Field()
  priceAfterSale: number;

  @Prop()
  @Field()
  percentageDiscount: number;
}

//////////////////////////////////////////////// Ratings

@ObjectType()
export class RatingsDetails {
  @Prop()
  @Field()
  ratingId: string; //userId + '||' + new Date().valueOf()

  @Prop()
  @Field()
  userId: string;

  // @Prop({ type: SchemaTypes.ObjectId, ref: User.name })
  // @Field(() => User)
  // userId: Types.ObjectId;

  @Prop()
  @Field()
  rating: number;

  @Prop()
  @Field()
  date: Date;
}

@ObjectType()
export class Ratings {
  @Prop()
  @Field()
  activeFake: boolean;

  @Prop()
  @Field(() => [RatingsDetails])
  details: RatingsDetails[];

  @Prop()
  @Field()
  fakeTotal: number;

  @Prop()
  @Field()
  fakeQuantity: number;

  @Prop()
  @Field()
  originalTotal: number;

  @Prop()
  @Field()
  originalQuantity: number;

  @Prop()
  @Field()
  totalOriginalAndFake: number;

  @Prop()
  @Field()
  quantityOriginalAndFake: number;
}

//////////////////////////////////////////////// Views

@ObjectType()
export class ViewsDetails {
  @Prop()
  @Field()
  guestIP: string;

  @Prop()
  @Field()
  date: Date;
}

@ObjectType()
export class Views {
  @Prop()
  @Field()
  activeFake: boolean;

  @Prop()
  @Field(() => [ViewsDetails])
  details: ViewsDetails[];

  @Prop()
  @Field()
  fakeTotal: number;

  @Prop()
  @Field()
  originalTotal: number;

  @Prop()
  @Field()
  originalAndFakeTotal: number;

  @Prop()
  @Field()
  originalTotalViewsWithoutDuplicateIPAddresses: number;
}

//////////////////////////////////////////////// Sold

@ObjectType()
export class SoldDetails {
  @Prop()
  @Field()
  guestIP: string;

  // TODO: change soldId as ref
  @Prop()
  @Field()
  soldId: string;

  @Prop()
  @Field()
  userId: string;

  // @Prop({ type: SchemaTypes.ObjectId, ref: User.name })
  // @Field()
  // userId: Types.ObjectId;

  @Prop()
  @Field()
  quantity: number;

  @Prop()
  @Field()
  price: Price;

  @Prop()
  @Field()
  activeSale: boolean;

  @Prop()
  @Field()
  activeCoupon: boolean;

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
  @Field()
  date: Date;
}

@ObjectType()
export class Sold {
  @Prop()
  @Field()
  activeFake: boolean;

  @Prop()
  @Field(() => [SoldDetails])
  details: SoldDetails[];

  @Prop()
  @Field()
  fakeTotal: number;

  @Prop()
  @Field()
  originalTotal: number;

  @Prop()
  @Field()
  originalAndFakeTotal: number;
}

const stringMin2Max64Trim = {
  type: String,
  trim: true,
  minlength: 2,
  maxlength: 64,
  default: '',
};

@Schema()
@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Prop({ required: true, unique: true, ...stringMin2Max64Trim })
  @Field()
  title: string;

  @Prop({ ...stringMin2Max64Trim })
  @Field()
  subtitle: string;

  @Prop({ required: true, ...stringMin2Max64Trim, maxlength: 5_000 })
  @Field()
  description: string;

  @Prop({ ...stringMin2Max64Trim })
  @Field()
  model: string;

  @Prop({ ...stringMin2Max64Trim })
  @Field()
  category: string;

  // @Prop({ type: SchemaTypes.ObjectId, ref: Category.name })
  // @Field(() => Category)
  // category: Types.ObjectId;

  @Prop({ default: true })
  @Field()
  active: boolean;

  @Prop({ min: 0, max: 1_000_000, default: 0 })
  @Field()
  quantity: number;

  @Prop({ required: true })
  @Field()
  image: string;

  //////////////////////////////////////////////// Nested

  @Prop()
  @Field()
  price: Price;

  @Prop()
  @Field()
  size: Size;

  @Prop()
  @Field()
  distinction: Distinction;

  @Prop()
  @Field()
  sale: Sale;

  @Prop()
  @Field()
  ratings: Ratings;

  @Prop()
  @Field()
  views: Views;

  @Prop()
  @Field()
  sold: Sold;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
export type ProductDocument = Product & Document;

// title;
// subtitle;
// model;
// description;

// category;

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
