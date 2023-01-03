import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLScalarType } from 'graphql';

@ObjectType()
export class ResMessage {
  @Field()
  message: string;
}

@ObjectType()
export class ResId {
  @Field()
  id: string;
}

export const GraphQLVoid = new GraphQLScalarType({
  name: 'GraphQLVoid',
  description: 'Without response',
  serialize() {
    return null;
  },
  parseValue() {
    return null;
  },
  parseLiteral() {
    return null;
  },
});
