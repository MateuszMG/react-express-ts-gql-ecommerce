import { editedCategoryVar } from '../../../client/reactiveVariables';
import { randomNumber } from '../../../helpers/number';
import { Reference, useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  CategoryFragmentDoc,
  GetCategoriesDocument,
  GetCategoriesQuery,
  useAddCategoryMutation,
  useEditCategoryMutation,
} from '../../../generated/types';

export const useCategoryForm = () => {
  const [editCategory] = useEditCategoryMutation();
  const [addCategory, { client, loading }] = useAddCategoryMutation();
  const { cache } = client;

  const editedCategory = useReactiveVar(editedCategoryVar);

  const {
    formState: { errors, isValid, isDirty },
    handleSubmit,
    register,
    reset,
  } = useForm<CategorySchema>({
    mode: 'onChange',
    resolver: yupResolver(CategoryValidation),
    defaultValues: {
      category: 'Category --' + randomNumber(),
    },
  });

  const onSubmit = handleSubmit((input) => {
    if (editedCategory) {
      editCategory({
        variables: { input: { id: editedCategory.id, ...input } },
        onCompleted: () => {
          cache.modify({
            id: cache.identify({ ...editedCategory }),
            fields: {
              category() {
                return input.category;
              },
            },
          });
        },
        onError: (error) => console.log('error', { error }),
      });

      editedCategoryVar(null);
    } else {
      addCategory({
        variables: { input },
        onCompleted: (data) => {
          const newCategory = data.addCategory;

          const categories = cache.readQuery({
            query: GetCategoriesDocument,
          }) as GetCategoriesQuery;

          cache.modify({
            id: cache.identify({ __typename: 'Query', categories }),
            fields: {
              getCategories(existingCategoriesRefs = [], { readField }) {
                const newCategoriesRef = cache.writeFragment({
                  data: newCategory,
                  fragment: CategoryFragmentDoc,
                });

                const alreadyExists = existingCategoriesRefs.some(
                  (ref: Reference) => readField('id', ref) === newCategory.id,
                );

                if (alreadyExists) return existingCategoriesRefs;
                return [...existingCategoriesRefs, newCategoriesRef];
              },
            },
          });
        },
        onError: (error) => console.log('error', { error }),
      });
    }

    reset({ category: 'Category --' + randomNumber() });
  });

  useEffect(() => {
    if (!editedCategory) return;
    const { __typename, ...category } = editedCategory;
    reset(category);
  }, [editedCategory]);

  return { errors, isDirty, isValid, loading, onSubmit, register, reset };
};

const CategoryValidation = yup.object({
  category: yup
    .string()
    .required('Category is required')
    .min(2, 'Category is required')
    .max(64, 'Category cannot exceed 128 characters'),
});

type CategorySchema = yup.InferType<typeof CategoryValidation>;
