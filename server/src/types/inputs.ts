import { Field, InputType } from 'type-graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class IdInput {
  @Field() @IsString() @MinLength(4) _id: string;
}
