import { Request, Response } from 'express';
import { UserFromJWT } from 'src/utils/jwt.utils';

export type Ctx = {
  req: Request & {
    user?: UserFromJWT;
  };
  res: Response;
};
