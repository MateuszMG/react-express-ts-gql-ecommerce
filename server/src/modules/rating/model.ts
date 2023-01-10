import { Field, ID, ObjectType } from 'type-graphql';
import { getModelForClass, Prop } from '@typegoose/typegoose';
import { Document } from 'mongoose';
import { MongoModelContents } from '../../types/helpers';

@ObjectType()
export class Rating {
  @Field(() => String)
  _id: string;

  @Prop()
  @Field()
  productId: string;

  @Prop()
  @Field()
  userId: string;

  @Prop()
  @Field()
  username: string;

  @Prop()
  @Field()
  rating: number;

  @Prop()
  @Field()
  comment: string;

  @Prop()
  @Field(() => Date)
  createdAt: Date;

  @Prop()
  @Field(() => Date)
  updatedAt: Date;
}

export const RatingModel = getModelForClass<typeof Rating>(Rating, {
  schemaOptions: { timestamps: true },
});
export type RatingDocument = Rating & Document;
export type RatingContents = MongoModelContents<Rating>;
