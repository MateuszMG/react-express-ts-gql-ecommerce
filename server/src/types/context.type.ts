import { Request, Response } from 'express';
import { UserFromJWT } from 'src/utils/jwt.utils';

type Ctx = {
  req: Request & {
    user?: UserFromJWT;
  };
  res: Response;
};

export default Ctx;
