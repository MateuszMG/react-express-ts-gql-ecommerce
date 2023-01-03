import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
@ObjectType()
export class Comment {
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
  comment: string;

  @Prop()
  @Field(() => Date)
  createdAt: Date;

  @Prop()
  @Field(() => Date)
  updatedAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
export type CommentDocument = Comment & Document;
