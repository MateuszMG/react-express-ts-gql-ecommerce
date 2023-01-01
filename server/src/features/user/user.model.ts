import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum UserRoles {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMINISTRATOR = 'ADMINISTRATOR',
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
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
