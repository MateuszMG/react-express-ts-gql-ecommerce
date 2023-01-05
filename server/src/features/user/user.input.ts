import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

// @InputType()
// export class ChangeBasketInput {
//   @Field() @IsString() productId: string;
//   @Field() @IsNumber() quantity: number;
// }

// @InputType()
// export class AddToBasketInput {
//   @Field(() => [ProductInBasketInput]) products: ProductInBasketInput[];
// }
