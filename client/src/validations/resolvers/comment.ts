import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { commentSchema } from '../schemas/comment';

const validation = yup.object({
  ...commentSchema,
});

export type CommentSchema = yup.InferType<typeof validation>;

export const commentResolver = yupResolver(validation);
