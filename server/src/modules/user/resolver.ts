import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Context } from '../../types/context';
import { IdInput } from '../../types/inputs';
import { DeliveryAdressInput } from './inputs';
import { DeliveryAdress, User, UserRoles } from './model';
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

  @Mutation(() => DeliveryAdress)
  async setDeliveryAdress(
    @Ctx() ctx: Context,
    @Arg('input') input: DeliveryAdressInput,
  ) {
    return await this.userService.setDeliveryAdress(ctx, input);
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
