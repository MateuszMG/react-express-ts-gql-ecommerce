import { Category, CategoryModel, CategoryContents } from './model';
import { CategoryInput, EditCategoryInput } from './inputs';
import { IdInput } from '../../types/inputs';
import { ResMessage } from '../../types/responses';

export class CategoryService {
  async getCategories(): Promise<Category[]> {
    const categories = await CategoryModel.find({}).limit(10);
    return categories || [];
  }

  async addCategory(input: CategoryInput): Promise<Category> {
    console.log('input', input);

    const newCategory = await new CategoryModel<CategoryContents>(input).save();
    console.log('newCategory', newCategory);

    return newCategory;
  }

  async editCategory(input: EditCategoryInput): Promise<ResMessage> {
    const { _id, ...rest } = input;

    await CategoryModel.findByIdAndUpdate(_id, rest, { new: true });

    return { message: 'Updated' };
  }

  async deleteCategory(input: IdInput): Promise<ResMessage> {
    const { _id } = input;

    await CategoryModel.findByIdAndDelete(_id);

    return { message: 'Deleted' };
  }
}
