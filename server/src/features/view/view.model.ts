import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MongoModelContents } from 'src/types/other.type';

@Schema({ timestamps: true })
@ObjectType()
export class View {
  @Field(() => ID)
  id: string;

  @Prop()
  @Field()
  productId: string;

  @Prop()
  @Field()
  guestIP: string;

  @Prop()
  @Field()
  device: string;

  @Prop({ default: null })
  @Field({ nullable: true })
  userId: string | null;

  @Prop()
  @Field(() => Date)
  createdAt: Date;

  @Prop()
  @Field(() => Date)
  updatedAt: Date;
}

export const ViewSchema = SchemaFactory.createForClass(View);
export type ViewDocument = View & Document;
export type IView = MongoModelContents<View>;
