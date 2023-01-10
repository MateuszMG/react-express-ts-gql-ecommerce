import { AddRatingInput, EditRatingInput, GetRatingsInput } from './inputs';
import { Context } from '../../types/context';
import { IdInput } from '../../types/inputs';
import { ProductModel, Ratings } from '../product/model';
import { Rating, RatingContents, RatingModel } from './model';
import { ResMessage } from '../../types/responses';

interface RatingObject {
  rating: number;
}

interface CalculateRating {
  activeFake: boolean;
  actualRatings: number[];
  fakeAmount: number;
  fakeTotal: number;
}

export class RatingService {
  async getRatings(input: GetRatingsInput): Promise<Rating[]> {
    const ratings = await RatingModel.find({
      productId: input.productId,
    }).limit(10);

    return ratings;
  }

  async addRating(ctx: Context, input: AddRatingInput): Promise<Rating> {
    const { username, _id } = ctx.req.user!;

    const product = await ProductModel.findById(input.productId);
    if (!product) throw 'Error';

    const ratingsObjects = (await RatingModel.find({
      productId: product._id,
    }).select(['rating', '-_id'])) as RatingObject[];

    const ratings = this.calculateRatings({
      ...product.ratings,
      actualRatings: [
        ...ratingsObjects.map((item) => item.rating),
        input.rating,
      ],
    });

    await ProductModel.findByIdAndUpdate(input.productId, {
      ratings,
    });

    const rating: RatingContents = {
      ...input,
      username,
      userId: _id,
    };

    return await new RatingModel<RatingContents>(rating).save();
  }

  async editRating(input: EditRatingInput): Promise<Rating> {
    const rating = await RatingModel.findById(input._id);
    if (!rating) throw 'Error';
    const product = await ProductModel.findById(rating.productId);
    if (!product) throw 'Error';

    const updatedRating = await RatingModel.findByIdAndUpdate(
      input._id,
      {
        comment: input.comment,
        rating: input.rating,
      },
      { new: true },
    );

    await this.handleSaveRatings(rating.productId, product.ratings);

    return updatedRating!;
  }

  async deleteRating(input: IdInput): Promise<ResMessage> {
    const rating = await RatingModel.findById(input._id);
    if (!rating) throw 'Error';
    const product = await ProductModel.findById(rating.productId);
    if (!product) throw 'Error';

    await RatingModel.findByIdAndDelete(input._id);

    await this.handleSaveRatings(rating.productId, product.ratings);

    return { message: 'Rating has been deleted' };
  }

  private async handleSaveRatings(productId: string, productRatings: Ratings) {
    const ratingsObjects = (await RatingModel.find({ productId }).select([
      'rating',
      '-_id',
    ])) as RatingObject[];

    const ratings = this.calculateRatings({
      ...productRatings,
      actualRatings: ratingsObjects.map((item) => item.rating),
    });

    await ProductModel.findByIdAndUpdate(productId, {
      ratings,
    });
  }

  private calculateRatings({
    activeFake,
    actualRatings,
    fakeAmount,
    fakeTotal,
  }: CalculateRating): Ratings {
    const originalTotal = actualRatings.length;
    const originalAmount = +(
      actualRatings.reduce((acc, val) => acc + val) / originalTotal
    ).toFixed(2);

    const fakeRatingArray = Array(fakeTotal).fill(fakeAmount);
    const originalAndFakeTotal = originalTotal + fakeRatingArray.length;
    const originalAndFakeAmount = +(
      [...actualRatings, ...fakeRatingArray].reduce((acc, val) => acc + val) /
      originalAndFakeTotal
    ).toFixed(2);

    return {
      activeFake,
      fakeAmount,
      fakeTotal,

      originalAmount,
      originalTotal,
      originalAndFakeAmount,
      originalAndFakeTotal,
    };
  }
}
