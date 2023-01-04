import * as yup from 'yup';
import { dateTimeRangeValidation } from '../validationHelpers';

export const productSchema = {
  title: yup
    .string()
    .required('Title is required')
    .max(128, 'Title cannot exceed 128 characters'),
  description: yup
    .string()
    .required('Description is required')
    .max(5000, 'Description cannot exceed 5000 characters'),
  subtitle: yup.string().required(),
  model: yup.string().required(),

  category: yup.string().required(),

  quantity: yup
    .number()
    .required('Quantity is required')
    .max(1_000_000, 'Max 1 000 000'),

  active: yup.boolean().required(),

  price: yup.object({
    wholesale: yup.number().required(),
    retail: yup.number().required(),
  }),

  size: yup.object({
    weight: yup.number().required(),
    length: yup.number().required(),
    width: yup.number().required(),
    height: yup.number().required(),
  }),

  distinction: yup.object({
    active: yup.boolean().required(),
    startTime: yup
      .string()
      .required()
      .test('startTime', 'error', dateTimeRangeValidation),
    endTime: yup
      .string()
      .required()
      .test('endTime', 'error', dateTimeRangeValidation),
  }),

  sale: yup.object({
    active: yup.boolean().required(),
    startTime: yup
      .string()
      .required()
      .test('startTime', 'error', dateTimeRangeValidation),
    endTime: yup
      .string()
      .required()
      .test('endTime', 'error', dateTimeRangeValidation),

    priceBeforeSale: yup.number().required(),
    priceAfterSale: yup.number().required(),
    percentageDiscount: yup.number().required(),
  }),

  ratings: yup.object({
    activeFake: yup.boolean().required(),
    // details: yup.array().of(
    //   yup.object().shape({
    //     ratingId: yup.string(),
    //     userId: yup.string(),
    //     rating: yup.number(),
    //     date: yup.string(),
    //   }),
    // ),
    fakeTotal: yup.number().required(),
    fakeAmount: yup.number().required(),
    // originalTotal: yup.number().required(),
    //  originalAmount: yup.number().required(),
    // originalAndFakeTotal: yup.number().required(),
    // originalAndFakeAmount: yup.number().required(),
  }),

  views: yup.object({
    activeFake: yup.boolean().required(),
    // details: yup.array().of(
    //   yup.object().shape({
    //     guestIP: yup.string(),
    //     date: yup.string(),
    //   }),
    // ),
    fakeTotal: yup.number().required(),
    // originalTotal: yup.number().required(),
    // originalAndFakeTotal: yup.number().required(),
    // originalTotalViewsWithoutDuplicateIPAddresses: yup.number().required(),
  }),

  solds: yup.object({
    activeFake: yup.boolean().required(),
    fakeTotal: yup.number().required(),
  }),
};
