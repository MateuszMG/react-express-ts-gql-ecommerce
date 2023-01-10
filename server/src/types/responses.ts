import { Field, ObjectType } from 'type-graphql';
import { GraphQLScalarType } from 'graphql';

@ObjectType()
export class ResMessage {
  @Field()
  message: string;
}

@ObjectType()
export class ResId {
  @Field()
  _id: string;
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
