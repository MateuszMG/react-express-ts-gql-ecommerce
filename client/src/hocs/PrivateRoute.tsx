import { Navigate } from 'react-router-dom';
import { AppRoles, UserRoles } from '../const';
import { useAuth } from '../hooks/useAuth';
import { paths } from '../routes/paths';

interface PrivateRouteProps {
  children: JSX.Element;
  roles: AppRoles[];
}

export const PrivateRoute = ({ children, roles }: PrivateRouteProps) => {
  const { isAdmin, isLogged, isMod, isUser, user, logout } = useAuth();
  console.log('user.roles', user.roles);

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
