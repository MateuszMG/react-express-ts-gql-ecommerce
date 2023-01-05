import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { RolesGuard } from 'src/guards/roles.guard';
import { UserRoles } from '../auth/auth.model';

@Resolver()
@UseGuards(new RolesGuard([UserRoles.USER, UserRoles.MODERATOR]))
export class SoldResolver {}
