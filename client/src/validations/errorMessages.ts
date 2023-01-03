type ErrorKeys = 'Comment';

export const errorMessages = {
  required: (name: ErrorKeys) => `${name} is required.`,
  max: (name: ErrorKeys, max: number) =>
    `${name} must be at most ${max} characters.`,
  min: (name: ErrorKeys, min: number) =>
    `${name} must be at least ${min} characters.`,
  trim: (name: ErrorKeys) =>
    `${name} cannot contain leading and trailing spaces.`,
};
