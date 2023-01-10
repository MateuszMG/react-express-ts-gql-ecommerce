import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { AuthState } from './authTypes';
import { getFromTheLS } from '../../helpers/localStorage';
import { handleAccessToken } from '../../helpers/accessToken';
import { ReactNode, useReducer } from 'react';
import { useLogoutLazyQuery } from '../../generated/types';
import { UserRoles } from '../../const';

export const fillAuthState = (accessToken: string) => {
  const user = handleAccessToken(accessToken);
  const isLogged = !!user?._id;
  const isUser = user.roles.includes(UserRoles.USER);
  const isMod = user.roles.includes(UserRoles.MODERATOR);
  const isAdmin = user.roles.includes(UserRoles.ADMINISTRATOR);

  return {
    user,
    isLogged,
    isUser,
    isMod,
    isAdmin,
  };
};

const initialState: AuthState = fillAuthState(getFromTheLS('accessToken'));

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const [logoutMutaton, { client }] = useLogoutLazyQuery();

  const setUser = (accessToken: string) => {
    dispatch({ type: 'setUser', payload: accessToken });
  };

  const logout = () => {
    logoutMutaton();
    client.clearStore();
    localStorage.clear();
    dispatch({ type: 'logout' });
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
