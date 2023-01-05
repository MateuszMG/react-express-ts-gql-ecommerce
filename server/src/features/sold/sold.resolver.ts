import { Context, Mutation, Resolver } from '@nestjs/graphql';
import { Ctx } from 'src/types/context.type';
import { ResId, ResMessage } from 'src/types/object.type';
import { RolesGuard } from 'src/guards/roles.guard';
import { SoldService } from './sold.service';
import { UseGuards } from '@nestjs/common';
import { UserRoles } from '../auth/auth.model';

@Resolver()
@UseGuards(new RolesGuard([UserRoles.USER, UserRoles.MODERATOR]))
export class SoldResolver {
  constructor(private soldService: SoldService) {}

  @Mutation(() => ResId)
  async createPayment(@Context() ctx: Ctx) {
    return await this.soldService.createPayment(ctx);
  }

  @Mutation(() => ResMessage)
  async savePayment(@Context() ctx: Ctx) {
    return await this.soldService.savePayment(ctx);
  }
}
