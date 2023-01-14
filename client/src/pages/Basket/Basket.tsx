import { useStripe } from '@stripe/react-stripe-js';
import { Counter } from '../../components/Counter/Counter';
import { Button } from '../../components/Global/Button/Button';
import {
  GetUserDocument,
  GetUserQuery,
  useAddToBasketMutation,
  useCreatePaymentMutation,
  useGetBasketQuery,
  useRemoveFromBasketMutation,
} from '../../generated/types';

export const Basket = () => {
  const stripe = useStripe();
  const { data: basket, client } = useGetBasketQuery();

  const user = (
    client.cache.readQuery({
      query: GetUserDocument,
    }) as GetUserQuery | undefined
  )?.getUser;

  console.log('user', user);

  const [add] = useAddToBasketMutation();
  const [remove] = useRemoveFromBasketMutation();

  const [createPayment] = useCreatePaymentMutation();

  const addToBasket = (_id: string) => {
    add({
      variables: { input: { _id } },
      onError: (err) => console.log('err', { err }),
    });
  };

  const removeFromBasket = (_id: string) => {
    remove({
      variables: { input: { _id } },
      onError: (err) => console.log('err', { err }),
    });
  };

  const buy = async () => {
    const _id = await createPayment().then(
      (res) => res.data?.createPayment._id,
    );
    if (!_id) return;
    await stripe!.redirectToCheckout({ sessionId: _id });
  };

  return (
    <div>
      {basket?.getBasket.products.map((item) => (
        <section key={item.title}>
          <h3>{item.title}</h3>
          <p>quantityTotal: {item.quantityTotal}</p>
          <p>priceTotal: {item.priceTotal}</p>
          <Counter
            devaultValue={item.quantityTotal}
            max={item.quantity}
            onDecrease={() => removeFromBasket(item.productId)}
            onIncrease={() => addToBasket(item.productId)}
          />
        </section>
      ))}
      <p> quantityTotal: {basket?.getBasket.quantityTotal} </p>
      <p> priceTotal: {basket?.getBasket.priceTotal} </p>
      <p> discountTotal: {basket?.getBasket.discountTotal} </p>
      <p> percentageDiscount: {basket?.getBasket.percentageDiscount} </p>
      <p> Basket </p>
      <p> Basket </p>

      <Button onClick={() => buy()}>buy</Button>
    </div>
  );
};
