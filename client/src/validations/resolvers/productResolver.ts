import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { productSchema } from '../schemas/productSchema';

const productValidation = yup.object({
  ...productSchema,
});

export type ProductSchema = yup.InferType<typeof productValidation>;

export const productResolver = yupResolver(productValidation);
