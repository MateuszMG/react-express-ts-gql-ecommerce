interface Config {
  port: number;
  databaseUri: string;
  accessTokenSecret: string;
  refreshTokenSecret: string;
  stripeSecret: string;
}

const PORT = process.env.PORT || 4000;

export const config: Config = {
  port: +PORT,

  databaseUri: process.env.DATABASE || '',

  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || '',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || '',

  stripeSecret: process.env.STRIPE_SECRET || '',
};
