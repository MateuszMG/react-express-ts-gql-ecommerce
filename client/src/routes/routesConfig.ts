import { Login } from '../pages/Auth/Login';
import { paths } from './paths';
import { Products } from '../pages/Products/Products';
import { Profile } from '../pages/Profile/Profile';
import { Register } from '../pages/Auth/Register';
import { AppRoles } from '../const';
import { Home } from '../pages/Home/Home';
import { Category } from '../pages/Category/Category';

export const routesConfig = [
  {
    component: Home,
    path: paths.home,
    roles: [AppRoles.GUEST],
  },
  {
    component: Login,
    path: paths.login,
    roles: [AppRoles.NOT_LOGGED],
  },
  {
    component: Register,
    path: paths.register,
    roles: [AppRoles.NOT_LOGGED],
  },
  {
    component: Profile,
    path: paths.profile,
    roles: [AppRoles.USER],
  },
  {
    component: Products,
    path: paths.products,
    roles: [AppRoles.MODERATOR],
  },
  {
    component: Category,
    path: paths.categories,
    roles: [AppRoles.MODERATOR],
  },
];
