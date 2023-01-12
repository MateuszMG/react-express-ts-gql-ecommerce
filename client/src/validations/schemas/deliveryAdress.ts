import * as yup from 'yup';
import { errorMessages } from '../errorMessages';

export const deliveryAdressSchema = {
  firstName: yup.string().required().min(2),
  lastName: yup.string().required().min(2),
  address: yup.string().required().min(2),
  postCode: yup.string().required().min(2),
  city: yup.string().required().min(2),
  state: yup.string().required().min(2),
  phoneNumber: yup.string().required().min(2),
};
