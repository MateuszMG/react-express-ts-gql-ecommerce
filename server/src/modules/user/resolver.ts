import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Context } from '../../types/context';
import { IdInput } from '../../types/inputs';
import { User, UserRoles } from '../auth/model';
import { UserBasket } from './responses';
import { UserService } from './service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Query(() => User)
  // @Authorized(UserRoles.USER)
  async getUser(@Ctx() ctx: Context) {
    return await this.userService.getUser(ctx);
  }

  @Query(() => UserBasket)
  async getBasket(@Ctx() ctx: Context) {
    return await this.userService.getBasket(ctx);
  }

  @Mutation(() => UserBasket)
  async addToBasket(@Ctx() ctx: Context, @Arg('input') input: IdInput) {
    return await this.userService.addToBasket(ctx, input);
  }

  @Mutation(() => UserBasket)
  async removeFromBasket(@Ctx() ctx: Context, @Arg('input') input: IdInput) {
    return await this.userService.removeFromBasket(ctx, input);
  }
}
