import { Field, ObjectType } from 'type-graphql';
import { UserRoles } from '../user/model';

@ObjectType()
export class AccessToken {
  @Field()
  accessToken: string;
}

@ObjectType()
export class DecodedUser {
  @Field()
  _id: string;
  @Field()
  username: string;
  @Field()
  email: string;
  @Field(() => [String])
  roles: UserRoles[];
}
