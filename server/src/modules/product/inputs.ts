import { Field, InputType } from 'type-graphql';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

//////////////////////////////////////////////// Price

@InputType()
export class ProductPriceInput {
  @Field() @IsNumber() @Min(0.01) @Max(1_000_000) wholesale: number;
  @Field() @IsNumber() @Min(0.01) @Max(1_000_000) retail: number;
}

//////////////////////////////////////////////// Size

@InputType()
export class ProductSizeInput {
  @Field() @IsNumber() @Min(0) @Max(1_000_000) weight: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) length: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) width: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) height: number;
}

//////////////////////////////////////////////// Distinction

@InputType()
export class ProductDistinctionInput {
  @Field() @IsBoolean() active: boolean;
  @Field() @IsDate() startTime: Date;
  @Field() @IsDate() endTime: Date;
}

//////////////////////////////////////////////// Sale

@InputType()
export class ProductSaleInput {
  @Field() @IsBoolean() active: boolean;
  @Field() @IsDate() startTime: Date;
  @Field() @IsDate() endTime: Date;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) priceBeforeSale: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) priceAfterSale: number;
}

//////////////////////////////////////////////// Ratings

@InputType()
export class ProductRatingsInput {
  @Field() @IsBoolean() activeFake: boolean;
  // details: ProductRatingsDetailsInput;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) fakeTotal: number;
  @Field() @IsNumber() @Min(1) @Max(6) fakeAmount: number;
}

//////////////////////////////////////////////// Views

@InputType()
export class ProductViewsInput {
  @Field() @IsBoolean() activeFake: boolean;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) fakeTotal: number;
}

@InputType()
export class ProductSoldsInput {
  @Field() @IsBoolean() activeFake: boolean;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) fakeTotal: number;
}

@InputType()
export class ProductInput {
  @Field() @IsString() @MinLength(2) @MaxLength(64) title: string;
  @Field() @IsString() @MinLength(2) @MaxLength(5_000) description: string;
  @Field() @IsString() @MinLength(2) @MaxLength(64) subtitle: string;
  @Field() @IsString() @MinLength(2) @MaxLength(64) model: string;
  @Field() @IsString() @MinLength(2) @MaxLength(64) category: string;

  @Field() @IsBoolean() active: boolean;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) quantity: number;

  @Field() @IsString() @MinLength(4) image: string;

  @Field() price: ProductPriceInput;
  @Field() size: ProductSizeInput;
  @Field() distinction: ProductDistinctionInput;
  @Field() sale: ProductSaleInput;
  @Field() ratings: ProductRatingsInput;
  @Field() views: ProductViewsInput;
  @Field() solds: ProductSoldsInput;
}

@InputType()
export class EditProductInput extends ProductInput {
  @Field() @IsString() @MinLength(4) _id: string;
}
