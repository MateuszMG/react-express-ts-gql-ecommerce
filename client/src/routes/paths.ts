export const paths = {
  home: '/',

  login: '/login',
  register: '/register',
  profile: '/profile',
  basket: '/basket',

  products: '/products',
  product: (id: string) => `/product/${id}`,
  categories: '/categories',

  all: '*',
};
