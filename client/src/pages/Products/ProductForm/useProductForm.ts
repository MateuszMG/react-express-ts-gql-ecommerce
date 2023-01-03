import { editedProductVar } from '../../../client/reactiveVariables';
import { productFormHelpers } from './productFormHelpers';
import { Reference, useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  productResolver,
  ProductSchema,
} from '../../../validations/resolvers/product';
import {
  GetProductsDocument,
  useAddProductMutation,
  GetProductsQuery,
  ProductFragmentDoc,
  useEditProductMutation,
  useGetCategoriesQuery,
} from '../../../generated/types';

export const useProductForm = () => {
  const { createCategoriesOptions, createImageSrc, createDefaultValues } =
    productFormHelpers();

  const [editProduct] = useEditProductMutation();
  const { data } = useGetCategoriesQuery();
  const [addProduct, { client, loading }] = useAddProductMutation();
  const { cache } = client;
  const categoriesOptions = createCategoriesOptions(data?.getCategories || []);

  const editedProduct = useReactiveVar(editedProductVar);

  const {
    control,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    register,
    reset,
  } = useForm<ProductSchema>({
    mode: 'onChange',
    resolver: productResolver,
    defaultValues: createDefaultValues(),
  });

  const onSubmit = handleSubmit((input) => {
    console.log('input', input.distinction);
    console.log('input', input);

    if (editedProduct) {
      editProduct({
        variables: {
          input: {
            id: editedProduct.id,
            image: editedProduct.image,
            ...input,
            // category: input.category.value || '',
          },
        },
        onCompleted: () => {
          cache.modify({
            id: cache.identify({ ...editedProduct }),
            fields: {
              title() {
                return input.title;
              },
              description() {
                return input.description;
              },
              active() {
                return input.active;
              },
              quantity() {
                return input.quantity;
              },
              // wholesale() {
              //   return input.wholesale;
              // },
              // retail() {
              //   return input.retail;
              // },
            },
          });
        },
        onError: (error) => console.log('error', { error }),
      });

      editedProductVar(null);
    } else {
      addProduct({
        variables: {
          input: {
            ...input,
            image: createImageSrc(),
            // category: input.category.value || '',
          },
        },
        onCompleted: (data) => {
          const newProduct = data.addProduct;

          const products = cache.readQuery({
            query: GetProductsDocument,
          }) as GetProductsQuery;

          cache.modify({
            id: cache.identify({ __typename: 'Query', products }),
            fields: {
              getProducts(existingProductsRefs = [], { readField }) {
                const newProductsRef = cache.writeFragment({
                  data: newProduct,
                  fragment: ProductFragmentDoc,
                });

                const alreadyExists = existingProductsRefs.some(
                  (ref: Reference) => readField('id', ref) === newProduct.id,
                );

                if (alreadyExists) return existingProductsRefs;
                return [...existingProductsRefs, newProductsRef];
              },
            },
          });
        },
        onError: (error) => console.log('error', { error }),
      });
    }

    reset(createDefaultValues());
  });

  useEffect(() => {
    if (!editedProduct) return;
    const { __typename, ...product } = editedProduct;
    // reset(product);
  }, [editedProduct]);

  return {
    control,
    categoriesOptions,
    errors,
    isDirty,
    isValid,
    loading,
    onSubmit,
    register,
    reset,
  };
};
