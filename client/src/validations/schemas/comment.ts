import * as yup from 'yup';
import { errorMessages } from '../errorMessages';

export const commentSchema = {
  comment: yup
    .string()
    .required(errorMessages.required('Comment'))
    .strict(true)
    .trim(errorMessages.trim('Comment'))
    .min(2, errorMessages.max('Comment', 2))
    .max(1000, errorMessages.max('Comment', 1000)),
};
