import {
  useGetBasketQuery,
  useGetPurchaseHistoryQuery,
  useProfileQuery,
} from '../../generated/types';

export const Profile = () => {
  const { data: profile, loading, error, client } = useProfileQuery();
  const { data } = useGetPurchaseHistoryQuery();

  const user = profile?.profile;
  // console.log('data', data?.profile);
  // data && (data.profile.logged = false);
  // console.log('logged', data?.profile.logged);

  console.log('data', data?.getUser.purchaseHistory);

  return (
    <div>
      <p> Email: {user?.email} </p>
      <p> Profile </p>
      <p> Profile </p>
    </div>
  );
};
