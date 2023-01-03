import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
};

export type AddRatingInput = {
  comment: Scalars['String'];
  productId: Scalars['String'];
  rating: Scalars['Float'];
};

export type Category = {
  __typename?: 'Category';
  category: Scalars['String'];
  id: Scalars['ID'];
};

export type CategoryInput = {
  category: Scalars['String'];
};

export type DecodedUser = {
  __typename?: 'DecodedUser';
  email: Scalars['String'];
  id: Scalars['String'];
  logged: Scalars['Boolean'];
  roles: Array<Scalars['String']>;
  username: Scalars['String'];
};

export type Distinction = {
  __typename?: 'Distinction';
  active: Scalars['Boolean'];
  endTime: Scalars['DateTime'];
  startTime: Scalars['DateTime'];
};

export type EditCategoryInput = {
  category: Scalars['String'];
  id: Scalars['String'];
};

export type EditProductInput = {
  active: Scalars['Boolean'];
  category: Scalars['String'];
  description: Scalars['String'];
  distinction: ProductDistinctionInput;
  id: Scalars['String'];
  image: Scalars['String'];
  model: Scalars['String'];
  price: ProductPriceInput;
  quantity: Scalars['Float'];
  ratings: ProductRatingsInput;
  sale: ProductSaleInput;
  size: ProductSizeInput;
  sold: ProductSoldInput;
  subtitle: Scalars['String'];
  title: Scalars['String'];
  views: ProductViewsInput;
};

export type EditRatingInput = {
  comment: Scalars['String'];
  id: Scalars['String'];
  rating: Scalars['Float'];
};

export type GetRatingsInput = {
  productId: Scalars['String'];
};

export type IdInput = {
  id: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory: Category;
  addProduct: Product;
  addRating: Rating;
  changeActiveProduct: ResMessage;
  deleteCategory: ResMessage;
  deleteProduct: ResMessage;
  deleteRating: ResMessage;
  editCategory: ResMessage;
  editProduct: ResMessage;
  editRating: Rating;
  login: AccessToken;
  register: AccessToken;
};


export type MutationAddCategoryArgs = {
  input: CategoryInput;
};


export type MutationAddProductArgs = {
  input: ProductInput;
};


export type MutationAddRatingArgs = {
  input: AddRatingInput;
};


export type MutationChangeActiveProductArgs = {
  input: IdInput;
};


export type MutationDeleteCategoryArgs = {
  input: IdInput;
};


export type MutationDeleteProductArgs = {
  input: IdInput;
};


export type MutationDeleteRatingArgs = {
  input: IdInput;
};


export type MutationEditCategoryArgs = {
  input: EditCategoryInput;
};


export type MutationEditProductArgs = {
  input: EditProductInput;
};


export type MutationEditRatingArgs = {
  input: EditRatingInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};

export type Price = {
  __typename?: 'Price';
  retail: Scalars['Float'];
  wholesale: Scalars['Float'];
};

export type Product = {
  __typename?: 'Product';
  active: Scalars['Boolean'];
  category: Scalars['String'];
  description: Scalars['String'];
  distinction: Distinction;
  id: Scalars['ID'];
  image: Scalars['String'];
  model: Scalars['String'];
  price: Price;
  quantity: Scalars['Float'];
  ratings: Ratings;
  sale: Sale;
  size: Size;
  sold: Sold;
  subtitle: Scalars['String'];
  title: Scalars['String'];
  views: Views;
};

export type ProductDistinctionInput = {
  active: Scalars['Boolean'];
  endTime: Scalars['DateTime'];
  startTime: Scalars['DateTime'];
};

export type ProductInput = {
  active: Scalars['Boolean'];
  category: Scalars['String'];
  description: Scalars['String'];
  distinction: ProductDistinctionInput;
  image: Scalars['String'];
  model: Scalars['String'];
  price: ProductPriceInput;
  quantity: Scalars['Float'];
  ratings: ProductRatingsInput;
  sale: ProductSaleInput;
  size: ProductSizeInput;
  sold: ProductSoldInput;
  subtitle: Scalars['String'];
  title: Scalars['String'];
  views: ProductViewsInput;
};

export type ProductPriceInput = {
  retail: Scalars['Float'];
  wholesale: Scalars['Float'];
};

export type ProductRatingsInput = {
  activeFake: Scalars['Boolean'];
  fakeAmount: Scalars['Float'];
  fakeTotal: Scalars['Float'];
};

export type ProductSaleInput = {
  active: Scalars['Boolean'];
  endTime: Scalars['DateTime'];
  percentageDiscount: Scalars['Float'];
  priceAfterSale: Scalars['Float'];
  priceBeforeSale: Scalars['Float'];
  startTime: Scalars['DateTime'];
};

export type ProductSizeInput = {
  height: Scalars['Float'];
  length: Scalars['Float'];
  weight: Scalars['Float'];
  width: Scalars['Float'];
};

export type ProductSoldInput = {
  activeFake: Scalars['Boolean'];
  fakeTotal: Scalars['Float'];
};

