import { editedDeliveryAdressVar } from '../../../client/reactiveVariables';
import { randomNumber } from '../../../helpers/number';
import { useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSetDeliveryAdressMutation } from '../../../generated/types';
import {
  deliveryAdressResolver,
  DeliveryAdressSchema,
} from '../../../validations/resolvers/deliveryAdress';

const createDefaultValues = () => ({
  firstName: 'firstName',
  lastName: 'lastName',
  address: 'address',
  postCode: 'postCod',
  city: 'city',
  state: 'state',
  phoneNumber: 'phoneNumber',
});

export const useDeliveryAdressForm = () => {
  const [setAdress, { loading }] = useSetDeliveryAdressMutation();

  const editedDeliveryAdress = useReactiveVar(editedDeliveryAdressVar);

  const {
    formState: { errors, isValid, isDirty },
    handleSubmit,
    register,
    reset,
  } = useForm<DeliveryAdressSchema>({
    mode: 'onChange',
    resolver: deliveryAdressResolver,
    defaultValues: createDefaultValues(),
  });

  const onSubmit = handleSubmit((input) => {
    console.log('input', input);

    setAdress({
      variables: { input },
      onCompleted: (data) => {
        console.log('data', data);
      },
      onError: (error) => console.log('error', { error }),
    });

    editedDeliveryAdressVar(null);

    reset(createDefaultValues());
  });

  useEffect(() => {
    if (!editedDeliveryAdress) return;
    const { __typename, ...rest } = editedDeliveryAdress;
    reset(rest);
  }, [editedDeliveryAdress]);

  return { errors, isDirty, isValid, loading, onSubmit, register, reset };
};
