import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../client/client';

import {
  GetProductsDocument,
  GetProductsQuery,
  Product as IProduct,
  useAddViewMutation,
  useGetProductLazyQuery,
} from '../../generated/types';
export const useProduct = () => {
  const productId = useParams().productId as string;
  const [product, setProduct] = useState<IProduct>();

  const [getProduct, { loading, error }] = useGetProductLazyQuery();

  const [addView] = useAddViewMutation();

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
      variables: { input: { id: productId } },
      onCompleted: (data) => {
        console.log('data', data);

        setProduct(data.getProduct);
      },
      onError: (error) => {
        console.log('error', error);
      },
    });

  useEffect(() => {
    addView({ variables: { input: { id: productId } } });
  }, []);

  console.log('product', product);
  return { product };
};
