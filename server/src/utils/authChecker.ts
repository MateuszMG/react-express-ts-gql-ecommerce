import { AuthChecker } from 'type-graphql';
import { Context } from '../types/context';

// create auth checker function
export const authChecker: AuthChecker<Context> = (context, roles) => {
  const user = context.context.req.user;

  if (roles.length === 0) return user !== undefined;
  if (!user) return false;
  if (user.roles.some((role) => roles.includes(role))) return true;
  return false;
};
