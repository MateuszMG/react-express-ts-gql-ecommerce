import { makeVar } from '@apollo/client';
import { Product } from '../generated/types';

export const editedProductVar = makeVar<Product | null>(null);