export type ProductViewsInput = {
  activeFake: Scalars['Boolean'];
  fakeTotal: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getCategories: Array<Category>;
  getHighlightedProduct: Product;
  getProduct: Product;
  getProducts: Array<Product>;
  getRatings: Array<Rating>;
  logout: ResMessage;
  profile: DecodedUser;
};


export type QueryGetProductArgs = {
  input: IdInput;
};


export type QueryGetRatingsArgs = {
  input: GetRatingsInput;
};

export type Rating = {
  __typename?: 'Rating';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isOwner: Scalars['Boolean'];
  productId: Scalars['String'];
  rating: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  username: Scalars['String'];
};

export type Ratings = {
  __typename?: 'Ratings';
  activeFake: Scalars['Boolean'];
  fakeAmount: Scalars['Float'];
  fakeTotal: Scalars['Float'];
  originalAmount: Scalars['Float'];
  originalAndFakeAmount: Scalars['Float'];
  originalAndFakeTotal: Scalars['Float'];
  originalTotal: Scalars['Float'];
};

export type RegisterInput = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type ResMessage = {
  __typename?: 'ResMessage';
  message: Scalars['String'];
};

export type Sale = {
  __typename?: 'Sale';
  active: Scalars['Boolean'];
  endTime: Scalars['DateTime'];
  percentageDiscount: Scalars['Float'];
  priceAfterSale: Scalars['Float'];
  priceBeforeSale: Scalars['Float'];
  startTime: Scalars['DateTime'];
};

export type Size = {
  __typename?: 'Size';
  height: Scalars['Float'];
  length: Scalars['Float'];
  weight: Scalars['Float'];
  width: Scalars['Float'];
};

export type Sold = {
  __typename?: 'Sold';
  activeFake: Scalars['Boolean'];
  details: Array<SoldDetails>;
  fakeTotal: Scalars['Float'];
  originalAndFakeTotal: Scalars['Float'];
  originalTotal: Scalars['Float'];
};

export type SoldDetails = {
  __typename?: 'SoldDetails';
  activeCoupon: Scalars['Boolean'];
  activeDistinction: Scalars['Boolean'];
  activeSale: Scalars['Boolean'];
  amountDiscount: Scalars['Float'];
  date: Scalars['DateTime'];
  guestIP: Scalars['String'];
  percentageDiscount: Scalars['Float'];
  price: Price;
  profit: Scalars['Float'];
  purchasePrice: Scalars['Float'];
  purchasePriceBeforeDiscount: Scalars['Float'];
  quantity: Scalars['Float'];
  soldId: Scalars['String'];
  userId: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  highlightedProductUpdated?: Maybe<Product>;
};

export type Views = {
  __typename?: 'Views';
  activeFake: Scalars['Boolean'];
  details: Array<ViewsDetails>;
  fakeTotal: Scalars['Float'];
  originalAndFakeTotal: Scalars['Float'];
  originalTotal: Scalars['Float'];
  originalTotalViewsWithoutDuplicateIPAddresses: Scalars['Float'];
};

export type ViewsDetails = {
  __typename?: 'ViewsDetails';
  date: Scalars['DateTime'];
  guestIP: Scalars['String'];
};

export type AccessTokenFragment = { __typename?: 'AccessToken', accessToken: string };

export type CategoryFragment = { __typename?: 'Category', id: string, category: string };

export type DecodedUserFragment = { __typename?: 'DecodedUser', id: string, username: string, email: string, roles: Array<string>, logged: boolean };

export type PriceFragment = { __typename?: 'Price', wholesale: number, retail: number };

export type SizeFragment = { __typename?: 'Size', weight: number, length: number, width: number, height: number };

export type DistinctionFragment = { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any };

export type SaleFragment = { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number };

export type RatingsFragment = { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number };

export type ViewsDetailsFragment = { __typename?: 'ViewsDetails', guestIP: string, date: any };

export type ViewsFragment = { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number, details: Array<{ __typename?: 'ViewsDetails', guestIP: string, date: any }> };

export type SoldDetailsFragment = { __typename?: 'SoldDetails', guestIP: string, soldId: string, userId: string, quantity: number, activeSale: boolean, activeCoupon: boolean, activeDistinction: boolean, purchasePriceBeforeDiscount: number, purchasePrice: number, profit: number, amountDiscount: number, percentageDiscount: number, date: any, price: { __typename?: 'Price', wholesale: number, retail: number } };

export type SoldFragment = { __typename?: 'Sold', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, details: Array<{ __typename?: 'SoldDetails', guestIP: string, soldId: string, userId: string, quantity: number, activeSale: boolean, activeCoupon: boolean, activeDistinction: boolean, purchasePriceBeforeDiscount: number, purchasePrice: number, profit: number, amountDiscount: number, percentageDiscount: number, date: any, price: { __typename?: 'Price', wholesale: number, retail: number } }> };

