import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './features/user/user.module';
import { decodeAccessToken } from './utils/jwt.utils';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './features/user/user.model';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configruration';
import { ProductModule } from './features/product/product.module';
import { ProductSchema } from './features/product/product.model';
import { CategoryModule } from './features/category/category.module';
import { CategorySchema } from './features/category/category.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configuration],
    }),

    MongooseModule.forRoot(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),

    MongooseModule.forFeature([
      { name: 'user', schema: UserSchema },
      { name: 'product', schema: ProductSchema },
      { name: 'category', schema: CategorySchema },
    ]),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
      playground: true,
      cors: { origin: true },

      context: ({ req, res }) => {
        if (!req) return;
        console.log('req', req?.body);

        if (!req.headers?.authorization) {
          req.user = null;
        } else {
          const accessToken = req.headers?.authorization.split(' ')[1];
          req.user = accessToken ? decodeAccessToken(accessToken) : null;
        }
        return { req, res };
      },
    }),
    UsersModule,
    ProductModule,
    CategoryModule,
  ],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
