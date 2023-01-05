import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from '../product/product.model';
import { Sold } from '../sold/sold.model';

export enum UserRoles {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMINISTRATOR = 'ADMINISTRATOR',
}

@ObjectType()
export class ProductInBasket {
  @Field() productId: string;
  @Field() quantity: number;
}

@ObjectType()
export class Basket {
  @Field(() => [ProductInBasket]) products: ProductInBasket[];
}

@Schema()
@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Prop({ required: true, unique: true })
  @Field()
  email: string;

  @Prop({ required: true })
  @Field()
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  @Field()
  accessToken: string;

  @Prop()
  @Field()
  refreshToken: string;

  @Prop({
    default: [UserRoles.USER],
    enum: UserRoles,
    required: true,
    type: [String],
  })
  @Field(() => [UserRoles])
  roles: UserRoles[];

  @Prop()
  @Field()
  basket: Basket;

  // @Prop()
  // @Field()
  // purchaseHistory: Sold[];
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;

// productId: '',
// title: '',
// category: '',
// quantity: '',
// purchasePrice: '',
// activeSale: '',
// percentageDiscount: '',
// activeDistinction: '',
// totalPrice: '',
// paymentDate: '',

// @ObjectType()
// export class PurchaseDetails {
// solds: Sold[]

// quantity: '',
// purchasePrice: '',
// activeSale: '',
// activeDistinction: '',
// percentageDiscount: '',
// totalPrice: '',

// date: Date
// }

// @Prop()
// @Field(() => [PurchaseDetails])
// details: PurchaseDetails[];