export type ProductFragment = { __typename?: 'Product', id: string, title: string, description: string, subtitle: string, model: string, category: string, active: boolean, quantity: number, image: string, price: { __typename?: 'Price', wholesale: number, retail: number }, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number }, views: { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number, details: Array<{ __typename?: 'ViewsDetails', guestIP: string, date: any }> }, sold: { __typename?: 'Sold', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, details: Array<{ __typename?: 'SoldDetails', guestIP: string, soldId: string, userId: string, quantity: number, activeSale: boolean, activeCoupon: boolean, activeDistinction: boolean, purchasePriceBeforeDiscount: number, purchasePrice: number, profit: number, amountDiscount: number, percentageDiscount: number, date: any, price: { __typename?: 'Price', wholesale: number, retail: number } }> } };

export type RatingFragment = { __typename?: 'Rating', id: string, productId: string, userId: string, username: string, comment: string, rating: number, createdAt: any, updatedAt: any, isOwner: boolean };

export type ResMessageFragment = { __typename?: 'ResMessage', message: string };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AccessToken', accessToken: string } };

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AccessToken', accessToken: string } };

export type AddCategoryMutationVariables = Exact<{
  input: CategoryInput;
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', addCategory: { __typename?: 'Category', id: string, category: string } };

export type EditCategoryMutationVariables = Exact<{
  input: EditCategoryInput;
}>;


export type EditCategoryMutation = { __typename?: 'Mutation', editCategory: { __typename?: 'ResMessage', message: string } };

export type DeleteCategoryMutationVariables = Exact<{
  input: IdInput;
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: { __typename?: 'ResMessage', message: string } };

export type AddProductMutationVariables = Exact<{
  input: ProductInput;
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct: { __typename?: 'Product', id: string, title: string, description: string, subtitle: string, model: string, category: string, active: boolean, quantity: number, image: string, price: { __typename?: 'Price', wholesale: number, retail: number }, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number }, views: { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number, details: Array<{ __typename?: 'ViewsDetails', guestIP: string, date: any }> }, sold: { __typename?: 'Sold', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, details: Array<{ __typename?: 'SoldDetails', guestIP: string, soldId: string, userId: string, quantity: number, activeSale: boolean, activeCoupon: boolean, activeDistinction: boolean, purchasePriceBeforeDiscount: number, purchasePrice: number, profit: number, amountDiscount: number, percentageDiscount: number, date: any, price: { __typename?: 'Price', wholesale: number, retail: number } }> } } };

export type EditProductMutationVariables = Exact<{
  input: EditProductInput;
}>;


export type EditProductMutation = { __typename?: 'Mutation', editProduct: { __typename?: 'ResMessage', message: string } };

export type DeleteProductMutationVariables = Exact<{
  input: IdInput;
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: { __typename?: 'ResMessage', message: string } };

export type ChangeActiveProductMutationVariables = Exact<{
  input: IdInput;
}>;


export type ChangeActiveProductMutation = { __typename?: 'Mutation', changeActiveProduct: { __typename?: 'ResMessage', message: string } };

export type AddRatingMutationVariables = Exact<{
  input: AddRatingInput;
}>;


export type AddRatingMutation = { __typename?: 'Mutation', addRating: { __typename?: 'Rating', id: string, productId: string, userId: string, username: string, comment: string, rating: number, createdAt: any, updatedAt: any, isOwner: boolean } };

export type EditRatingMutationVariables = Exact<{
  input: EditRatingInput;
}>;


export type EditRatingMutation = { __typename?: 'Mutation', editRating: { __typename?: 'Rating', id: string, productId: string, userId: string, username: string, comment: string, rating: number, createdAt: any, updatedAt: any, isOwner: boolean } };

export type DeleteRatingMutationVariables = Exact<{
  input: IdInput;
}>;


export type DeleteRatingMutation = { __typename?: 'Mutation', deleteRating: { __typename?: 'ResMessage', message: string } };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'Category', id: string, category: string }> };

export type GetHighlightedProductQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHighlightedProductQuery = { __typename?: 'Query', getHighlightedProduct: { __typename?: 'Product', id: string, title: string, description: string, subtitle: string, model: string, category: string, active: boolean, quantity: number, image: string, price: { __typename?: 'Price', wholesale: number, retail: number }, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number }, views: { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number, details: Array<{ __typename?: 'ViewsDetails', guestIP: string, date: any }> }, sold: { __typename?: 'Sold', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, details: Array<{ __typename?: 'SoldDetails', guestIP: string, soldId: string, userId: string, quantity: number, activeSale: boolean, activeCoupon: boolean, activeDistinction: boolean, purchasePriceBeforeDiscount: number, purchasePrice: number, profit: number, amountDiscount: number, percentageDiscount: number, date: any, price: { __typename?: 'Price', wholesale: number, retail: number } }> } } };

export type GetProductQueryVariables = Exact<{
  input: IdInput;
}>;


