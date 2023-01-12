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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** Without response */
  GraphQLVoid: any;
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

export type Basket = {
  __typename?: 'Basket';
  productId: Scalars['String'];
  quantity: Scalars['Float'];
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['String'];
  category: Scalars['String'];
};

export type CategoryInput = {
  category: Scalars['String'];
};

export type DecodedUser = {
  __typename?: 'DecodedUser';
  _id: Scalars['String'];
  email: Scalars['String'];
  logged: Scalars['Boolean'];
  roles: Array<Scalars['String']>;
  username: Scalars['String'];
};

export type DeliveryAdress = {
  __typename?: 'DeliveryAdress';
  address: Scalars['String'];
  city: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
  postCode: Scalars['String'];
  state: Scalars['String'];
};

export type DeliveryAdressInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
  postCode: Scalars['String'];
  state: Scalars['String'];
};

export type Distinction = {
  __typename?: 'Distinction';
  active: Scalars['Boolean'];
  endTime: Scalars['DateTime'];
  startTime: Scalars['DateTime'];
};

export type EditCategoryInput = {
  _id: Scalars['String'];
  category: Scalars['String'];
};

export type EditProductInput = {
  _id: Scalars['String'];
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
  solds: ProductSoldsInput;
  subtitle: Scalars['String'];
  title: Scalars['String'];
  views: ProductViewsInput;
};

export type EditRatingInput = {
  _id: Scalars['String'];
  comment: Scalars['String'];
  rating: Scalars['Float'];
};

export type GetRatingsInput = {
  productId: Scalars['String'];
};

