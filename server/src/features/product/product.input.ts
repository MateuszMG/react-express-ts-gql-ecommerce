import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
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
  @Field() @IsDate() @Type(() => Date) startTime: Date;
  @Field() @IsDate() @Type(() => Date) endTime: Date;
}

//////////////////////////////////////////////// Sale

@InputType()
export class ProductSaleInput {
  @Field() @IsBoolean() active: boolean;
  @Field() @IsDate() @Type(() => Date) startTime: Date;
  @Field() @IsDate() @Type(() => Date) endTime: Date;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) priceBeforeSale: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) priceAfterSale: number;
  @Field() @IsNumber() @Min(0) @Max(100) percentageDiscount: number;
}

//////////////////////////////////////////////// Ratings

@InputType()
export class ProductRatingsDetailsInput {
  @Field() @IsString() @MinLength(2) @MaxLength(128) ratingId: string;
  @Field() @IsString() @MinLength(2) @MaxLength(128) userId: string;
  @Field() @IsNumber() @Min(0) @Max(6) rating: number;
  @Field() @IsDate() @Type(() => Date) endTime: Date;
}

@InputType()
export class ProductRatingsInput {
  @Field() @IsBoolean() activeFake: boolean;
  details: ProductRatingsDetailsInput;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) fakeTotal: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) fakeQuantity: number;
  // @Field() @IsNumber() @Min(0) @Max(1_000_000) originalTotal: number;
  // @Field() @IsNumber() @Min(0) @Max(1_000_000) originalQuantity: number;
  // @Field() @IsNumber() @Min(0) @Max(1_000_000) totalOriginalAndFake: number;
  // @Field() @IsNumber() @Min(0) @Max(1_000_000) quantityOriginalAndFake: number;
}

//////////////////////////////////////////////// Views

@InputType()
export class ProductViewsDetailsInput {
  @Field() @IsString() @MinLength(2) @MaxLength(128) guestIP: string;
  @Field() @IsDate() @Type(() => Date) date: Date;
}

@InputType()
export class ProductViewsInput {
  @Field() @IsBoolean() activeFake: boolean;
  // @Field() details: ProductViewsDetailsInput;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) fakeTotal: number;
  // @Field() @IsNumber() @Min(0) @Max(1_000_000) originalTotal: number;
  // @Field() @IsNumber() @Min(0) @Max(1_000_000) originalAndFakeTotal: number;
  // @Field()
  // @IsNumber()
  // @Min(0)
  // @Max(1_000_000)
  // originalTotalViewsWithoutDuplicateIPAddresses: number;
}

//////////////////////////////////////////////// Sold

@InputType()
export class ProductSoldDetailsInput {
  @Field() @IsString() @MinLength(2) @MaxLength(128) guestIP: string;
  @Field() @IsString() @MinLength(2) @MaxLength(128) soldId: string;
  @Field() @IsString() @MinLength(2) @MaxLength(128) userId: string;

  @Field() @IsNumber() @Min(0) @Max(1_000_000) quantity: number;

  @Field() price: ProductPriceInput;

  @Field() @IsBoolean() activeSale: boolean;
  @Field() @IsBoolean() activeCoupon: boolean;
  @Field() @IsBoolean() activeDistinction: boolean;

  @Field()
  @IsNumber()
  @Min(0)
  @Max(1_000_000)
  purchasePriceBeforeDiscount: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) purchasePrice: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) profit: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) amountDiscount: number;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) percentageDiscount: number;

  @Field() @IsDate() @Type(() => Date) date: Date;
}

@InputType()
export class ProductSoldInput {
  @Field() @IsBoolean() activeFake: boolean;
  @Field() details: ProductSoldDetailsInput;
  @Field() @IsNumber() @Min(0) @Max(1_000_000) fakeTotal: number;
  // @Field() @IsNumber() @Min(0) @Max(1_000_000) originalTotal: number;
  // @Field() @IsNumber() @Min(0) @Max(1_000_000) originalAndFakeTotal: number;
}

//////////////////////////////////////////////// Comments

@InputType()
export class ProductCommentsInput {
  @Field() @IsString() @MinLength(2) @MaxLength(128) commentId: string;
  @Field() @IsString() @MinLength(2) @MaxLength(128) userId: string;
  @Field() @IsString() @MinLength(2) @MaxLength(128) username: string;
  @Field() @IsString() @MinLength(2) @MaxLength(5000) comment: string;
  @Field() @IsDate() @Type(() => Date) date: Date;
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
  // @Field() sold: ProductSoldInput;
  // @Field() comments: ProductCommentsInput;
}

@InputType()
export class EditProductInput extends ProductInput {
  @Field() @IsString() @MinLength(4) id: string;
}

// @InputType()
// export class GetProductInput  {
//   @Field() limit: number;
// }
