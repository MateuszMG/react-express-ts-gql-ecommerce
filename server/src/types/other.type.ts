export type MongoModelContents<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
