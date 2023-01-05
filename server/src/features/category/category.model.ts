import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Category {
  @Field(() => ID)
  id: string;

  @Prop({ required: true, unique: true, minlength: 2, maxlength: 64 })
  @Field()
  category: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
export type CategoryDocument = Category & Document;
