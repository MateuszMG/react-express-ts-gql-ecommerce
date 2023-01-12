import { ratingSchema } from '../schemas/rating';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validation = yup.object({
  ...ratingSchema,
});

export type RatingSchema = yup.InferType<typeof validation>;

export const ratingResolver = yupResolver(validation);
