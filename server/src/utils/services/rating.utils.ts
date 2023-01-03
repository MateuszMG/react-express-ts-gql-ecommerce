import { Ratings } from 'src/features/product/product.model';

interface CalculateRating {
  activeFake: boolean;
  actualRatings: number[];
  fakeAmount: number;
  fakeTotal: number;
}

export const calculateRatings = ({
  activeFake,
  actualRatings,
  fakeAmount,
  fakeTotal,
}: CalculateRating): Ratings => {
  const originalTotal = actualRatings.length;
  const originalAmount = +(
    actualRatings.reduce((acc, val) => acc + val) / originalTotal
  ).toFixed(2);

  const fakeRatingArray = Array(fakeTotal).fill(fakeAmount);
  const originalAndFakeTotal = originalTotal + fakeRatingArray.length;
  const originalAndFakeAmount = +(
    [...actualRatings, ...fakeRatingArray].reduce((acc, val) => acc + val) /
    originalAndFakeTotal
  ).toFixed(2);

  return {
    activeFake,
    fakeAmount,
    fakeTotal,

    originalAmount,
    originalTotal,
    originalAndFakeAmount,
    originalAndFakeTotal,
  };
};
