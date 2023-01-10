import { useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { editedRatingVar } from '../../client/reactiveVariables';
import {
  useAddRatingMutation,
  useDeleteRatingMutation,
  useEditRatingMutation,
  useGetRatingsLazyQuery,
} from '../../generated/types';
import {
  RatingSchema,
  ratingResolver,
} from '../../validations/resolvers/rating';

export const useRatings = () => {
  const productId = useParams().productId as string;

  const [getRatings, { data }] = useGetRatingsLazyQuery();
  const ratings = data?.getRatings;

  const [addRating, { loading: addLoading }] = useAddRatingMutation();
  const [editRating, { loading: editLoading }] = useEditRatingMutation();
  const [deleteRating, { loading: deleteLoading }] = useDeleteRatingMutation();

  const loading = addLoading || editLoading || deleteLoading;

  const editedRating = useReactiveVar(editedRatingVar);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<RatingSchema>({
    resolver: ratingResolver,
  });

  const onSubmit = handleSubmit((data) => {
    if (editedRating) {
      editRating({
        variables: { input: { ...data, _id: editedRating._id } },
        onCompleted: (data) => {
          console.log('data', data);
        },
        onError: (error) => {
          console.log('error', { error });
        },
      });
      editedRatingVar(null);
    } else {
      addRating({
        variables: { input: { ...data, productId } },
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

  const handleEdit = (_id: string) => {
    editedRatingVar(ratings?.find((item) => item._id === _id));
  };

  const handleReset = () => {
    reset();
  };

  const handleDelete = (_id: string) => {
    deleteRating({
      variables: { input: { _id } },
      onCompleted: (data) => {
        console.log('data', data);
      },
      onError: (error) => {
        console.log('error', { error });
      },
    });
  };

  useEffect(() => {
    getRatings({
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
    if (!editedRating) return;
    reset({ comment: editedRating.comment });
  }, [editedRating]);

  return {
    ratings,
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
