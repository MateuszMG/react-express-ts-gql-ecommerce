export const paths = {
  home: '/',

  login: '/login',
  register: '/register',
  profile: '/profile',

  products: '/products',
  product: (id: string) => `/product/${id}`,
  categories: '/categories',

  all: '*',
};
