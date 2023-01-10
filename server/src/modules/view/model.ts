import { Document } from 'mongoose';
import { Field, ID, ObjectType } from 'type-graphql';
import { getModelForClass, Prop } from '@typegoose/typegoose';
import { MongoModelContents } from '../../types/helpers';

@ObjectType()
export class View {
  @Field(() => String)
  _id: string;

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
  @Field(() => String || null, { nullable: true })
  userId: string | null;

  @Prop()
  @Field(() => Date)
  createdAt: Date;

  @Prop()
  @Field(() => Date)
  updatedAt: Date;
}

export const ViewModel = getModelForClass<typeof View>(View, {
  schemaOptions: { timestamps: true },
});
export type ViewDocument = View & Document;
export type ViewContents = MongoModelContents<View>;
