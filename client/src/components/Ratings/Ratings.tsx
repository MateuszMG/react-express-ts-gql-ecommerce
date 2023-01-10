import { Button } from '../Global/Button/Button';
import { Form } from '../Global/Form/Form';
import { TextInput } from '../Global/inputs/TextInput/TextInput';
import { useRatings } from './useRatings';

export const Ratings = () => {
  const {
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
  } = useRatings();

  return (
    <div>
      <Form onSubmit={onSubmit} onReset={handleReset}>
        <TextInput {...register('comment')} error={errors?.comment?.message} />
        <TextInput
          {...register('rating')}
          error={errors?.rating?.message}
          type={'number'}
        />
        <Form.ButtonsWrapper>
          <Button loading={loading} type={'reset'}>
            Reset
          </Button>
          <Button
            disabled={!isValid && !isDirty}
            loading={loading}
            type={'submit'}
          >
            Add comment
          </Button>
        </Form.ButtonsWrapper>
      </Form>

      {ratings?.map(
        ({ comment, createdAt, _id, rating, isOwner, updatedAt, username }) => (
          <section key={_id}>
            <p> username: {username} </p>
            <p> {comment} </p>
            <p>
              {createdAt !== updatedAt ? 'Updated: ' : 'Added: '} {updatedAt}{' '}
            </p>
            <h1>rating: {rating}</h1>
            {isOwner && (
              <>
                <Button onClick={() => handleDelete(_id)}>Delete</Button>
                <Button onClick={() => handleEdit(_id)}>Edit</Button>
              </>
            )}
          </section>
        ),
      )}
      <p> Ratings </p>
      <p> Ratings </p>
      <p> Ratings </p>
    </div>
  );
};
