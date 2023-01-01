import { UserFromJWT } from '../../helpers/accessToken';

export interface AuthState {
  user: UserFromJWT;
  isLogged: boolean;
  isUser: boolean;
  isMod: boolean;
  isAdmin: boolean;
}

export type AuthAction =
  | { type: 'setUser'; payload: UserFromJWT }
  | { type: 'logout' };
