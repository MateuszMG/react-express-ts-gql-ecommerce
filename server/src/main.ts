// import mongoose from 'mongoose';

// mongoose.set('toJSON', {
//   virtuals: true,
//   transform: (doc, converted) => {
//     console.log('doc', doc);

//     delete converted._id;
//   },
// });

// mongoose.plugin((schema: any) => {
//   console.log('tu');

//   schema.options.toJSON = {
//     virtuals: true,
//     versionKey: false,
//     transform(doc, ret) {
//       ret.id = ret._id;
//       delete ret._id;
//     },
//   };
// });

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.DOMAIN,
  });
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(4000);
  console.log();
  console.log('I am ready ;D');
  console.log();
}
bootstrap();
