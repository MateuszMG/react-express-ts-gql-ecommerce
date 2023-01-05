import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSavePaymentMutation } from '../../generated/types';

export const SuccessPayment = () => {
  const [savePayment] = useSavePaymentMutation();

  useEffect(() => {
    savePayment();
  }, []);

  return <Navigate to='/profile' />;
};
