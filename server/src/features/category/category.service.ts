import { Category, CategoryDocument, ICategory } from './category.model';
import { CategoryInput, EditCategoryInput } from './category.input';
import { IdInput } from 'src/types/input.type';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResMessage } from 'src/types/object.type';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async getCategories(): Promise<Category[]> {
    const categories = await this.categoryModel.find({}).limit(10);
    return categories || [];
  }

  async addCategory(input: CategoryInput): Promise<Category> {
    console.log('input', input);

    const newCategory = await new this.categoryModel<ICategory>(input).save();
    console.log('newCategory', newCategory);

    return newCategory;
  }

  async editCategory(input: EditCategoryInput): Promise<ResMessage> {
    const { id, ...rest } = input;

    await this.categoryModel.findByIdAndUpdate(id, rest, { new: true });

    return { message: 'Updated' };
  }

  async deleteCategory(input: IdInput): Promise<ResMessage> {
    const { id } = input;

    await this.categoryModel.findByIdAndDelete(id);

    return { message: 'Deleted' };
  }
}
