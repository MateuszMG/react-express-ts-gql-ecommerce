import { productSchema } from '../schemas/product';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validation = yup.object({
  ...productSchema,
});

export type ProductSchema = yup.InferType<typeof validation>;

export const productResolver = yupResolver(validation);
