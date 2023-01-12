import { Button } from '../../../components/Global/Button/Button';
import { Form } from '../../../components/Global/Form/Form';
import { TextInput } from '../../../components/Global/inputs/TextInput/TextInput';
import { FormWrapper, Title } from './DeliveryAdressForm.styled';
import { useDeliveryAdressForm } from './useDeliveryAdressForm';

export const DeliveryAdressForm = () => {
  const { errors, isDirty, isValid, loading, onSubmit, register, reset } =
    useDeliveryAdressForm();

  return (
    <FormWrapper>
      <Form onReset={() => reset()} onSubmit={onSubmit}>
        <Title>Set delivery adress</Title>

        <TextInput
          {...register('firstName')}
          message={errors?.firstName?.message}
        />

        <TextInput
          {...register('lastName')}
          message={errors?.lastName?.message}
        />

        <TextInput
          {...register('address')}
          message={errors?.address?.message}
        />

        <TextInput
          {...register('postCode')}
          message={errors?.postCode?.message}
        />

        <TextInput {...register('city')} message={errors?.city?.message} />

        <TextInput {...register('state')} message={errors?.state?.message} />

        <TextInput
          {...register('phoneNumber')}
          message={errors?.phoneNumber?.message}
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
            Set delivery adress
          </Button>
        </Form.ButtonsWrapper>
      </Form>
    </FormWrapper>
  );
};
