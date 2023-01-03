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
      active: false,
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
    },

    sale: {
      active: false,
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),

      priceBeforeSale: randomNumber(2),
      priceAfterSale: randomNumber(2),
      percentageDiscount: randomNumber(2),
    },

    ratings: {
      activeFake: true,
      fakeTotal: randomNumber(2),
      fakeAmount: +(Math.random() * 5 + 1).toFixed(),
    },

    views: {
      activeFake: true,
      fakeTotal: randomNumber(2),
    },

    sold: {
      activeFake: true,
      fakeTotal: randomNumber(2),
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
