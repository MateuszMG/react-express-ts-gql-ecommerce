import { deliveryAdressSchema } from '../schemas/deliveryAdress';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validation = yup.object({
  ...deliveryAdressSchema,
});

export type DeliveryAdressSchema = yup.InferType<typeof validation>;

export const deliveryAdressResolver = yupResolver(validation);
