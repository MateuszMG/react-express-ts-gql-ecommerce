export const paths = {
  home: '/',
  basket: '/basket',

  login: '/login',
  register: '/register',

  profile: '/profile',
  success: '/profile/success',
  cancel: '/profile/cancel',

  //moderator
  products: '/products',
  product: (id: string) => `/product/${id}`,
  categories: '/categories',

  all: '*',
};
