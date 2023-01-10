export type Optional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

export type MongoModelContents<T> = Omit<
  T,
  '_id' | 'id' | 'createdAt' | 'updatedAt'
>;
