import mongoose, { ConnectOptions } from 'mongoose';
import { config } from './config';

export const mongooseConnect = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(
    config.databaseUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions,
    (err) => {
      if (err) throw err;
      console.log('Mongoose connected');
    },
  );
};
