import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { Context } from '../../types/context';
import { IdInput } from '../../types/inputs';
import { GraphQLVoid } from '../../types/responses';
import { ViewService } from './service';

@Resolver()
export class ViewResolver {
  constructor(private viewService: ViewService) {
    this.viewService = new ViewService();
  }

  @Mutation(() => GraphQLVoid, { nullable: true })
  async addView(@Ctx() ctx: Context, @Arg('input') input: IdInput) {
    await this.viewService.addView(ctx, input);
    return null;
  }
}
