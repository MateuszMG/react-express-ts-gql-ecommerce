import { Category } from '../../../generated/types';
import { randomNumber } from '../../../helpers/number';

export const productFormHelpers = () => {
  const createImageSrc = () =>
    `https://picsum.photos/id/${randomNumber(3)}/200/200`;

  const createDefaultValues = () => ({
    title: 'Title --' + randomNumber(),
    description: 'Description --' + randomNumber(),
    subtitle: 'subtitle --' + randomNumber(),

    category: 'Category --537399',
    // category: 'category --' + randomNumber(),

    // category: {
    //   label: 'Category --537399',
    //   value: 'Category --537399',
    // },

    model: 'model --' + randomNumber(),

    quantity: randomNumber(),
    active: true,

    price: {
      retail: randomNumber(3),
      wholesale: randomNumber(3),
    },

    size: {
      weight: randomNumber(2),
      length: randomNumber(2),
      width: randomNumber(2),
      height: randomNumber(2),
    },

    distinction: {
      active: true,
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
    },

    sale: {
      active: true,
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),

      priceBeforeSale: randomNumber(2),
      priceAfterSale: randomNumber(2),
      percentageDiscount: randomNumber(2),
    },

    ratings: {
      activeFake: true,
      // details: [],
      fakeTotal: randomNumber(2),
      fakeQuantity: randomNumber(2),
      // originalTotal: randomNumber(2),
      // originalQuantity: randomNumber(2),
      // totalOriginalAndFake: randomNumber(2),
      // quantityOriginalAndFake: randomNumber(2),
    },

    views: {
      activeFake: true,
      // details: [],
      fakeTotal: randomNumber(2),
      // originalTotal: randomNumber(2),
      // originalAndFakeTotal: randomNumber(2),
      // originalTotalViewsWithoutDuplicateIPAddresses: randomNumber(2),
    },
  });

  const createCategoriesOptions = (categories: Category[]) =>
    // categories.map(({ category }) => category);
    categories.map(({ category }) => ({
      value: category,
      label: category,
    }));

  return { createCategoriesOptions, createDefaultValues, createImageSrc };
};
