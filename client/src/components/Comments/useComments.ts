import { useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { editedCommentVar } from '../../client/reactiveVariables';
import {
  useAddCommentMutation,
  useDeleteCommentMutation,
  useEditCommentMutation,
  useGetCommentsLazyQuery,
} from '../../generated/types';
import {
  commentResolver,
  CommentSchema,
} from '../../validations/resolvers/comment';

export const useComments = () => {
  const productId = useParams().productId as string;

  const [getComments, { data }] = useGetCommentsLazyQuery();
  const comments = data?.getComments;

  const [addComment, { loading: addLoading }] = useAddCommentMutation();
  const [editComment, { loading: editLoading }] = useEditCommentMutation();
  const [deleteComment, { loading: deleteLoading }] =
    useDeleteCommentMutation();

  const loading = addLoading || editLoading || deleteLoading;

  const editedComment = useReactiveVar(editedCommentVar);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<CommentSchema>({
    resolver: commentResolver,
  });

  const onSubmit = handleSubmit((data) => {
    if (editedComment) {
      editComment({
        variables: { input: { comment: data.comment, id: editedComment.id } },
        onCompleted: (data) => {
          console.log('data', data);
        },
        onError: (error) => {
          console.log('error', { error });
        },
      });
      editedCommentVar(null);
    } else {
      addComment({
        variables: { input: { comment: data.comment, productId } },
        onCompleted: (data) => {
          console.log('data', data);
        },
        onError: (error) => {
          console.log('error', { error });
        },
      });
    }
    reset();
  });

  const handleEdit = (id: string) => {
    editedCommentVar(comments?.find((item) => item.id === id));
  };

  const handleReset = () => {
    reset();
  };

  const handleDelete = (id: string) => {
    deleteComment({
      variables: { input: { id } },
      onCompleted: (data) => {
        console.log('data', data);
      },
      onError: (error) => {
        console.log('error', { error });
      },
    });
  };

  useEffect(() => {
    getComments({
      variables: { input: { productId } },
      onCompleted: (data) => {
        console.log('data', data);
      },
      onError: (error) => {
        console.log('error', { error });
      },
    });
  }, []);

  useEffect(() => {
    if (!editedComment) return;
    reset({ comment: editedComment.comment });
  }, [editedComment]);

  return {
    comments,
    errors,
    handleDelete,
    handleEdit,
    handleReset,
    isDirty,
    isValid,
    loading,
    onSubmit,
    register,
  };
};
