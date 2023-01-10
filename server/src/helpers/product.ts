import { Distinction, Sale } from '../modules/product/model';

interface IsActivePromotion {
  nowTime: number;
  object: Sale | Distinction;
}

export const isActivePromotion = ({ nowTime, object }: IsActivePromotion) => {
  if (!object.active) return false;

  const startTime = new Date(object.startTime).getTime();
  const endTime = new Date(object.endTime).getTime();

  return startTime < nowTime && endTime > nowTime;
};

interface CalculatePercentage {
  addition: number;
  base: number;
}

export const calculatePercentage = ({ addition, base }: CalculatePercentage) =>
  addition ? +(((base + addition) / addition) ** -1 * 100).toFixed() : 0;
