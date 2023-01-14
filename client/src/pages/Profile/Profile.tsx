import {
  useGetBasketQuery,
  useGetPurchaseHistoryQuery,
  useGetUserQuery,
  useProfileQuery,
} from '../../generated/types';
import { DeliveryAdressForm } from './DeliveryAdressForm/DeliveryAdressForm';

export const Profile = () => {
  const { data: userData, loading, error, client } = useGetUserQuery();
  // const { data } = useGetPurchaseHistoryQuery();

  const user = userData?.getUser;
  console.log('user', user);
  // data && (data.profile.logged = false);
  // console.log('logged', data?.profile.logged);

  // console.log('data', data?.getUser.purchaseHistory);

  return (
    <div>
      <p> Email: {user?.email} </p>
      <DeliveryAdressForm />
    </div>
  );
};
