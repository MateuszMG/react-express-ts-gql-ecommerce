import { Field, InputType } from 'type-graphql';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

@InputType()
export class DeliveryAdressInput {
  @Field() @IsString() @MinLength(2) @MaxLength(40) firstName: string;
  @Field() @IsString() @MinLength(2) @MaxLength(40) lastName: string;
  @Field() @IsString() @MinLength(2) @MaxLength(80) address: string;
  @Field() @IsString() @MinLength(2) @MaxLength(12) postCode: string;
  @Field() @IsString() @MinLength(2) @MaxLength(20) city: string;
  @Field() @IsString() @MinLength(2) @MaxLength(20) state: string;
  @Field() @IsString() @MinLength(2) @MaxLength(18) phoneNumber: string;
}
