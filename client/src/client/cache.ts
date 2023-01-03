import { InMemoryCache } from '@apollo/client';
import { StrictTypedTypePolicies } from '../generated/types';
import { handleAccessToken } from '../helpers/accessToken';
import { getFromTheLS } from '../helpers/localStorage';

const typePolicies: StrictTypedTypePolicies = {
  Rating: {
    fields: {
      isOwner(_, { readField, cache }) {
        const user = handleAccessToken(getFromTheLS('accessToken'));
        return user.id === readField('userId');
      },
    },
  },
};

export const cache = new InMemoryCache({
  typePolicies,
});
