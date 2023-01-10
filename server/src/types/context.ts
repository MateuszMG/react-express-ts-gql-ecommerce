import { Request, Response } from 'express';
import { UserFromJWT } from '../utils/jwt';

export type Context = {
  req: Request & {
    user?: UserFromJWT;
  };
  res: Response;
};
