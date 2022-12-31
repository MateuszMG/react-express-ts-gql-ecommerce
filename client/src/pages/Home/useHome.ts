import { useGetProductsQuery } from '../../generated/types';

export const useHome = () => {
  const { data, client } = useGetProductsQuery();
  const products = data?.getProducts;

  return {
    products,
  };
};
