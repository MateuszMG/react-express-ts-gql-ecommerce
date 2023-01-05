import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MongoModelContents } from 'src/types/other.type';

@Schema({ timestamps: true })
@ObjectType()
export class Rating {
  @Field(() => ID)
  id: string;

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

export const RatingSchema = SchemaFactory.createForClass(Rating);
export type RatingDocument = Rating & Document;
export type IRating = MongoModelContents<Rating>;
