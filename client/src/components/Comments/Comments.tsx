import { Button } from '../Global/Button/Button';
import { Form } from '../Global/Form/Form';
import { TextInput } from '../Global/inputs/TextInput/TextInput';
import { useComments } from './useComments';

export const Comments = () => {
  const {
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
  } = useComments();

  return (
    <div>
      <Form onSubmit={onSubmit} onReset={handleReset}>
        <TextInput {...register('comment')} error={errors?.comment?.message} />
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

      {comments?.map(
        ({ comment, createdAt, id, userId, isOwner, updatedAt, username }) => (
          <section key={id}>
            <p> username: {username} </p>
            <p> {comment} </p>
            <p>
              {createdAt !== updatedAt ? 'Updated: ' : 'Added: '} {updatedAt}{' '}
            </p>
            {isOwner && (
              <>
                <Button onClick={() => handleDelete(id)}>Delete</Button>
                <Button onClick={() => handleEdit(id)}>Edit</Button>
              </>
            )}
          </section>
        ),
      )}
      <p> Comments </p>
      <p> Comments </p>
      <p> Comments </p>
    </div>
  );
};
