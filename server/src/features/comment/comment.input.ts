import { Field, InputType } from '@nestjs/graphql';
import { IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class GetCommentsInput {
  @Field() @IsString() @MinLength(2) @MaxLength(128) productId: string;
}

@InputType()
export class AddCommentInput {
  @Field() @IsString() @MinLength(2) @MaxLength(128) productId: string;
  @Field() @IsString() @MinLength(2) @MaxLength(5000) comment: string;
}

@InputType()
export class EditCommentInput {
  @Field() @IsString() @MinLength(2) @MaxLength(128) id: string;
  @Field() @IsString() @MinLength(2) @MaxLength(5000) comment: string;
}
