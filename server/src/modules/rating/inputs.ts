import { Field, InputType } from 'type-graphql';
import {
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

@InputType()
export class GetRatingsInput {
  @Field() @IsString() @MinLength(2) @MaxLength(128) productId: string;
}

@InputType()
export class AddRatingInput {
  @Field() @IsString() @MinLength(2) @MaxLength(128) productId: string;
  @Field() @IsString() @MinLength(2) @MaxLength(5000) comment: string;
  @Field() @IsNumber() @Min(1) @Max(6) rating: number;
}

@InputType()
export class EditRatingInput {
  @Field() @IsString() @MinLength(2) @MaxLength(128) _id: string;
  @Field() @IsString() @MinLength(2) @MaxLength(5000) comment: string;
  @Field() @IsNumber() @Min(1) @Max(6) rating: number;
}
