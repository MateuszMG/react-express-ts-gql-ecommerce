import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Rating } from './model';
import { ResMessage } from '../../types/responses';
import { Context } from '../../types/context';
import { IdInput } from '../../types/inputs';
import { RatingService } from './service';
import { AddRatingInput, EditRatingInput, GetRatingsInput } from './inputs';

@Resolver()
export class RatingResolver {
  constructor(private ratingService: RatingService) {
    this.ratingService = new RatingService();
  }

  @Query(() => [Rating])
  async getRatings(@Arg('input') input: GetRatingsInput) {
    return await this.ratingService.getRatings(input);
  }

  @Mutation(() => Rating)
  async addRating(@Ctx() ctx: Context, @Arg('input') input: AddRatingInput) {
    return await this.ratingService.addRating(ctx, input);
  }

  @Mutation(() => Rating)
  async editRating(@Arg('input') input: EditRatingInput) {
    return await this.ratingService.editRating(input);
  }

  @Mutation(() => ResMessage)
  async deleteRating(@Arg('input') input: IdInput) {
    return await this.ratingService.deleteRating(input);
  }
}
