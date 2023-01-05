import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MongoModelContents } from 'src/types/other.type';

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

@ObjectType()
export class Ratings {
  @Prop()
  @Field()
  activeFake: boolean;

  @Prop()
  @Field()
  fakeTotal: number;

  @Prop()
  @Field()
  fakeAmount: number;

  @Prop()
  @Field()
  originalTotal: number;

  @Prop()
  @Field()
  originalAmount: number;

  @Prop()
  @Field()
  originalAndFakeTotal: number;

  @Prop()
  @Field()
  originalAndFakeAmount: number;
}

//////////////////////////////////////////////// Views

@ObjectType()
export class Views {
  @Prop()
  @Field()
  activeFake: boolean;

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

//////////////////////////////////////////////// Solds

@ObjectType()
export class Solds {
  @Prop()
  @Field()
  activeFake: boolean;

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
  solds: Solds;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
export type ProductDocument = Product & Document;
export type IProduct = MongoModelContents<Product>;
