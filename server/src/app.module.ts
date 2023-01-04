import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './features/category/category.module';
import { CategorySchema } from './features/category/category.model';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configruration';
import { decodeAccessToken } from './utils/jwt.utils';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './features/product/product.module';
import { ProductSchema } from './features/product/product.model';
import { RatingModule } from './features/rating/rating.module';
import { RatingSchema } from './features/rating/rating.model';
import { UserSchema } from './features/user/user.model';
import { UsersModule } from './features/user/user.module';
import { ViewModule } from './features/view/view.module';
import { ViewSchema } from './features/view/view.model';

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
      { name: 'rating', schema: RatingSchema },
      { name: 'view', schema: ViewSchema },
    ]),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
      playground: true,
      cors: { origin: process.env.DOMAIN },

      context: ({ req, res }) => {
        if (!req) return; // for subscription
        // console.log('req', req?.body);

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
    RatingModule,
    ViewModule,
  ],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
