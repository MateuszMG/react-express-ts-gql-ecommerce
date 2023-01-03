import { gql } from '@apollo/client';

export const typeDefs = gql`
  type DecodedUser {
    logged: Boolean!
  }

  extend type Rating {
    isOwner: Boolean!
  }
`;
