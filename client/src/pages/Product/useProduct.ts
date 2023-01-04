import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../client/client';
import {
  GetProductsForGuestDocument,
  GetProductsForGuestQuery,
  ProductForGuest,
  useAddViewMutation,
  useGetProductForGuestLazyQuery,
} from '../../generated/types';

export const useProduct = () => {
  const productId = useParams().productId as string;
  const [product, setProduct] = useState<ProductForGuest>();

  const [getProduct, { loading, error }] = useGetProductForGuestLazyQuery();

  const [addView] = useAddViewMutation();

  const products = client.cache.readQuery({
    query: GetProductsForGuestDocument,
  }) as GetProductsForGuestQuery;

  const selectedProduct = products?.getProductsForGuest.find(
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

        setProduct(data.getProductForGuest);
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
