import { editedCategoryVar } from '../../../client/reactiveVariables';
import {
  Category,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from '../../../generated/types';

export const useCategoryList = () => {
  const [deleteCategory] = useDeleteCategoryMutation();

  const { data, client } = useGetCategoriesQuery();
  const categories = data?.getCategories;
  const { cache } = client;

  const handleEdit = (item: Category) => {
    editedCategoryVar(item);
  };

  const handleDelete = (item: Category) => {
    deleteCategory({
      variables: { input: { id: item.id } },
      onCompleted: () => {
        cache.evict({ id: cache.identify({ ...item }) });
        cache.gc();
      },
      onError: (err) => console.log('err', { err }),
    });
  };

  return { handleDelete, handleEdit, categories };
};
