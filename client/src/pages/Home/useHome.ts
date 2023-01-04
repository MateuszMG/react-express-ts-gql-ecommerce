import { useGetProductsForGuestQuery } from '../../generated/types';

export const useHome = () => {
  const { data, client } = useGetProductsForGuestQuery({
    onError: (err) => console.log('err', { err }),
  });
  const products = data?.getProductsForGuest;
  console.log('useGetProductsForGuestQuery', products);

  return {
    products,
  };
};
