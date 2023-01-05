import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './features/auth/auth.module';
import { Category, CategorySchema } from './features/category/category.model';
import { CategoryModule } from './features/category/category.module';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configruration';
import { decodeAccessToken } from './utils/jwt.utils';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './features/product/product.model';
import { ProductForGuestModule } from './features/product-for-guest/product-for-guest.module';
import { ProductModule } from './features/product/product.module';
import { Rating, RatingSchema } from './features/rating/rating.model';
import { RatingModule } from './features/rating/rating.module';
import { Sold, SoldSchema } from './features/sold/sold.model';
import { SoldModule } from './features/sold/sold.module';
import { User, UserSchema } from './features/auth/auth.model';
import { View, ViewSchema } from './features/view/view.model';
import { ViewModule } from './features/view/view.module';
import { UserModule } from './features/user/user.module';

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
      { name: User.name, schema: UserSchema },
      { name: Product.name, schema: ProductSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Rating.name, schema: RatingSchema },
      { name: View.name, schema: ViewSchema },
      { name: Sold.name, schema: SoldSchema },
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
    AuthModule,
    ProductModule,
    CategoryModule,
    RatingModule,
    ViewModule,
    SoldModule,
    ProductForGuestModule,
    UserModule,
  ],
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
