import { AuthAction, AuthState } from './authTypes';
import { emptyUser } from '../../helpers/accessToken';
import { UserRoles } from '../../const';

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'setUser':
      const user = action.payload;
      const isLogged = !!user?.id;
      const isUser = user.roles.includes(UserRoles.USER);
      const isMod = user.roles.includes(UserRoles.MODERATOR);
      const isAdmin = user.roles.includes(UserRoles.ADMINISTRATOR);

      return {
        ...state,
        user,
        isLogged,
        isUser,
        isMod,
        isAdmin,
      };

    case 'logout':
      return {
        user: emptyUser,
        isLogged: false,
        isUser: false,
        isMod: false,
        isAdmin: false,
      };

    default:
      return state;
  }
};
