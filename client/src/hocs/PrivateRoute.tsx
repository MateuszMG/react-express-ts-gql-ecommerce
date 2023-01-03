import { Navigate } from 'react-router-dom';
import { AppRoles } from '../const';
import { useAuth } from '../hooks/useAuth';
import { paths } from '../routes/paths';

interface PrivateRouteProps {
  children: JSX.Element;
  roles: AppRoles[];
}

export const PrivateRoute = ({ children, roles }: PrivateRouteProps) => {
  const { isAdmin, isLogged, isMod, isUser, logout } = useAuth();

  // const reqRoles = [AppRoles.MODERATOR];
  // const userRoles = [AppRoles.USER, AppRoles.MODERATOR];

  // let canEnter = false;
  // console.log('tu');

  // reqRoles.forEach((role) => {
  //   console.log('for');

  //   userRoles.includes(role) && (canEnter = true);
  // });
  // console.log('canEnter', canEnter);

  const onlyNotLogged = roles.includes(AppRoles.NOT_LOGGED);
  const requireUser = roles.includes(AppRoles.USER);
  const requireMod = roles.includes(AppRoles.MODERATOR);
  const requireAdmin = roles.includes(AppRoles.ADMINISTRATOR);

  if (!isLogged && (requireUser || requireMod || requireAdmin))
    return <Navigate to={paths.login} />;

  if (isLogged && onlyNotLogged) return <Navigate to={paths.profile} />;

  if (requireUser && !isUser) logout();
  if (requireMod && !isMod) logout();
  if (requireAdmin && !isAdmin) logout();

  return children;
};
