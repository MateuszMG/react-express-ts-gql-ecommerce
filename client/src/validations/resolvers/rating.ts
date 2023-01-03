import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ratingSchema } from '../schemas/rating';

const validation = yup.object({
  ...ratingSchema,
});

export type RatingSchema = yup.InferType<typeof validation>;

export const ratingResolver = yupResolver(validation);
