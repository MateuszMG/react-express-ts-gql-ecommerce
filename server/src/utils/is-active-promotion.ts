import { Distinction, Sale } from 'src/features/product/product.model';

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
