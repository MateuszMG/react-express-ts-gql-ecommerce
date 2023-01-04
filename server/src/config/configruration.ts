export const configuration = () => ({
  port: parseInt(process.env.PORT) || 4000,
  database: process.env.DATABASE,
  domain: process.env.DOMAIN,
  tokens: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  },
});
