import { ProductPriceInput } from '../product/inputs';
import { Field, InputType } from 'type-graphql';
import {
  IsBoolean,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

@InputType()
export class SoldInput {
  @Field() @IsString() @MinLength(2) @MaxLength(128) guestIP: string;
  @Field() @IsString() @MinLength(2) @MaxLength(128) soldId: string;
  @Field() @IsString() @MinLength(2) @MaxLength(128) userId: string;

  @Field() @IsNumber() @Min(0) @Max(1_000_000) quantity: number;

  @Field() price: ProductPriceInput;

  @Field() @IsBoolean() activeSale: boolean;
  //   @Field() @IsBoolean() activeCoupon: boolean;
  @Field() @IsBoolean() activeDistinction: boolean;

  @Field()
  @IsNumber()
  @Min(0)
  @Max(1_000_000)
  purchasePriceBeforeDiscount: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) purchasePrice: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) profit: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) amountDiscount: number;
  @Field() @IsNumber() @Min(0) @Max(100) percentageDiscount: number;
}
