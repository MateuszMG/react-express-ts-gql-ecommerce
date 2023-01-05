import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MongoModelContents } from 'src/types/other.type';

export enum UserRoles {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMINISTRATOR = 'ADMINISTRATOR',
}

@ObjectType()
export class Basket {
  @Prop() @Field() productId: string;
  @Prop() @Field() quantity: number;
}

@ObjectType()
export class PurchaseHistory {
  @Prop() @Field(() => [String]) productsIds: string[];
  @Prop() @Field(() => [String]) soldsIds: string[];

  @Prop() @Field() quantityTotal: number;
  @Prop() @Field() priceTotal: number;
  @Prop() @Field() discountTotal: number;
  @Prop() @Field() percentageDiscount: number;

  @Prop() @Field(() => Date) date: Date;
}

@Schema({ timestamps: true })
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
  @Field(() => [String])
  roles: UserRoles[];

  @Prop()
  @Field(() => Basket)
  basket: Basket[];

  @Prop()
  @Field(() => [PurchaseHistory])
  purchaseHistory: PurchaseHistory[];

  @Prop()
  @Field(() => Date)
  createdAt: Date;

  @Prop()
  @Field(() => Date)
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
export type IUser = MongoModelContents<User>;
