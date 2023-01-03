import { AuthAction, AuthState } from './authTypes';
import { fillAuthState } from './AuthProvider';

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'setUser':
      return {
        ...state,
        ...fillAuthState(action.payload),
      };

    case 'logout':
      return {
        ...state,
        ...fillAuthState(''),
      };

    default:
      return state;
  }
};
