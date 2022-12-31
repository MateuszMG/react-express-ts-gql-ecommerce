import { Login } from '../pages/Auth/Login';
import { paths } from './paths';
import { Products } from '../pages/Products/Products';
import { Profile } from '../pages/Profile/Profile';
import { Register } from '../pages/Auth/Register';
import { Roles } from '../const';
import { Home } from '../pages/Home/Home';
import { Category } from '../pages/Category/Category';

export const routesConfig = [
  {
    component: Home,
    path: paths.home,
    roles: [Roles.GUEST],
  },
  {
    component: Login,
    path: paths.login,
    roles: [Roles.NOT_LOGGED],
  },
  {
    component: Register,
    path: paths.register,
    roles: [Roles.NOT_LOGGED],
  },
  {
    component: Profile,
    path: paths.profile,
    roles: [Roles.USER],
  },
  {
    component: Products,
    path: paths.products,
    roles: [Roles.USER],
  },
  {
    component: Category,
    path: paths.categories,
    roles: [Roles.USER],
  },
];
