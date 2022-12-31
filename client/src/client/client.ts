import { ApolloClient } from '@apollo/client';
import { cache } from './cache';
import { link } from './link';
import { typeDefs } from '../graphql/typeDefs';

export const client = new ApolloClient({
  link,
  cache,
  name: 'react-nest-client',
  typeDefs,
});
