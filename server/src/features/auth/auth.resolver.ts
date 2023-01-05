import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import Ctx from 'src/types/context.type';
import { ResMessage } from 'src/types/object.type';
import { LoginInput, RegisterInput } from './auth.input';
import { AccessToken, DecodedUser } from './auth.object';
import { AuthService } from './auth.service';

@Resolver(() => AccessToken)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AccessToken)
  async login(@Args('loginInput') loginInput: LoginInput) {
    return await this.authService.login(loginInput);
  }

  @Mutation(() => AccessToken)
  async register(@Args('registerInput') registerInput: RegisterInput) {
    return await this.authService.register(registerInput);
  }

  @Query(() => ResMessage)
  async logout(@Context() context: Ctx) {
    return await this.authService.logout(context);
  }

  @Query(() => DecodedUser || null)
  async profile(@Context() context: Ctx) {
    console.log('context', context.req.user);

    if (!context.req.user) return null;

    const { id, username, email, roles } = context.req.user;

    return {
      id,
      username,
      email,
      roles,
    };
  }
}
