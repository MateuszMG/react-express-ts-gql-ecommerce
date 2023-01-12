import { makeVar } from '@apollo/client';
import { Category, Rating, Product, DeliveryAdress } from '../generated/types';

export const editedProductVar = makeVar<Product | null>(null);

export const editedCategoryVar = makeVar<Category | null>(null);

export const editedRatingVar = makeVar<Rating | null>(null);

export const editedDeliveryAdressVar = makeVar<DeliveryAdress | null>(null);