export type GetProductQuery = { __typename?: 'Query', getProduct: { __typename?: 'Product', id: string, title: string, description: string, subtitle: string, model: string, category: string, active: boolean, quantity: number, image: string, price: { __typename?: 'Price', wholesale: number, retail: number }, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number }, views: { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number, details: Array<{ __typename?: 'ViewsDetails', guestIP: string, date: any }> }, sold: { __typename?: 'Sold', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, details: Array<{ __typename?: 'SoldDetails', guestIP: string, soldId: string, userId: string, quantity: number, activeSale: boolean, activeCoupon: boolean, activeDistinction: boolean, purchasePriceBeforeDiscount: number, purchasePrice: number, profit: number, amountDiscount: number, percentageDiscount: number, date: any, price: { __typename?: 'Price', wholesale: number, retail: number } }> } } };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', getProducts: Array<{ __typename?: 'Product', id: string, title: string, description: string, subtitle: string, model: string, category: string, active: boolean, quantity: number, image: string, price: { __typename?: 'Price', wholesale: number, retail: number }, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number }, views: { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number, details: Array<{ __typename?: 'ViewsDetails', guestIP: string, date: any }> }, sold: { __typename?: 'Sold', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, details: Array<{ __typename?: 'SoldDetails', guestIP: string, soldId: string, userId: string, quantity: number, activeSale: boolean, activeCoupon: boolean, activeDistinction: boolean, purchasePriceBeforeDiscount: number, purchasePrice: number, profit: number, amountDiscount: number, percentageDiscount: number, date: any, price: { __typename?: 'Price', wholesale: number, retail: number } }> } }> };

export type GetRatingsQueryVariables = Exact<{
  input: GetRatingsInput;
}>;


export type GetRatingsQuery = { __typename?: 'Query', getRatings: Array<{ __typename?: 'Rating', id: string, productId: string, userId: string, username: string, comment: string, rating: number, createdAt: any, updatedAt: any, isOwner: boolean }> };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = { __typename?: 'Query', logout: { __typename?: 'ResMessage', message: string } };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'DecodedUser', id: string, username: string, email: string, roles: Array<string>, logged: boolean } };

export type HighlightedProductUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type HighlightedProductUpdatedSubscription = { __typename?: 'Subscription', highlightedProductUpdated?: { __typename?: 'Product', id: string, title: string, description: string, subtitle: string, model: string, category: string, active: boolean, quantity: number, image: string, price: { __typename?: 'Price', wholesale: number, retail: number }, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number }, views: { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number, details: Array<{ __typename?: 'ViewsDetails', guestIP: string, date: any }> }, sold: { __typename?: 'Sold', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, details: Array<{ __typename?: 'SoldDetails', guestIP: string, soldId: string, userId: string, quantity: number, activeSale: boolean, activeCoupon: boolean, activeDistinction: boolean, purchasePriceBeforeDiscount: number, purchasePrice: number, profit: number, amountDiscount: number, percentageDiscount: number, date: any, price: { __typename?: 'Price', wholesale: number, retail: number } }> } } | null };

export const AccessTokenFragmentDoc = gql`
    fragment AccessToken on AccessToken {
  accessToken
}
    `;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  id
  category
}
    `;
export const DecodedUserFragmentDoc = gql`
    fragment DecodedUser on DecodedUser {
  id
  username
  email
  roles
  logged @client
}
    `;
export const PriceFragmentDoc = gql`
    fragment Price on Price {
  wholesale
  retail
}
    `;
export const SizeFragmentDoc = gql`
    fragment Size on Size {
  weight
  length
  width
  height
}
    `;
export const DistinctionFragmentDoc = gql`
    fragment Distinction on Distinction {
  active
  startTime
  endTime
}
    `;
export const SaleFragmentDoc = gql`
    fragment Sale on Sale {
  active
  startTime
  endTime
  priceBeforeSale
  priceAfterSale
  percentageDiscount
}
    `;
export const RatingsFragmentDoc = gql`
    fragment Ratings on Ratings {
  activeFake
  fakeTotal
  fakeAmount
  originalTotal
  originalAmount
  originalAndFakeTotal
  originalAndFakeAmount
}
    `;
export const ViewsDetailsFragmentDoc = gql`
    fragment ViewsDetails on ViewsDetails {
  guestIP
  date
}
    `;
export const ViewsFragmentDoc = gql`
    fragment Views on Views {
  activeFake
  details {
    ...ViewsDetails
  }
  fakeTotal
  originalTotal
  originalAndFakeTotal
  originalTotalViewsWithoutDuplicateIPAddresses
}
    ${ViewsDetailsFragmentDoc}`;
export const SoldDetailsFragmentDoc = gql`
    fragment SoldDetails on SoldDetails {
  guestIP
  soldId
  userId
  quantity
  price {
    ...Price
  }
  activeSale
  activeCoupon
  activeDistinction
  purchasePriceBeforeDiscount
  purchasePrice
  profit
  amountDiscount
  percentageDiscount
  date
}
    ${PriceFragmentDoc}`;
export const SoldFragmentDoc = gql`
    fragment Sold on Sold {
  activeFake
  details {
    ...SoldDetails
  }
  fakeTotal
  originalTotal
  originalAndFakeTotal
}
    ${SoldDetailsFragmentDoc}`;
export const ProductFragmentDoc = gql`
    fragment Product on Product {
  id
  title
  description
  subtitle
  model
  category
  active
  quantity
  image
  price {
    ...Price
  }
  size {
    ...Size
  }
  distinction {
    ...Distinction
  }
  sale {
    ...Sale
  }
  ratings {
    ...Ratings
  }
  views {
    ...Views
  }
  sold {
    ...Sold
  }
}
    ${PriceFragmentDoc}
