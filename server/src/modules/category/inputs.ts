import { Field, InputType } from 'type-graphql';
import { IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CategoryInput {
  @Field() @IsString() @MinLength(2) @MaxLength(64) category: string;
}

@InputType()
export class EditCategoryInput extends CategoryInput {
  @Field() @IsString() _id: string;
}
