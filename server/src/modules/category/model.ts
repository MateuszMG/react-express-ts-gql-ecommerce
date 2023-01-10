import { Document } from 'mongoose';
import { Field, ID, ObjectType } from 'type-graphql';
import { getModelForClass, Prop } from '@typegoose/typegoose';
import { MongoModelContents } from '../../types/helpers';

@ObjectType()
export class Category {
  @Field(() => String)
  _id: string;

  @Prop({ required: true, unique: true, minlength: 2, maxlength: 64 })
  @Field()
  category: string;
}

export const CategoryModel = getModelForClass<typeof Category>(Category);
export type CategoryDocument = Category & Document;
export type CategoryContents = MongoModelContents<Category>;
