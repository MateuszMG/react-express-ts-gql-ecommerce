import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Category } from './model';
import { CategoryInput, EditCategoryInput } from './inputs';
import { CategoryService } from './service';
import { IdInput } from '../../types/inputs';
import { ResMessage } from '../../types/responses';

@Resolver()
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {
    this.categoryService = new CategoryService();
  }

  @Query(() => [Category])
  async getCategories() {
    return await this.categoryService.getCategories();
  }

  @Mutation(() => Category)
  async addCategory(@Arg('input') input: CategoryInput) {
    return await this.categoryService.addCategory(input);
  }

  @Mutation(() => ResMessage)
  async editCategory(@Arg('input') input: EditCategoryInput) {
    return await this.categoryService.editCategory(input);
  }

  @Mutation(() => ResMessage)
  async deleteCategory(@Arg('input') input: IdInput) {
    return await this.categoryService.deleteCategory(input);
  }
}