export type IdInput = {
  _id: Scalars['String'];
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
  addToBasket: UserBasket;
  addView?: Maybe<Scalars['GraphQLVoid']>;
  changeActiveProduct: ResMessage;
  createPayment: ResId;
  deleteCategory: ResMessage;
  deleteProduct: ResMessage;
  deleteRating: ResMessage;
  editCategory: ResMessage;
  editProduct: ResMessage;
  editRating: Rating;
  login: AccessToken;
  register: AccessToken;
  removeFromBasket: UserBasket;
  savePayment: ResMessage;
  setDeliveryAdress: DeliveryAdress;
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


export type MutationAddToBasketArgs = {
  input: IdInput;
};


export type MutationAddViewArgs = {
  input: IdInput;
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
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRemoveFromBasketArgs = {
  input: IdInput;
};


export type MutationSetDeliveryAdressArgs = {
  input: DeliveryAdressInput;
};

export type Price = {
  __typename?: 'Price';
  retail: Scalars['Float'];
  wholesale: Scalars['Float'];
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['String'];
  active: Scalars['Boolean'];
  category: Scalars['String'];
  description: Scalars['String'];
  distinction: Distinction;
  image: Scalars['String'];
  model: Scalars['String'];
  price: Price;
  quantity: Scalars['Float'];
  ratings: Ratings;
  sale: Sale;
  size: Size;
  solds: Solds;
  subtitle: Scalars['String'];
  title: Scalars['String'];
  views: Views;
};

export type ProductDistinctionInput = {
  active: Scalars['Boolean'];
  endTime: Scalars['DateTime'];
  startTime: Scalars['DateTime'];
};

export type ProductForGuest = {
  __typename?: 'ProductForGuest';
  _id: Scalars['String'];
  category: Scalars['String'];
  description: Scalars['String'];
  distinction: Distinction;
  image: Scalars['String'];
  model: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  ratings: RatingsForGuest;
  sale: Sale;
  size: Size;
  solds: Scalars['Float'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
  views: Scalars['Float'];
};

export type ProductInUserBasket = {
  __typename?: 'ProductInUserBasket';
  description: Scalars['String'];
  discountTotal: Scalars['Float'];
  distinction: Distinction;
  image: Scalars['String'];
  percentageDiscount: Scalars['Float'];
  price: Scalars['Float'];
  priceTotal: Scalars['Float'];
  productId: Scalars['String'];
  quantity: Scalars['Float'];
  quantityTotal: Scalars['Float'];
  ratings: RatingsForGuest;
  sale: Sale;
  solds: Scalars['Float'];
  title: Scalars['String'];
  views: Scalars['Float'];
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
  solds: ProductSoldsInput;
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

export type ProductSoldsInput = {
  activeFake: Scalars['Boolean'];
  fakeTotal: Scalars['Float'];
};

export type ProductViewsInput = {
  activeFake: Scalars['Boolean'];
  fakeTotal: Scalars['Float'];
};

export type PurchaseHistory = {
  __typename?: 'PurchaseHistory';
  date: Scalars['DateTime'];
  discountTotal: Scalars['Float'];
  percentageDiscount: Scalars['Float'];
  priceTotal: Scalars['Float'];
  productsIds: Array<Scalars['String']>;
  quantityTotal: Scalars['Float'];
  soldsIds: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getBasket: UserBasket;
  getCategories: Array<Category>;
  getHighlightedProduct: Product;
  getProduct: Product;
  getProductForGuest: ProductForGuest;
  getProducts: Array<Product>;
  getProductsForGuest: Array<ProductForGuest>;
  getRatings: Array<Rating>;
  getUser: User;
  logout: ResMessage;
  profile: DecodedUser;
};


export type QueryGetProductArgs = {
  input: IdInput;
};


export type QueryGetProductForGuestArgs = {
  input: IdInput;
};


export type QueryGetRatingsArgs = {
  input: GetRatingsInput;
};

export type Rating = {
  __typename?: 'Rating';
  _id: Scalars['String'];
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
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

export type RatingsForGuest = {
  __typename?: 'RatingsForGuest';
  amount: Scalars['Float'];
  total: Scalars['Float'];
};

export type RegisterInput = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type ResId = {
  __typename?: 'ResId';
  _id: Scalars['String'];
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

export type Solds = {
  __typename?: 'Solds';
  activeFake: Scalars['Boolean'];
  fakeTotal: Scalars['Float'];
  originalAndFakeTotal: Scalars['Float'];
  originalTotal: Scalars['Float'];
};

export type Subscription = {
  __typename?: 'Subscription';
  highlightedProductUpdated: Product;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  accessToken: Scalars['String'];
  basket: Basket;
  createdAt: Scalars['DateTime'];
  deliveryAdress: DeliveryAdress;
  email: Scalars['String'];
  purchaseHistory: Array<PurchaseHistory>;
  refreshToken: Scalars['String'];
  roles: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserBasket = {
  __typename?: 'UserBasket';
  discountTotal: Scalars['Float'];
  percentageDiscount: Scalars['Float'];
  priceTotal: Scalars['Float'];
  products: Array<ProductInUserBasket>;
  quantityTotal: Scalars['Float'];
};

export type Views = {
  __typename?: 'Views';
  activeFake: Scalars['Boolean'];
  fakeTotal: Scalars['Float'];
  originalAndFakeTotal: Scalars['Float'];
  originalTotal: Scalars['Float'];
  originalTotalViewsWithoutDuplicateIPAddresses: Scalars['Float'];
};

export type AccessTokenFragment = { __typename?: 'AccessToken', accessToken: string };

export type CategoryFragment = { __typename?: 'Category', _id: string, category: string };

export type DecodedUserFragment = { __typename?: 'DecodedUser', _id: string, username: string, email: string, roles: Array<string>, logged: boolean };

export type PriceFragment = { __typename?: 'Price', wholesale: number, retail: number };

export type SizeFragment = { __typename?: 'Size', weight: number, length: number, width: number, height: number };

export type DistinctionFragment = { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any };

export type SaleFragment = { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number };

export type RatingsFragment = { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number };

export type ViewsFragment = { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number };

export type SoldsFragment = { __typename?: 'Solds', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number };

export type ProductFragment = { __typename?: 'Product', _id: string, title: string, description: string, subtitle: string, model: string, category: string, active: boolean, quantity: number, image: string, price: { __typename?: 'Price', wholesale: number, retail: number }, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number }, views: { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number }, solds: { __typename?: 'Solds', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number } };

export type RatingsForGuestFragment = { __typename?: 'RatingsForGuest', total: number, amount: number };

export type ProductForGuestFragment = { __typename?: 'ProductForGuest', _id: string, title: string, subtitle: string, description: string, model: string, category: string, quantity: number, image: string, price: number, views: number, solds: number, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'RatingsForGuest', total: number, amount: number } };

export type RatingFragment = { __typename?: 'Rating', _id: string, productId: string, userId: string, username: string, comment: string, rating: number, createdAt: any, updatedAt: any, isOwner: boolean };

export type DeliveryAdressFragment = { __typename?: 'DeliveryAdress', firstName: string, lastName: string, address: string, postCode: string, city: string, state: string, phoneNumber: string };

export type PurchaseHistoryFragment = { __typename?: 'PurchaseHistory', productsIds: Array<string>, soldsIds: Array<string>, quantityTotal: number, priceTotal: number, discountTotal: number, percentageDiscount: number, date: any };

export type UserFragment = { __typename?: 'User', _id: string, email: string, username: string, accessToken: string, refreshToken: string, roles: Array<string>, createdAt: any, updatedAt: any, deliveryAdress: { __typename?: 'DeliveryAdress', firstName: string, lastName: string, address: string, postCode: string, city: string, state: string, phoneNumber: string }, purchaseHistory: Array<{ __typename?: 'PurchaseHistory', productsIds: Array<string>, soldsIds: Array<string>, quantityTotal: number, priceTotal: number, discountTotal: number, percentageDiscount: number, date: any }> };

export type ProductInUserBasketFragment = { __typename?: 'ProductInUserBasket', productId: string, price: number, quantity: number, title: string, description: string, image: string, views: number, solds: number, quantityTotal: number, discountTotal: number, priceTotal: number, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'RatingsForGuest', total: number, amount: number } };

export type UserBasketFragment = { __typename?: 'UserBasket', quantityTotal: number, priceTotal: number, discountTotal: number, percentageDiscount: number, products: Array<{ __typename?: 'ProductInUserBasket', productId: string, price: number, quantity: number, title: string, description: string, image: string, views: number, solds: number, quantityTotal: number, discountTotal: number, priceTotal: number, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'RatingsForGuest', total: number, amount: number } }> };

export type ResIdFragment = { __typename?: 'ResId', _id: string };

export type ResMessageFragment = { __typename?: 'ResMessage', message: string };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AccessToken', accessToken: string } };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AccessToken', accessToken: string } };

export type AddCategoryMutationVariables = Exact<{
  input: CategoryInput;
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', addCategory: { __typename?: 'Category', _id: string, category: string } };

export type EditCategoryMutationVariables = Exact<{
  input: EditCategoryInput;
}>;


export type EditCategoryMutation = { __typename?: 'Mutation', editCategory: { __typename?: 'ResMessage', message: string } };

export type DeleteCategoryMutationVariables = Exact<{
  input: IdInput;
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: { __typename?: 'ResMessage', message: string } };

export type CreatePaymentMutationVariables = Exact<{ [key: string]: never; }>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'ResId', _id: string } };

