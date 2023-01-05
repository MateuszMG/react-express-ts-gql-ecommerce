import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import Ctx from 'src/types/context.type';
import { IdInput } from 'src/types/input.type';
import { User } from '../auth/auth.model';

import { UserBasket } from './user.object';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async getUser(@Context() ctx: Ctx) {
    return await this.userService.getUser(ctx);
  }

  @Query(() => UserBasket)
  async getBasket(@Context() ctx: Ctx) {
    return await this.userService.getBasket(ctx);
  }

  @Mutation(() => UserBasket)
  async addToBasket(@Context() ctx: Ctx, @Args('input') input: IdInput) {
    return await this.userService.addToBasket(ctx, input);
  }

  @Mutation(() => UserBasket)
  async removeFromBasket(@Context() ctx: Ctx, @Args('input') input: IdInput) {
    return await this.userService.removeFromBasket(ctx, input);
  }
}
