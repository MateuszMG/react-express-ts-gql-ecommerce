import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import Ctx from 'src/types/context.type';
import { IdInput } from 'src/types/input.type';
import { GraphQLVoid } from 'src/types/object.type';
import { ViewService } from './view.service';

@Resolver()
export class ViewResolver {
  constructor(private viewService: ViewService) {}

  @Mutation(() => GraphQLVoid, { nullable: true })
  async addView(@Context() ctx: Ctx, @Args('input') input: IdInput) {
    await this.viewService.addView(ctx, input);
    return null;
  }
}
