import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IdInput } from 'src/types/input.type';
import { Rating } from './rating.model';
import { RatingService } from './rating.service';
import { ResMessage } from 'src/types/object.type';
import { RolesGuard } from 'src/guards/roles.guard';
import { UseGuards } from '@nestjs/common';
import { UserRoles } from '../auth/auth.model';
import Ctx from 'src/types/context.type';
import {
  AddRatingInput,
  EditRatingInput,
  GetRatingsInput,
} from './rating.input';

@Resolver()
@UseGuards(new RolesGuard([UserRoles.USER, UserRoles.MODERATOR]))
export class RatingResolver {
  constructor(private ratingService: RatingService) {}

  @Query(() => [Rating])
  async getRatings(@Args('input') input: GetRatingsInput) {
    return await this.ratingService.getRatings(input);
  }

  @Mutation(() => Rating)
  async addRating(@Context() ctx: Ctx, @Args('input') input: AddRatingInput) {
    return await this.ratingService.addRating(ctx, input);
  }

  @Mutation(() => Rating)
  async editRating(@Args('input') input: EditRatingInput) {
    return await this.ratingService.editRating(input);
  }

  @Mutation(() => ResMessage)
  async deleteRating(@Args('input') input: IdInput) {
    return await this.ratingService.deleteRating(input);
  }
}
