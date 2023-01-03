import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserRoles } from 'src/features/user/user.model';
import { UserFromJWT } from 'src/utils/jwt.utils';

@Injectable()
export class RolesGuard implements CanActivate {
  requireRole: UserRoles;
  constructor(requireRole: UserRoles) {
    this.requireRole = requireRole;
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.getArgs()[2].req?.user as UserFromJWT | null;
    console.log('user', user);

    if (!user) return false;

    user.roles.includes(this.requireRole);

    return false;
  }
}