export type SavePaymentMutationVariables = Exact<{ [key: string]: never; }>;


export type SavePaymentMutation = { __typename?: 'Mutation', savePayment: { __typename?: 'ResMessage', message: string } };

export type AddProductMutationVariables = Exact<{
  input: ProductInput;
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct: { __typename?: 'Product', _id: string, title: string, description: string, subtitle: string, model: string, category: string, active: boolean, quantity: number, image: string, price: { __typename?: 'Price', wholesale: number, retail: number }, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number }, views: { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number }, solds: { __typename?: 'Solds', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number } } };

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


export type AddRatingMutation = { __typename?: 'Mutation', addRating: { __typename?: 'Rating', _id: string, productId: string, userId: string, username: string, comment: string, rating: number, createdAt: any, updatedAt: any, isOwner: boolean } };

export type EditRatingMutationVariables = Exact<{
  input: EditRatingInput;
}>;


export type EditRatingMutation = { __typename?: 'Mutation', editRating: { __typename?: 'Rating', _id: string, productId: string, userId: string, username: string, comment: string, rating: number, createdAt: any, updatedAt: any, isOwner: boolean } };

export type DeleteRatingMutationVariables = Exact<{
  input: IdInput;
}>;


export type DeleteRatingMutation = { __typename?: 'Mutation', deleteRating: { __typename?: 'ResMessage', message: string } };

export type SetDeliveryAdressMutationVariables = Exact<{
  input: DeliveryAdressInput;
}>;


export type SetDeliveryAdressMutation = { __typename?: 'Mutation', setDeliveryAdress: { __typename?: 'DeliveryAdress', firstName: string, lastName: string, address: string, postCode: string, city: string, state: string, phoneNumber: string } };

export type AddToBasketMutationVariables = Exact<{
  input: IdInput;
}>;


export type AddToBasketMutation = { __typename?: 'Mutation', addToBasket: { __typename?: 'UserBasket', quantityTotal: number, priceTotal: number, discountTotal: number, percentageDiscount: number, products: Array<{ __typename?: 'ProductInUserBasket', productId: string, price: number, quantity: number, title: string, description: string, image: string, views: number, solds: number, quantityTotal: number, discountTotal: number, priceTotal: number, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'RatingsForGuest', total: number, amount: number } }> } };

export type RemoveFromBasketMutationVariables = Exact<{
  input: IdInput;
}>;


export type RemoveFromBasketMutation = { __typename?: 'Mutation', removeFromBasket: { __typename?: 'UserBasket', quantityTotal: number, priceTotal: number, discountTotal: number, percentageDiscount: number, products: Array<{ __typename?: 'ProductInUserBasket', productId: string, price: number, quantity: number, title: string, description: string, image: string, views: number, solds: number, quantityTotal: number, discountTotal: number, priceTotal: number, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'RatingsForGuest', total: number, amount: number } }> } };

export type AddViewMutationVariables = Exact<{
  input: IdInput;
}>;


export type AddViewMutation = { __typename?: 'Mutation', addView?: any | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'Category', _id: string, category: string }> };

export type GetHighlightedProductQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHighlightedProductQuery = { __typename?: 'Query', getHighlightedProduct: { __typename?: 'Product', _id: string, title: string, description: string, subtitle: string, model: string, category: string, active: boolean, quantity: number, image: string, price: { __typename?: 'Price', wholesale: number, retail: number }, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number }, views: { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number }, solds: { __typename?: 'Solds', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number } } };

export type GetRatingsQueryVariables = Exact<{
  input: GetRatingsInput;
}>;


export type GetRatingsQuery = { __typename?: 'Query', getRatings: Array<{ __typename?: 'Rating', _id: string, productId: string, userId: string, username: string, comment: string, rating: number, createdAt: any, updatedAt: any, isOwner: boolean }> };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = { __typename?: 'Query', logout: { __typename?: 'ResMessage', message: string } };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', getProducts: Array<{ __typename?: 'Product', _id: string, title: string, description: string, subtitle: string, model: string, category: string, active: boolean, quantity: number, image: string, price: { __typename?: 'Price', wholesale: number, retail: number }, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number }, views: { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number }, solds: { __typename?: 'Solds', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number } }> };

