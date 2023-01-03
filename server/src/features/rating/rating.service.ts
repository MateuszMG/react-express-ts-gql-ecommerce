import { IdInput } from 'src/types/input.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rating, RatingDocument } from './rating.model';
import { ResMessage } from 'src/types/object.type';
import Ctx from 'src/types/context.type';
import {
  AddRatingInput,
  EditRatingInput,
  GetRatingsInput,
} from './rating.input';
import { ProductDocument, Ratings } from '../product/product.model';
import { calculateRatings } from 'src/utils/services/rating.utils';

interface RatingObject {
  rating: number;
}

@Injectable()
export class RatingService {
  constructor(
    @InjectModel('rating') private ratingModel: Model<RatingDocument>,
    @InjectModel('product') private productModel: Model<ProductDocument>,
  ) {}

  async getRatings(input: GetRatingsInput): Promise<Rating[]> {
    const ratings = await this.ratingModel
      .find({ productId: input.productId })
      .limit(10);

    return ratings;
  }

  async addRating(ctx: Ctx, input: AddRatingInput): Promise<Rating> {
    const { username, id } = ctx.req.user;

    const product = await this.productModel.findById(input.productId);

    const ratingsObjects = (await this.ratingModel
      .find({ productId: product.id })
      .select(['rating', '-_id'])) as RatingObject[];

    const ratings = calculateRatings({
      ...product.ratings,
      actualRatings: [
        ...ratingsObjects.map((item) => item.rating),
        input.rating,
      ],
    });

    await this.productModel.findByIdAndUpdate(input.productId, {
      ratings,
    });

    const rating: Omit<Rating, 'id' | 'createdAt' | 'updatedAt'> = {
      ...input,
      username,
      userId: id,
    };

    return await new this.ratingModel(rating).save();
  }

  async editRating(input: EditRatingInput): Promise<Rating> {
    const rating = await this.ratingModel.findById(input.id);
    const product = await this.productModel.findById(rating.productId);

    const updatedRating = await this.ratingModel.findByIdAndUpdate(
      input.id,
      {
        comment: input.comment,
        rating: input.rating,
      },
      { new: true },
    );

    await this.handleSaveRatings(rating.productId, product.ratings);

    return updatedRating;
  }

  async deleteRating(input: IdInput): Promise<ResMessage> {
    const rating = await this.ratingModel.findById(input.id);
    const product = await this.productModel.findById(rating.productId);

    await this.ratingModel.findByIdAndDelete(input.id);

    await this.handleSaveRatings(rating.productId, product.ratings);

    return { message: 'Rating has been deleted' };
  }

  private async handleSaveRatings(productId: string, productRatings: Ratings) {
    const ratingsObjects = (await this.ratingModel
      .find({ productId })
      .select(['rating', '-_id'])) as RatingObject[];

    const ratings = calculateRatings({
      ...productRatings,
      actualRatings: ratingsObjects.map((item) => item.rating),
    });

    await this.productModel.findByIdAndUpdate(productId, {
      ratings,
    });
  }
}