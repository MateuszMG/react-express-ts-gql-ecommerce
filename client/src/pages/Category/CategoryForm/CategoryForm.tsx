import { Button } from '../../../components/Global/Button/Button';
import { Form } from '../../../components/Global/Form/Form';
import { FormWrapper, Title } from './CategoryForm.styled';
import { TextInput } from '../../../components/Global/inputs/TextInput/TextInput';
import { useCategoryForm } from './useCategoryForm';

export const CategoryForm = () => {
  const { errors, isDirty, isValid, loading, onSubmit, register, reset } =
    useCategoryForm();

  return (
    <FormWrapper>
      <Form onReset={() => reset()} onSubmit={onSubmit}>
        <Title>Add category</Title>

        <TextInput
          {...register('category')}
          label={'Category'}
          message={errors?.category?.message}
          placeholder={'Ball'}
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
            Add category
          </Button>
        </Form.ButtonsWrapper>
      </Form>
    </FormWrapper>
  );
};
