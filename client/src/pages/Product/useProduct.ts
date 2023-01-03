import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../client/client';

import {
  GetProductsDocument,
  GetProductsQuery,
  Product as IProduct,
  useGetProductLazyQuery,
} from '../../generated/types';
export const useProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct>();

  const [getProduct, { loading, error }] = useGetProductLazyQuery();

  const products = client.cache.readQuery({
    query: GetProductsDocument,
  }) as GetProductsQuery;

  const selectedProduct = products?.getProducts.find(
    (item) => item.id === productId,
  );

  selectedProduct && !product && setProduct(selectedProduct);
  !selectedProduct &&
    !product &&
    !loading &&
    !error &&
    getProduct({
      variables: { input: { id: productId as string } },
      onCompleted: (data) => {
        console.log('data', data);

        setProduct(data.getProduct);
      },
      onError: (error) => {
        console.log('error', error);
      },
    });

  console.log('product', product);
  return { product };
};
