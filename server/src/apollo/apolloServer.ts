import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { AuthResolver } from '../modules/auth/resolver';
import { buildSchema } from 'type-graphql';
import * as path from 'path';

import { CategoryResolver } from '../modules/category/resolver';
import { ProductForGuestResolver } from '../modules/productForGuest/resolver';
import { ProductResolver } from '../modules/product/resolver';
import { RatingResolver } from '../modules/rating/resolver';
import { SoldResolver } from '../modules/sold/resolver';
import { UserResolver } from '../modules/user/resolver';
import { ViewResolver } from '../modules/view/resolver';

const resolvers = [
  AuthResolver,
  CategoryResolver,
  ProductForGuestResolver,
  ProductResolver,
  RatingResolver,
  SoldResolver,
  UserResolver,
  ViewResolver,
] as const;

export const apolloServer = async (httpServer: any) =>
  new ApolloServer({
    schema: await buildSchema({
      resolvers,
      emitSchemaFile: path.resolve(__dirname, '../../schema.gql'),
    }),

    formatError: (formattedError, error) => {
      console.log('formattedError', formattedError);
      console.log('error', error);
      return formattedError;
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
