import { AccessToken, DecodedUser } from './responses';
import { Arg, Mutation, Query, Resolver, Ctx } from 'type-graphql';
import { AuthService } from './service';
import { Context } from '../../types/context';
import { LoginInput, RegisterInput } from './inputs';
import { ResMessage } from '../../types/responses';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {
    this.authService = new AuthService();
  }

  @Mutation(() => AccessToken)
  async login(@Arg('input') input: LoginInput) {
    return await this.authService.login(input);
  }

  @Mutation(() => AccessToken)
  async register(@Arg('input') input: RegisterInput) {
    return await this.authService.register(input);
  }

  @Query(() => ResMessage)
  async logout(@Ctx() context: Context) {
    return await this.authService.logout(context);
  }

  @Query(() => DecodedUser || null)
  async profile(@Ctx() context: Context) {
    console.log('context', context.req.user);

    if (!context.req.user) return null;

    const { _id, username, email, roles } = context.req.user;

    return {
      _id,
      username,
      email,
      roles,
    };
  }
}
