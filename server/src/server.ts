import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();
import { config } from './config/config';

import { mongooseConnect } from './config/db';
mongooseConnect();

import app from './app';

import { apolloServer } from './apollo/apolloServer';
import { expressMiddleware } from '@apollo/server/express4';
import { json } from 'body-parser';
import cors from 'cors';
import http from 'http';

async function bootstrap() {
  const httpServer = http.createServer(app);
  const server = await apolloServer(httpServer);
  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>({ origin: true }),
    json(),
    (req, res, next) => {
      console.log('');
      next();
    },
    expressMiddleware(server),
  );

  httpServer.listen({ port: config.port });
}

bootstrap();

// import 'reflect-metadata';

// import dotenv from 'dotenv';
// dotenv.config();
// import { config } from './config/config';

// import { mongooseConnect } from './config/db';
// mongooseConnect();

// import { startStandaloneServer } from '@apollo/server/standalone';
// import app from './app';
// import { apolloServer } from './apollo/apolloServer';
// import { Context } from './types/context';
// import { decodeAccessToken } from './utils/jwt';

// async function bootstrap() {
//   app.listen(config.restApiPort, () => {
//     console.log(
//       'App listening on port: ' +
//         config.restApiPort +
//         '. ' +
//         new Date().toLocaleTimeString(),
//     );
//   });

//   const { url } = await startStandaloneServer(await apolloServer(), {
//     listen: { port: config.graphqlPort },

//     // @ts-ignore
//     context: ({ req, res }: any): Context | null => {
//       // console.log('context', Object.keys(res));

//       if (!req) return null; // for subscription
//       // console.log('req', req?.body);

//       if (!req.headers?.authorization) {
//         req.user = null;
//       } else {
//         const accessToken = req.headers?.authorization.split(' ')[1];
//         req.user = accessToken ? decodeAccessToken(accessToken) : null;
//       }
//       return { req, res };
//     },
//   });
//   console.log(`Grapgql server ready at: ${url}`);
// }

// bootstrap();
