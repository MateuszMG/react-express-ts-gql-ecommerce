import { getModelForClass, Prop } from '@typegoose/typegoose';
import { Field, ObjectType } from 'type-graphql';
import { Document } from 'mongoose';
import { MongoModelContents } from '../../types/helpers';

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

@ObjectType()
export class User {
  @Field(() => String)
  _id: string;

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

export const UserModel = getModelForClass<typeof User>(User, {
  schemaOptions: { timestamps: true },
});
export type UserDocument = User & Document;
export type UserContents = MongoModelContents<User>;
