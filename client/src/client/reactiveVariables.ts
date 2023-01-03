import { makeVar } from '@apollo/client';
import { Category, Comment, Product } from '../generated/types';

export const editedProductVar = makeVar<Product | null>(null);

export const editedCategoryVar = makeVar<Category | null>(null);

export const editedCommentVar = makeVar<Comment | null>(null);