${SizeFragmentDoc}
${DistinctionFragmentDoc}
${SaleFragmentDoc}
${RatingsFragmentDoc}
${ViewsFragmentDoc}
${SoldFragmentDoc}`;
export const RatingFragmentDoc = gql`
    fragment Rating on Rating {
  id
  productId
  userId
  username
  comment
  rating
  createdAt
  updatedAt
  isOwner @client
}
    `;
export const ResMessageFragmentDoc = gql`
    fragment ResMessage on ResMessage {
  message
}
    `;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    ...AccessToken
  }
}
    ${AccessTokenFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($registerInput: RegisterInput!) {
  register(registerInput: $registerInput) {
    ...AccessToken
  }
}
    ${AccessTokenFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const AddCategoryDocument = gql`
    mutation AddCategory($input: CategoryInput!) {
  addCategory(input: $input) {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;
export type AddCategoryMutationFn = Apollo.MutationFunction<AddCategoryMutation, AddCategoryMutationVariables>;

/**
 * __useAddCategoryMutation__
 *
 * To run a mutation, you first call `useAddCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryMutation, { data, loading, error }] = useAddCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCategoryMutation(baseOptions?: Apollo.MutationHookOptions<AddCategoryMutation, AddCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCategoryMutation, AddCategoryMutationVariables>(AddCategoryDocument, options);
      }
export type AddCategoryMutationHookResult = ReturnType<typeof useAddCategoryMutation>;
export type AddCategoryMutationResult = Apollo.MutationResult<AddCategoryMutation>;
export type AddCategoryMutationOptions = Apollo.BaseMutationOptions<AddCategoryMutation, AddCategoryMutationVariables>;
export const EditCategoryDocument = gql`
    mutation EditCategory($input: EditCategoryInput!) {
  editCategory(input: $input) {
    ...ResMessage
  }
}
    ${ResMessageFragmentDoc}`;
export type EditCategoryMutationFn = Apollo.MutationFunction<EditCategoryMutation, EditCategoryMutationVariables>;

/**
 * __useEditCategoryMutation__
 *
 * To run a mutation, you first call `useEditCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCategoryMutation, { data, loading, error }] = useEditCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditCategoryMutation(baseOptions?: Apollo.MutationHookOptions<EditCategoryMutation, EditCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCategoryMutation, EditCategoryMutationVariables>(EditCategoryDocument, options);
      }
export type EditCategoryMutationHookResult = ReturnType<typeof useEditCategoryMutation>;
export type EditCategoryMutationResult = Apollo.MutationResult<EditCategoryMutation>;
export type EditCategoryMutationOptions = Apollo.BaseMutationOptions<EditCategoryMutation, EditCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($input: IdInput!) {
  deleteCategory(input: $input) {
    ...ResMessage
  }
}
    ${ResMessageFragmentDoc}`;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const AddProductDocument = gql`
    mutation AddProduct($input: ProductInput!) {
  addProduct(input: $input) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;
export type AddProductMutationFn = Apollo.MutationFunction<AddProductMutation, AddProductMutationVariables>;

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProductMutation(baseOptions?: Apollo.MutationHookOptions<AddProductMutation, AddProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductMutation, AddProductMutationVariables>(AddProductDocument, options);
      }
export type AddProductMutationHookResult = ReturnType<typeof useAddProductMutation>;
export type AddProductMutationResult = Apollo.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = Apollo.BaseMutationOptions<AddProductMutation, AddProductMutationVariables>;
export const EditProductDocument = gql`
    mutation EditProduct($input: EditProductInput!) {
  editProduct(input: $input) {
    ...ResMessage
  }
}
    ${ResMessageFragmentDoc}`;
export type EditProductMutationFn = Apollo.MutationFunction<EditProductMutation, EditProductMutationVariables>;

/**
 * __useEditProductMutation__
 *
 * To run a mutation, you first call `useEditProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProductMutation, { data, loading, error }] = useEditProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditProductMutation(baseOptions?: Apollo.MutationHookOptions<EditProductMutation, EditProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProductMutation, EditProductMutationVariables>(EditProductDocument, options);
      }
export type EditProductMutationHookResult = ReturnType<typeof useEditProductMutation>;
export type EditProductMutationResult = Apollo.MutationResult<EditProductMutation>;
export type EditProductMutationOptions = Apollo.BaseMutationOptions<EditProductMutation, EditProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($input: IdInput!) {
  deleteProduct(input: $input) {
    ...ResMessage
  }
}
    ${ResMessageFragmentDoc}`;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const ChangeActiveProductDocument = gql`
    mutation ChangeActiveProduct($input: IdInput!) {
  changeActiveProduct(input: $input) {
    ...ResMessage
  }
}
    ${ResMessageFragmentDoc}`;
export type ChangeActiveProductMutationFn = Apollo.MutationFunction<ChangeActiveProductMutation, ChangeActiveProductMutationVariables>;

/**
 * __useChangeActiveProductMutation__
 *
 * To run a mutation, you first call `useChangeActiveProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeActiveProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeActiveProductMutation, { data, loading, error }] = useChangeActiveProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeActiveProductMutation(baseOptions?: Apollo.MutationHookOptions<ChangeActiveProductMutation, ChangeActiveProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeActiveProductMutation, ChangeActiveProductMutationVariables>(ChangeActiveProductDocument, options);
      }
export type ChangeActiveProductMutationHookResult = ReturnType<typeof useChangeActiveProductMutation>;
export type ChangeActiveProductMutationResult = Apollo.MutationResult<ChangeActiveProductMutation>;
export type ChangeActiveProductMutationOptions = Apollo.BaseMutationOptions<ChangeActiveProductMutation, ChangeActiveProductMutationVariables>;
export const AddRatingDocument = gql`
    mutation AddRating($input: AddRatingInput!) {
  addRating(input: $input) {
    ...Rating
  }
}
    ${RatingFragmentDoc}`;
export type AddRatingMutationFn = Apollo.MutationFunction<AddRatingMutation, AddRatingMutationVariables>;

/**
 * __useAddRatingMutation__
 *
 * To run a mutation, you first call `useAddRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRatingMutation, { data, loading, error }] = useAddRatingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddRatingMutation(baseOptions?: Apollo.MutationHookOptions<AddRatingMutation, AddRatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddRatingMutation, AddRatingMutationVariables>(AddRatingDocument, options);
      }
export type AddRatingMutationHookResult = ReturnType<typeof useAddRatingMutation>;
export type AddRatingMutationResult = Apollo.MutationResult<AddRatingMutation>;
export type AddRatingMutationOptions = Apollo.BaseMutationOptions<AddRatingMutation, AddRatingMutationVariables>;
export const EditRatingDocument = gql`
    mutation EditRating($input: EditRatingInput!) {
  editRating(input: $input) {
    ...Rating
  }
}
    ${RatingFragmentDoc}`;
export type EditRatingMutationFn = Apollo.MutationFunction<EditRatingMutation, EditRatingMutationVariables>;

/**
 * __useEditRatingMutation__
 *
 * To run a mutation, you first call `useEditRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editRatingMutation, { data, loading, error }] = useEditRatingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditRatingMutation(baseOptions?: Apollo.MutationHookOptions<EditRatingMutation, EditRatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditRatingMutation, EditRatingMutationVariables>(EditRatingDocument, options);
      }
export type EditRatingMutationHookResult = ReturnType<typeof useEditRatingMutation>;
export type EditRatingMutationResult = Apollo.MutationResult<EditRatingMutation>;
export type EditRatingMutationOptions = Apollo.BaseMutationOptions<EditRatingMutation, EditRatingMutationVariables>;
export const DeleteRatingDocument = gql`
    mutation DeleteRating($input: IdInput!) {
  deleteRating(input: $input) {
    ...ResMessage
  }
}
    ${ResMessageFragmentDoc}`;
export type DeleteRatingMutationFn = Apollo.MutationFunction<DeleteRatingMutation, DeleteRatingMutationVariables>;

/**
 * __useDeleteRatingMutation__
 *
 * To run a mutation, you first call `useDeleteRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRatingMutation, { data, loading, error }] = useDeleteRatingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteRatingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRatingMutation, DeleteRatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRatingMutation, DeleteRatingMutationVariables>(DeleteRatingDocument, options);
      }
export type DeleteRatingMutationHookResult = ReturnType<typeof useDeleteRatingMutation>;
export type DeleteRatingMutationResult = Apollo.MutationResult<DeleteRatingMutation>;
export type DeleteRatingMutationOptions = Apollo.BaseMutationOptions<DeleteRatingMutation, DeleteRatingMutationVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  getCategories {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetHighlightedProductDocument = gql`
    query GetHighlightedProduct {
  getHighlightedProduct {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useGetHighlightedProductQuery__
 *
 * To run a query within a React component, call `useGetHighlightedProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHighlightedProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHighlightedProductQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHighlightedProductQuery(baseOptions?: Apollo.QueryHookOptions<GetHighlightedProductQuery, GetHighlightedProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHighlightedProductQuery, GetHighlightedProductQueryVariables>(GetHighlightedProductDocument, options);
      }
export function useGetHighlightedProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHighlightedProductQuery, GetHighlightedProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHighlightedProductQuery, GetHighlightedProductQueryVariables>(GetHighlightedProductDocument, options);
        }
export type GetHighlightedProductQueryHookResult = ReturnType<typeof useGetHighlightedProductQuery>;
export type GetHighlightedProductLazyQueryHookResult = ReturnType<typeof useGetHighlightedProductLazyQuery>;
export type GetHighlightedProductQueryResult = Apollo.QueryResult<GetHighlightedProductQuery, GetHighlightedProductQueryVariables>;
export const GetProductDocument = gql`
    query GetProduct($input: IdInput!) {
  getProduct(input: $input) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts {
  getProducts {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetRatingsDocument = gql`
    query GetRatings($input: GetRatingsInput!) {
  getRatings(input: $input) {
    ...Rating
  }
}
    ${RatingFragmentDoc}`;

/**
 * __useGetRatingsQuery__
 *
 * To run a query within a React component, call `useGetRatingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRatingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRatingsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetRatingsQuery(baseOptions: Apollo.QueryHookOptions<GetRatingsQuery, GetRatingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRatingsQuery, GetRatingsQueryVariables>(GetRatingsDocument, options);
      }
export function useGetRatingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRatingsQuery, GetRatingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRatingsQuery, GetRatingsQueryVariables>(GetRatingsDocument, options);
        }
export type GetRatingsQueryHookResult = ReturnType<typeof useGetRatingsQuery>;
export type GetRatingsLazyQueryHookResult = ReturnType<typeof useGetRatingsLazyQuery>;
export type GetRatingsQueryResult = Apollo.QueryResult<GetRatingsQuery, GetRatingsQueryVariables>;
export const LogoutDocument = gql`
    query Logout {
  logout {
    ...ResMessage
  }
}
    ${ResMessageFragmentDoc}`;

/**
 * __useLogoutQuery__
 *
 * To run a query within a React component, call `useLogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutQuery(baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
      }
export function useLogoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
        }
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>;
export const ProfileDocument = gql`
    query Profile {
  profile {
    ...DecodedUser
  }
}
    ${DecodedUserFragmentDoc}`;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const HighlightedProductUpdatedDocument = gql`
    subscription HighlightedProductUpdated {
  highlightedProductUpdated {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useHighlightedProductUpdatedSubscription__
 *
 * To run a query within a React component, call `useHighlightedProductUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useHighlightedProductUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHighlightedProductUpdatedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useHighlightedProductUpdatedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<HighlightedProductUpdatedSubscription, HighlightedProductUpdatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<HighlightedProductUpdatedSubscription, HighlightedProductUpdatedSubscriptionVariables>(HighlightedProductUpdatedDocument, options);
      }
export type HighlightedProductUpdatedSubscriptionHookResult = ReturnType<typeof useHighlightedProductUpdatedSubscription>;
export type HighlightedProductUpdatedSubscriptionResult = Apollo.SubscriptionResult<HighlightedProductUpdatedSubscription>;
export type AccessTokenKeySpecifier = ('accessToken' | AccessTokenKeySpecifier)[];
export type AccessTokenFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('category' | 'id' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DecodedUserKeySpecifier = ('email' | 'id' | 'logged' | 'roles' | 'username' | DecodedUserKeySpecifier)[];
export type DecodedUserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	logged?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DistinctionKeySpecifier = ('active' | 'endTime' | 'startTime' | DistinctionKeySpecifier)[];
export type DistinctionFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addCategory' | 'addProduct' | 'addRating' | 'changeActiveProduct' | 'deleteCategory' | 'deleteProduct' | 'deleteRating' | 'editCategory' | 'editProduct' | 'editRating' | 'login' | 'register' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	addProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	addRating?: FieldPolicy<any> | FieldReadFunction<any>,
	changeActiveProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRating?: FieldPolicy<any> | FieldReadFunction<any>,
	editCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	editProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	editRating?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceKeySpecifier = ('retail' | 'wholesale' | PriceKeySpecifier)[];
export type PriceFieldPolicy = {
	retail?: FieldPolicy<any> | FieldReadFunction<any>,
	wholesale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('active' | 'category' | 'description' | 'distinction' | 'id' | 'image' | 'model' | 'price' | 'quantity' | 'ratings' | 'sale' | 'size' | 'sold' | 'subtitle' | 'title' | 'views' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	distinction?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	sold?: FieldPolicy<any> | FieldReadFunction<any>,
	subtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	views?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getCategories' | 'getHighlightedProduct' | 'getProduct' | 'getProducts' | 'getRatings' | 'logout' | 'profile' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	getHighlightedProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	getProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	getProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	getRatings?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RatingKeySpecifier = ('comment' | 'createdAt' | 'id' | 'isOwner' | 'productId' | 'rating' | 'updatedAt' | 'userId' | 'username' | RatingKeySpecifier)[];
export type RatingFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isOwner?: FieldPolicy<any> | FieldReadFunction<any>,
	productId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RatingsKeySpecifier = ('activeFake' | 'fakeAmount' | 'fakeTotal' | 'originalAmount' | 'originalAndFakeAmount' | 'originalAndFakeTotal' | 'originalTotal' | RatingsKeySpecifier)[];
export type RatingsFieldPolicy = {
	activeFake?: FieldPolicy<any> | FieldReadFunction<any>,
	fakeAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	fakeTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	originalAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	originalAndFakeAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	originalAndFakeTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	originalTotal?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResMessageKeySpecifier = ('message' | ResMessageKeySpecifier)[];
export type ResMessageFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SaleKeySpecifier = ('active' | 'endTime' | 'percentageDiscount' | 'priceAfterSale' | 'priceBeforeSale' | 'startTime' | SaleKeySpecifier)[];
export type SaleFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	percentageDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	priceAfterSale?: FieldPolicy<any> | FieldReadFunction<any>,
	priceBeforeSale?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SizeKeySpecifier = ('height' | 'length' | 'weight' | 'width' | SizeKeySpecifier)[];
export type SizeFieldPolicy = {
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	length?: FieldPolicy<any> | FieldReadFunction<any>,
	weight?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SoldKeySpecifier = ('activeFake' | 'details' | 'fakeTotal' | 'originalAndFakeTotal' | 'originalTotal' | SoldKeySpecifier)[];
export type SoldFieldPolicy = {
	activeFake?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	fakeTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	originalAndFakeTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	originalTotal?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SoldDetailsKeySpecifier = ('activeCoupon' | 'activeDistinction' | 'activeSale' | 'amountDiscount' | 'date' | 'guestIP' | 'percentageDiscount' | 'price' | 'profit' | 'purchasePrice' | 'purchasePriceBeforeDiscount' | 'quantity' | 'soldId' | 'userId' | SoldDetailsKeySpecifier)[];
export type SoldDetailsFieldPolicy = {
	activeCoupon?: FieldPolicy<any> | FieldReadFunction<any>,
	activeDistinction?: FieldPolicy<any> | FieldReadFunction<any>,
	activeSale?: FieldPolicy<any> | FieldReadFunction<any>,
	amountDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	guestIP?: FieldPolicy<any> | FieldReadFunction<any>,
	percentageDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	profit?: FieldPolicy<any> | FieldReadFunction<any>,
	purchasePrice?: FieldPolicy<any> | FieldReadFunction<any>,
	purchasePriceBeforeDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	soldId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('highlightedProductUpdated' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	highlightedProductUpdated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ViewsKeySpecifier = ('activeFake' | 'details' | 'fakeTotal' | 'originalAndFakeTotal' | 'originalTotal' | 'originalTotalViewsWithoutDuplicateIPAddresses' | ViewsKeySpecifier)[];
export type ViewsFieldPolicy = {
	activeFake?: FieldPolicy<any> | FieldReadFunction<any>,
	details?: FieldPolicy<any> | FieldReadFunction<any>,
	fakeTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	originalAndFakeTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	originalTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	originalTotalViewsWithoutDuplicateIPAddresses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ViewsDetailsKeySpecifier = ('date' | 'guestIP' | ViewsDetailsKeySpecifier)[];
export type ViewsDetailsFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	guestIP?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AccessToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessTokenKeySpecifier | (() => undefined | AccessTokenKeySpecifier),
		fields?: AccessTokenFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	DecodedUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DecodedUserKeySpecifier | (() => undefined | DecodedUserKeySpecifier),
		fields?: DecodedUserFieldPolicy,
	},
	Distinction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DistinctionKeySpecifier | (() => undefined | DistinctionKeySpecifier),
		fields?: DistinctionFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Price?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceKeySpecifier | (() => undefined | PriceKeySpecifier),
		fields?: PriceFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Rating?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RatingKeySpecifier | (() => undefined | RatingKeySpecifier),
		fields?: RatingFieldPolicy,
	},
	Ratings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RatingsKeySpecifier | (() => undefined | RatingsKeySpecifier),
		fields?: RatingsFieldPolicy,
	},
	ResMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResMessageKeySpecifier | (() => undefined | ResMessageKeySpecifier),
		fields?: ResMessageFieldPolicy,
	},
	Sale?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SaleKeySpecifier | (() => undefined | SaleKeySpecifier),
		fields?: SaleFieldPolicy,
	},
	Size?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SizeKeySpecifier | (() => undefined | SizeKeySpecifier),
		fields?: SizeFieldPolicy,
	},
	Sold?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SoldKeySpecifier | (() => undefined | SoldKeySpecifier),
		fields?: SoldFieldPolicy,
	},
	SoldDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SoldDetailsKeySpecifier | (() => undefined | SoldDetailsKeySpecifier),
		fields?: SoldDetailsFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	Views?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ViewsKeySpecifier | (() => undefined | ViewsKeySpecifier),
		fields?: ViewsFieldPolicy,
	},
	ViewsDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ViewsDetailsKeySpecifier | (() => undefined | ViewsDetailsKeySpecifier),
		fields?: ViewsDetailsFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;