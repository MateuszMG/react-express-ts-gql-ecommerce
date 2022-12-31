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
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
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

export type EditCategoryInput = {
  category: Scalars['String'];
  id: Scalars['String'];
};

export type EditProductInput = {
  active: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  title: Scalars['String'];
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
  changeActiveProduct: ResMessage;
  deleteCategory: ResMessage;
  deleteProduct: ResMessage;
  editCategory: ResMessage;
  editProduct: ResMessage;
  login: AccessToken;
  register: AccessToken;
};


export type MutationAddCategoryArgs = {
  input: CategoryInput;
};


export type MutationAddProductArgs = {
  input: ProductInput;
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


export type MutationEditCategoryArgs = {
  input: EditCategoryInput;
};


export type MutationEditProductArgs = {
  input: EditProductInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};

export type Product = {
  __typename?: 'Product';
  active: Scalars['Boolean'];
  description: Scalars['String'];
  fromBackend: Scalars['Boolean'];
  id: Scalars['ID'];
  image: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  title: Scalars['String'];
};

export type ProductInput = {
  active: Scalars['Boolean'];
  description: Scalars['String'];
  image: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCategories: Array<Category>;
  getHighlightedProduct: Product;
  getProducts: Array<Product>;
  logout: ResMessage;
  profile: DecodedUser;
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

export type Subscription = {
  __typename?: 'Subscription';
  highlightedProductUpdated?: Maybe<Product>;
};

export type AccessTokenFragment = { __typename?: 'AccessToken', accessToken: string };

export type CategoryFragment = { __typename?: 'Category', id: string, category: string };

export type DecodedUserFragment = { __typename?: 'DecodedUser', id: string, username: string, email: string, roles: Array<string>, logged: boolean };

export type ProductFragment = { __typename?: 'Product', id: string, title: string, description: string, image: string, price: number, quantity: number, active: boolean, fromBackend: boolean };

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

export type DeleteCategoryMutationVariables = Exact<{
  input: IdInput;
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: { __typename?: 'ResMessage', message: string } };

export type EditCategoryMutationVariables = Exact<{
  input: EditCategoryInput;
}>;


export type EditCategoryMutation = { __typename?: 'Mutation', editCategory: { __typename?: 'ResMessage', message: string } };

export type AddProductMutationVariables = Exact<{
  input: ProductInput;
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct: { __typename?: 'Product', id: string, title: string, description: string, image: string, price: number, quantity: number, active: boolean, fromBackend: boolean } };

export type ChangeActiveProductMutationVariables = Exact<{
  input: IdInput;
}>;


export type ChangeActiveProductMutation = { __typename?: 'Mutation', changeActiveProduct: { __typename?: 'ResMessage', message: string } };

export type DeleteProductMutationVariables = Exact<{
  input: IdInput;
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: { __typename?: 'ResMessage', message: string } };

export type EditProductMutationVariables = Exact<{
  input: EditProductInput;
}>;


export type EditProductMutation = { __typename?: 'Mutation', editProduct: { __typename?: 'ResMessage', message: string } };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'Category', id: string, category: string }> };

export type GetHighlightedProductQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHighlightedProductQuery = { __typename?: 'Query', getHighlightedProduct: { __typename?: 'Product', id: string, title: string, description: string, image: string, price: number, quantity: number, active: boolean, fromBackend: boolean } };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', getProducts: Array<{ __typename?: 'Product', id: string, title: string, description: string, image: string, price: number, quantity: number, active: boolean, fromBackend: boolean }> };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = { __typename?: 'Query', logout: { __typename?: 'ResMessage', message: string } };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'DecodedUser', id: string, username: string, email: string, roles: Array<string>, logged: boolean } };

export type HighlightedProductUpdatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type HighlightedProductUpdatedSubscription = { __typename?: 'Subscription', highlightedProductUpdated?: { __typename?: 'Product', id: string, title: string, description: string, image: string, price: number, quantity: number, active: boolean, fromBackend: boolean } | null };

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
export const ProductFragmentDoc = gql`
    fragment Product on Product {
  id
  title
  description
  image
  price
  quantity
  active
  fromBackend @client
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
export type MutationKeySpecifier = ('addCategory' | 'addProduct' | 'changeActiveProduct' | 'deleteCategory' | 'deleteProduct' | 'editCategory' | 'editProduct' | 'login' | 'register' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	addProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	changeActiveProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	editCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	editProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('active' | 'description' | 'fromBackend' | 'id' | 'image' | 'price' | 'quantity' | 'title' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	fromBackend?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getCategories' | 'getHighlightedProduct' | 'getProducts' | 'logout' | 'profile' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	getHighlightedProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	getProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResMessageKeySpecifier = ('message' | ResMessageKeySpecifier)[];
export type ResMessageFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('highlightedProductUpdated' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	highlightedProductUpdated?: FieldPolicy<any> | FieldReadFunction<any>
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
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	ResMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResMessageKeySpecifier | (() => undefined | ResMessageKeySpecifier),
		fields?: ResMessageFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;