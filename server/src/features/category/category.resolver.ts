import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IdInput } from 'src/types/input.type';
import { ResMessage } from 'src/types/object.type';
import { CategoryInput, EditCategoryInput } from './category.input';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Resolver()
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(() => [Category])
  async getCategories() {
    return await this.categoryService.getCategories();
  }

  @Mutation(() => Category)
  async addCategory(@Args('input') input: CategoryInput) {
    return await this.categoryService.addCategory(input);
  }

  @Mutation(() => ResMessage)
  async editCategory(@Args('input') input: EditCategoryInput) {
    return await this.categoryService.editCategory(input);
  }

  @Mutation(() => ResMessage)
  async deleteCategory(@Args('input') input: IdInput) {
    return await this.categoryService.deleteCategory(input);
  }
}
