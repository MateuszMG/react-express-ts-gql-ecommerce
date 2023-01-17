import { Sale } from '../../generated/types';
import { promoValidation } from '../../validations/promoValidation';
import { Percent, PriceBeforeSale, RedPrice, Wrapper } from './Price.styled';

interface PriceProps {
  price: number;
  sale: Sale;
}

export const Price = ({ price, sale }: PriceProps) => {
  const isActive = promoValidation(sale);

  return (
    <Wrapper>
      {isActive ? (
        <>
          <PriceBeforeSale>{sale.priceBeforeSale.toFixed(2)}$</PriceBeforeSale>
          <Percent>-{sale.percentageDiscount}%</Percent>
          <RedPrice>{sale.priceAfterSale.toFixed(2)}$</RedPrice>
        </>
      ) : (
        <RedPrice>{price.toFixed(2)}$</RedPrice>
      )}
    </Wrapper>
  );
};