export type GetProductQueryVariables = Exact<{
  input: IdInput;
}>;


export type GetProductQuery = { __typename?: 'Query', getProduct: { __typename?: 'Product', _id: string, title: string, description: string, subtitle: string, model: string, category: string, active: boolean, quantity: number, image: string, price: { __typename?: 'Price', wholesale: number, retail: number }, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number }, views: { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number }, solds: { __typename?: 'Solds', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number } } };

export type GetProductsForGuestQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsForGuestQuery = { __typename?: 'Query', getProductsForGuest: Array<{ __typename?: 'ProductForGuest', _id: string, title: string, subtitle: string, description: string, model: string, category: string, quantity: number, image: string, price: number, views: number, solds: number, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'RatingsForGuest', total: number, amount: number } }> };

export type GetProductForGuestQueryVariables = Exact<{
  input: IdInput;
}>;


export type GetProductForGuestQuery = { __typename?: 'Query', getProductForGuest: { __typename?: 'ProductForGuest', _id: string, title: string, subtitle: string, description: string, model: string, category: string, quantity: number, image: string, price: number, views: number, solds: number, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'RatingsForGuest', total: number, amount: number } } };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'DecodedUser', _id: string, username: string, email: string, roles: Array<string>, logged: boolean } };

export type GetBasketQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBasketQuery = { __typename?: 'Query', getBasket: { __typename?: 'UserBasket', quantityTotal: number, priceTotal: number, discountTotal: number, percentageDiscount: number, products: Array<{ __typename?: 'ProductInUserBasket', productId: string, price: number, quantity: number, title: string, description: string, image: string, views: number, solds: number, quantityTotal: number, discountTotal: number, priceTotal: number, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'RatingsForGuest', total: number, amount: number } }> } };

export type GetPurchaseHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPurchaseHistoryQuery = { __typename?: 'Query', getUser: { __typename?: 'User', purchaseHistory: Array<{ __typename?: 'PurchaseHistory', productsIds: Array<string>, soldsIds: Array<string>, quantityTotal: number, priceTotal: number, discountTotal: number, percentageDiscount: number, date: any }> } };

export type HighlightedProductUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type HighlightedProductUpdatedSubscription = { __typename?: 'Subscription', highlightedProductUpdated: { __typename?: 'Product', _id: string, title: string, description: string, subtitle: string, model: string, category: string, active: boolean, quantity: number, image: string, price: { __typename?: 'Price', wholesale: number, retail: number }, size: { __typename?: 'Size', weight: number, length: number, width: number, height: number }, distinction: { __typename?: 'Distinction', active: boolean, startTime: any, endTime: any }, sale: { __typename?: 'Sale', active: boolean, startTime: any, endTime: any, priceBeforeSale: number, priceAfterSale: number, percentageDiscount: number }, ratings: { __typename?: 'Ratings', activeFake: boolean, fakeTotal: number, fakeAmount: number, originalTotal: number, originalAmount: number, originalAndFakeTotal: number, originalAndFakeAmount: number }, views: { __typename?: 'Views', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number, originalTotalViewsWithoutDuplicateIPAddresses: number }, solds: { __typename?: 'Solds', activeFake: boolean, fakeTotal: number, originalTotal: number, originalAndFakeTotal: number } } };

