import { Login } from '../pages/Auth/Login';
import { paths } from './paths';
import { Products } from '../pages/Products/Products';
import { Profile } from '../pages/Profile/Profile';
import { Register } from '../pages/Auth/Register';
import { AppRoles } from '../const';
import { Home } from '../pages/Home/Home';
import { Category } from '../pages/Category/Category';
import { Product } from '../pages/Product/Product';
import { Basket } from '../pages/Basket/Basket';
import { CancelPayment } from '../pages/Payment/CancelPayment';
import { SuccessPayment } from '../pages/Payment/SuccessPayment';

export const routesConfig = [
  // NOT_LOGGED
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

  // GUEST
  {
    component: Home,
    path: paths.home,
    roles: [AppRoles.GUEST],
  },
  {
    component: Product,
    path: paths.product(':productId'),
    roles: [AppRoles.GUEST],
  },

  // USER
  {
    component: Profile,
    path: paths.profile,
    roles: [AppRoles.USER],
  },
  {
    component: Basket,
    path: paths.basket,
    roles: [AppRoles.USER],
  },
  {
    component: SuccessPayment,
    path: paths.success,
    roles: [AppRoles.USER],
  },
  {
    component: CancelPayment,
    path: paths.cancel,
    roles: [AppRoles.USER],
  },

  // MODERATOR
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
