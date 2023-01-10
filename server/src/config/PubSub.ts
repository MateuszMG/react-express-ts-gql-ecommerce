import { PubSub } from 'graphql-subscriptions';

export const pubSub = new PubSub();

export const pubSubTopics = {
  highlightedProductUpdated: 'highlightedProductUpdated',
};