export const AccessTokenFragmentDoc = gql`
    fragment AccessToken on AccessToken {
  accessToken
}
    `;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  _id
  category
}
    `;
export const DecodedUserFragmentDoc = gql`
    fragment DecodedUser on DecodedUser {
  _id
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
export const ViewsFragmentDoc = gql`
    fragment Views on Views {
  activeFake
  fakeTotal
  originalTotal
  originalAndFakeTotal
  originalTotalViewsWithoutDuplicateIPAddresses
}
    `;
export const SoldsFragmentDoc = gql`
    fragment Solds on Solds {
  activeFake
  fakeTotal
  originalTotal
  originalAndFakeTotal
}
    `;
export const ProductFragmentDoc = gql`
    fragment Product on Product {
  _id
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
  solds {
    ...Solds
  }
}
    ${PriceFragmentDoc}
${SizeFragmentDoc}
${DistinctionFragmentDoc}
${SaleFragmentDoc}
${RatingsFragmentDoc}
${ViewsFragmentDoc}
${SoldsFragmentDoc}`;
export const RatingsForGuestFragmentDoc = gql`
    fragment RatingsForGuest on RatingsForGuest {
  total
  amount
}
    `;
export const ProductForGuestFragmentDoc = gql`
    fragment ProductForGuest on ProductForGuest {
  _id
  title
  subtitle
  description
  model
  category
  quantity
  image
  price
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
    ...RatingsForGuest
  }
  views
  solds
}
    ${SizeFragmentDoc}
${DistinctionFragmentDoc}
${SaleFragmentDoc}
${RatingsForGuestFragmentDoc}`;
export const RatingFragmentDoc = gql`
    fragment Rating on Rating {
  _id
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
export const DeliveryAdressFragmentDoc = gql`
    fragment DeliveryAdress on DeliveryAdress {
  firstName
  lastName
  address
  postCode
  city
  state
  phoneNumber
}
    `;
export const PurchaseHistoryFragmentDoc = gql`
    fragment PurchaseHistory on PurchaseHistory {
  productsIds
  soldsIds
  quantityTotal
  priceTotal
  discountTotal
  percentageDiscount
  date
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  _id
  email
  username
  accessToken
  refreshToken
  roles
  deliveryAdress {
    ...DeliveryAdress
  }
  purchaseHistory {
    ...PurchaseHistory
  }
  createdAt
  updatedAt
}
    ${DeliveryAdressFragmentDoc}
${PurchaseHistoryFragmentDoc}`;
export const ProductInUserBasketFragmentDoc = gql`
    fragment ProductInUserBasket on ProductInUserBasket {
  productId
  price
  quantity
  title
  description
  image
  distinction {
    ...Distinction
  }
  sale {
    ...Sale
  }
  ratings {
    ...RatingsForGuest
  }
  views
  solds
  quantityTotal
  discountTotal
  priceTotal
}
    ${DistinctionFragmentDoc}
${SaleFragmentDoc}
${RatingsForGuestFragmentDoc}`;
export const UserBasketFragmentDoc = gql`
    fragment UserBasket on UserBasket {
  products {
    ...ProductInUserBasket
  }
  quantityTotal
  priceTotal
  discountTotal
  percentageDiscount
}
    ${ProductInUserBasketFragmentDoc}`;
export const ResIdFragmentDoc = gql`
    fragment ResId on ResId {
  _id
}
    `;
export const ResMessageFragmentDoc = gql`
    fragment ResMessage on ResMessage {
  message
}
    `;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
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
 *      input: // value for 'input'
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
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
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
 *      input: // value for 'input'
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
export const CreatePaymentDocument = gql`
    mutation CreatePayment {
  createPayment {
    ...ResId
  }
}
    ${ResIdFragmentDoc}`;
export type CreatePaymentMutationFn = Apollo.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, options);
      }
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = Apollo.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const SavePaymentDocument = gql`
    mutation SavePayment {
  savePayment {
    ...ResMessage
  }
}
    ${ResMessageFragmentDoc}`;
export type SavePaymentMutationFn = Apollo.MutationFunction<SavePaymentMutation, SavePaymentMutationVariables>;

/**
 * __useSavePaymentMutation__
 *
 * To run a mutation, you first call `useSavePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSavePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [savePaymentMutation, { data, loading, error }] = useSavePaymentMutation({
 *   variables: {
 *   },
 * });
 */
export function useSavePaymentMutation(baseOptions?: Apollo.MutationHookOptions<SavePaymentMutation, SavePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SavePaymentMutation, SavePaymentMutationVariables>(SavePaymentDocument, options);
      }
export type SavePaymentMutationHookResult = ReturnType<typeof useSavePaymentMutation>;
export type SavePaymentMutationResult = Apollo.MutationResult<SavePaymentMutation>;
export type SavePaymentMutationOptions = Apollo.BaseMutationOptions<SavePaymentMutation, SavePaymentMutationVariables>;
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
export const SetDeliveryAdressDocument = gql`
    mutation SetDeliveryAdress($input: DeliveryAdressInput!) {
  setDeliveryAdress(input: $input) {
    ...DeliveryAdress
  }
}
    ${DeliveryAdressFragmentDoc}`;
export type SetDeliveryAdressMutationFn = Apollo.MutationFunction<SetDeliveryAdressMutation, SetDeliveryAdressMutationVariables>;

/**
 * __useSetDeliveryAdressMutation__
 *
 * To run a mutation, you first call `useSetDeliveryAdressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetDeliveryAdressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setDeliveryAdressMutation, { data, loading, error }] = useSetDeliveryAdressMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetDeliveryAdressMutation(baseOptions?: Apollo.MutationHookOptions<SetDeliveryAdressMutation, SetDeliveryAdressMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetDeliveryAdressMutation, SetDeliveryAdressMutationVariables>(SetDeliveryAdressDocument, options);
      }
export type SetDeliveryAdressMutationHookResult = ReturnType<typeof useSetDeliveryAdressMutation>;
export type SetDeliveryAdressMutationResult = Apollo.MutationResult<SetDeliveryAdressMutation>;
export type SetDeliveryAdressMutationOptions = Apollo.BaseMutationOptions<SetDeliveryAdressMutation, SetDeliveryAdressMutationVariables>;
export const AddToBasketDocument = gql`
    mutation AddToBasket($input: IdInput!) {
  addToBasket(input: $input) {
    ...UserBasket
  }
}
    ${UserBasketFragmentDoc}`;
export type AddToBasketMutationFn = Apollo.MutationFunction<AddToBasketMutation, AddToBasketMutationVariables>;

/**
 * __useAddToBasketMutation__
 *
 * To run a mutation, you first call `useAddToBasketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToBasketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToBasketMutation, { data, loading, error }] = useAddToBasketMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddToBasketMutation(baseOptions?: Apollo.MutationHookOptions<AddToBasketMutation, AddToBasketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToBasketMutation, AddToBasketMutationVariables>(AddToBasketDocument, options);
      }
export type AddToBasketMutationHookResult = ReturnType<typeof useAddToBasketMutation>;
export type AddToBasketMutationResult = Apollo.MutationResult<AddToBasketMutation>;
export type AddToBasketMutationOptions = Apollo.BaseMutationOptions<AddToBasketMutation, AddToBasketMutationVariables>;
export const RemoveFromBasketDocument = gql`
    mutation RemoveFromBasket($input: IdInput!) {
  removeFromBasket(input: $input) {
    ...UserBasket
  }
}
    ${UserBasketFragmentDoc}`;
export type RemoveFromBasketMutationFn = Apollo.MutationFunction<RemoveFromBasketMutation, RemoveFromBasketMutationVariables>;

/**
 * __useRemoveFromBasketMutation__
 *
 * To run a mutation, you first call `useRemoveFromBasketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromBasketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromBasketMutation, { data, loading, error }] = useRemoveFromBasketMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveFromBasketMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFromBasketMutation, RemoveFromBasketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFromBasketMutation, RemoveFromBasketMutationVariables>(RemoveFromBasketDocument, options);
      }
export type RemoveFromBasketMutationHookResult = ReturnType<typeof useRemoveFromBasketMutation>;
export type RemoveFromBasketMutationResult = Apollo.MutationResult<RemoveFromBasketMutation>;
export type RemoveFromBasketMutationOptions = Apollo.BaseMutationOptions<RemoveFromBasketMutation, RemoveFromBasketMutationVariables>;
export const AddViewDocument = gql`
    mutation AddView($input: IdInput!) {
  addView(input: $input)
}
    `;
export type AddViewMutationFn = Apollo.MutationFunction<AddViewMutation, AddViewMutationVariables>;

/**
 * __useAddViewMutation__
 *
 * To run a mutation, you first call `useAddViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addViewMutation, { data, loading, error }] = useAddViewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddViewMutation(baseOptions?: Apollo.MutationHookOptions<AddViewMutation, AddViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddViewMutation, AddViewMutationVariables>(AddViewDocument, options);
      }
export type AddViewMutationHookResult = ReturnType<typeof useAddViewMutation>;
export type AddViewMutationResult = Apollo.MutationResult<AddViewMutation>;
export type AddViewMutationOptions = Apollo.BaseMutationOptions<AddViewMutation, AddViewMutationVariables>;
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
export const GetProductsForGuestDocument = gql`
    query GetProductsForGuest {
  getProductsForGuest {
    ...ProductForGuest
  }
}
    ${ProductForGuestFragmentDoc}`;

/**
 * __useGetProductsForGuestQuery__
 *
 * To run a query within a React component, call `useGetProductsForGuestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsForGuestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsForGuestQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsForGuestQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsForGuestQuery, GetProductsForGuestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsForGuestQuery, GetProductsForGuestQueryVariables>(GetProductsForGuestDocument, options);
      }
export function useGetProductsForGuestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsForGuestQuery, GetProductsForGuestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsForGuestQuery, GetProductsForGuestQueryVariables>(GetProductsForGuestDocument, options);
        }
export type GetProductsForGuestQueryHookResult = ReturnType<typeof useGetProductsForGuestQuery>;
export type GetProductsForGuestLazyQueryHookResult = ReturnType<typeof useGetProductsForGuestLazyQuery>;
export type GetProductsForGuestQueryResult = Apollo.QueryResult<GetProductsForGuestQuery, GetProductsForGuestQueryVariables>;
export const GetProductForGuestDocument = gql`
    query GetProductForGuest($input: IdInput!) {
  getProductForGuest(input: $input) {
    ...ProductForGuest
  }
}
    ${ProductForGuestFragmentDoc}`;

/**
 * __useGetProductForGuestQuery__
 *
 * To run a query within a React component, call `useGetProductForGuestQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductForGuestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductForGuestQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetProductForGuestQuery(baseOptions: Apollo.QueryHookOptions<GetProductForGuestQuery, GetProductForGuestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductForGuestQuery, GetProductForGuestQueryVariables>(GetProductForGuestDocument, options);
      }
export function useGetProductForGuestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductForGuestQuery, GetProductForGuestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductForGuestQuery, GetProductForGuestQueryVariables>(GetProductForGuestDocument, options);
        }
export type GetProductForGuestQueryHookResult = ReturnType<typeof useGetProductForGuestQuery>;
export type GetProductForGuestLazyQueryHookResult = ReturnType<typeof useGetProductForGuestLazyQuery>;
export type GetProductForGuestQueryResult = Apollo.QueryResult<GetProductForGuestQuery, GetProductForGuestQueryVariables>;
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
export const GetBasketDocument = gql`
    query GetBasket {
  getBasket {
    ...UserBasket
  }
}
    ${UserBasketFragmentDoc}`;

/**
 * __useGetBasketQuery__
 *
 * To run a query within a React component, call `useGetBasketQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBasketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBasketQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBasketQuery(baseOptions?: Apollo.QueryHookOptions<GetBasketQuery, GetBasketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBasketQuery, GetBasketQueryVariables>(GetBasketDocument, options);
      }
export function useGetBasketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBasketQuery, GetBasketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBasketQuery, GetBasketQueryVariables>(GetBasketDocument, options);
        }
export type GetBasketQueryHookResult = ReturnType<typeof useGetBasketQuery>;
export type GetBasketLazyQueryHookResult = ReturnType<typeof useGetBasketLazyQuery>;
export type GetBasketQueryResult = Apollo.QueryResult<GetBasketQuery, GetBasketQueryVariables>;
export const GetPurchaseHistoryDocument = gql`
    query GetPurchaseHistory {
  getUser {
    purchaseHistory {
      ...PurchaseHistory
    }
  }
}
    ${PurchaseHistoryFragmentDoc}`;

/**
 * __useGetPurchaseHistoryQuery__
 *
 * To run a query within a React component, call `useGetPurchaseHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPurchaseHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPurchaseHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPurchaseHistoryQuery(baseOptions?: Apollo.QueryHookOptions<GetPurchaseHistoryQuery, GetPurchaseHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPurchaseHistoryQuery, GetPurchaseHistoryQueryVariables>(GetPurchaseHistoryDocument, options);
      }
export function useGetPurchaseHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPurchaseHistoryQuery, GetPurchaseHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPurchaseHistoryQuery, GetPurchaseHistoryQueryVariables>(GetPurchaseHistoryDocument, options);
        }
export type GetPurchaseHistoryQueryHookResult = ReturnType<typeof useGetPurchaseHistoryQuery>;
export type GetPurchaseHistoryLazyQueryHookResult = ReturnType<typeof useGetPurchaseHistoryLazyQuery>;
export type GetPurchaseHistoryQueryResult = Apollo.QueryResult<GetPurchaseHistoryQuery, GetPurchaseHistoryQueryVariables>;
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
export type BasketKeySpecifier = ('productId' | 'quantity' | BasketKeySpecifier)[];
export type BasketFieldPolicy = {
	productId?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('_id' | 'category' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DecodedUserKeySpecifier = ('_id' | 'email' | 'logged' | 'roles' | 'username' | DecodedUserKeySpecifier)[];
export type DecodedUserFieldPolicy = {
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	logged?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeliveryAdressKeySpecifier = ('address' | 'city' | 'firstName' | 'lastName' | 'phoneNumber' | 'postCode' | 'state' | DeliveryAdressKeySpecifier)[];
export type DeliveryAdressFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	postCode?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DistinctionKeySpecifier = ('active' | 'endTime' | 'startTime' | DistinctionKeySpecifier)[];
export type DistinctionFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addCategory' | 'addProduct' | 'addRating' | 'addToBasket' | 'addView' | 'changeActiveProduct' | 'createPayment' | 'deleteCategory' | 'deleteProduct' | 'deleteRating' | 'editCategory' | 'editProduct' | 'editRating' | 'login' | 'register' | 'removeFromBasket' | 'savePayment' | 'setDeliveryAdress' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	addProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	addRating?: FieldPolicy<any> | FieldReadFunction<any>,
	addToBasket?: FieldPolicy<any> | FieldReadFunction<any>,
	addView?: FieldPolicy<any> | FieldReadFunction<any>,
	changeActiveProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	createPayment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRating?: FieldPolicy<any> | FieldReadFunction<any>,
	editCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	editProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	editRating?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>,
	removeFromBasket?: FieldPolicy<any> | FieldReadFunction<any>,
	savePayment?: FieldPolicy<any> | FieldReadFunction<any>,
	setDeliveryAdress?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceKeySpecifier = ('retail' | 'wholesale' | PriceKeySpecifier)[];
export type PriceFieldPolicy = {
	retail?: FieldPolicy<any> | FieldReadFunction<any>,
	wholesale?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('_id' | 'active' | 'category' | 'description' | 'distinction' | 'image' | 'model' | 'price' | 'quantity' | 'ratings' | 'sale' | 'size' | 'solds' | 'subtitle' | 'title' | 'views' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	distinction?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	solds?: FieldPolicy<any> | FieldReadFunction<any>,
	subtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	views?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductForGuestKeySpecifier = ('_id' | 'category' | 'description' | 'distinction' | 'image' | 'model' | 'price' | 'quantity' | 'ratings' | 'sale' | 'size' | 'solds' | 'subtitle' | 'title' | 'views' | ProductForGuestKeySpecifier)[];
export type ProductForGuestFieldPolicy = {
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	distinction?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	solds?: FieldPolicy<any> | FieldReadFunction<any>,
	subtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	views?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductInUserBasketKeySpecifier = ('description' | 'discountTotal' | 'distinction' | 'image' | 'percentageDiscount' | 'price' | 'priceTotal' | 'productId' | 'quantity' | 'quantityTotal' | 'ratings' | 'sale' | 'solds' | 'title' | 'views' | ProductInUserBasketKeySpecifier)[];
export type ProductInUserBasketFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	discountTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	distinction?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	percentageDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	priceTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	productId?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings?: FieldPolicy<any> | FieldReadFunction<any>,
	sale?: FieldPolicy<any> | FieldReadFunction<any>,
	solds?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	views?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PurchaseHistoryKeySpecifier = ('date' | 'discountTotal' | 'percentageDiscount' | 'priceTotal' | 'productsIds' | 'quantityTotal' | 'soldsIds' | PurchaseHistoryKeySpecifier)[];
export type PurchaseHistoryFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	discountTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	percentageDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	priceTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	productsIds?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	soldsIds?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getBasket' | 'getCategories' | 'getHighlightedProduct' | 'getProduct' | 'getProductForGuest' | 'getProducts' | 'getProductsForGuest' | 'getRatings' | 'getUser' | 'logout' | 'profile' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getBasket?: FieldPolicy<any> | FieldReadFunction<any>,
	getCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	getHighlightedProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	getProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	getProductForGuest?: FieldPolicy<any> | FieldReadFunction<any>,
	getProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	getProductsForGuest?: FieldPolicy<any> | FieldReadFunction<any>,
	getRatings?: FieldPolicy<any> | FieldReadFunction<any>,
	getUser?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RatingKeySpecifier = ('_id' | 'comment' | 'createdAt' | 'isOwner' | 'productId' | 'rating' | 'updatedAt' | 'userId' | 'username' | RatingKeySpecifier)[];
export type RatingFieldPolicy = {
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type RatingsForGuestKeySpecifier = ('amount' | 'total' | RatingsForGuestKeySpecifier)[];
export type RatingsForGuestFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResIdKeySpecifier = ('_id' | ResIdKeySpecifier)[];
export type ResIdFieldPolicy = {
	_id?: FieldPolicy<any> | FieldReadFunction<any>
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
export type SoldsKeySpecifier = ('activeFake' | 'fakeTotal' | 'originalAndFakeTotal' | 'originalTotal' | SoldsKeySpecifier)[];
export type SoldsFieldPolicy = {
	activeFake?: FieldPolicy<any> | FieldReadFunction<any>,
	fakeTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	originalAndFakeTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	originalTotal?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('highlightedProductUpdated' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	highlightedProductUpdated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('_id' | 'accessToken' | 'basket' | 'createdAt' | 'deliveryAdress' | 'email' | 'purchaseHistory' | 'refreshToken' | 'roles' | 'updatedAt' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	_id?: FieldPolicy<any> | FieldReadFunction<any>,
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	basket?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryAdress?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	purchaseHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserBasketKeySpecifier = ('discountTotal' | 'percentageDiscount' | 'priceTotal' | 'products' | 'quantityTotal' | UserBasketKeySpecifier)[];
export type UserBasketFieldPolicy = {
	discountTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	percentageDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	priceTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityTotal?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ViewsKeySpecifier = ('activeFake' | 'fakeTotal' | 'originalAndFakeTotal' | 'originalTotal' | 'originalTotalViewsWithoutDuplicateIPAddresses' | ViewsKeySpecifier)[];
export type ViewsFieldPolicy = {
	activeFake?: FieldPolicy<any> | FieldReadFunction<any>,
	fakeTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	originalAndFakeTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	originalTotal?: FieldPolicy<any> | FieldReadFunction<any>,
	originalTotalViewsWithoutDuplicateIPAddresses?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AccessToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessTokenKeySpecifier | (() => undefined | AccessTokenKeySpecifier),
		fields?: AccessTokenFieldPolicy,
	},
	Basket?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BasketKeySpecifier | (() => undefined | BasketKeySpecifier),
		fields?: BasketFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	DecodedUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DecodedUserKeySpecifier | (() => undefined | DecodedUserKeySpecifier),
		fields?: DecodedUserFieldPolicy,
	},
	DeliveryAdress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeliveryAdressKeySpecifier | (() => undefined | DeliveryAdressKeySpecifier),
		fields?: DeliveryAdressFieldPolicy,
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
	ProductForGuest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductForGuestKeySpecifier | (() => undefined | ProductForGuestKeySpecifier),
		fields?: ProductForGuestFieldPolicy,
	},
	ProductInUserBasket?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductInUserBasketKeySpecifier | (() => undefined | ProductInUserBasketKeySpecifier),
		fields?: ProductInUserBasketFieldPolicy,
	},
	PurchaseHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PurchaseHistoryKeySpecifier | (() => undefined | PurchaseHistoryKeySpecifier),
		fields?: PurchaseHistoryFieldPolicy,
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
	RatingsForGuest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RatingsForGuestKeySpecifier | (() => undefined | RatingsForGuestKeySpecifier),
		fields?: RatingsForGuestFieldPolicy,
	},
	ResId?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResIdKeySpecifier | (() => undefined | ResIdKeySpecifier),
		fields?: ResIdFieldPolicy,
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
	Solds?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SoldsKeySpecifier | (() => undefined | SoldsKeySpecifier),
		fields?: SoldsFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserBasket?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserBasketKeySpecifier | (() => undefined | UserBasketKeySpecifier),
		fields?: UserBasketFieldPolicy,
	},
	Views?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ViewsKeySpecifier | (() => undefined | ViewsKeySpecifier),
		fields?: ViewsFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;