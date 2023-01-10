import { Context } from '../../types/context';
import { Ctx, Mutation, Resolver } from 'type-graphql';
import { ResId, ResMessage } from '../../types/responses';
import { SoldService } from './service';

@Resolver()
export class SoldResolver {
  constructor(private soldService: SoldService) {
    this.soldService = new SoldService();
  }

  @Mutation(() => ResId)
  async createPayment(@Ctx() ctx: Context) {
    return await this.soldService.createPayment(ctx);
  }

  @Mutation(() => ResMessage)
  async savePayment(@Ctx() ctx: Context) {
    return await this.soldService.savePayment(ctx);
  }
}
