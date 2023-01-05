import { useStripe } from '@stripe/react-stripe-js';
import { Counter } from '../../components/Counter/Counter';
import { Button } from '../../components/Global/Button/Button';
import {
  useAddToBasketMutation,
  useCreatePaymentMutation,
  useGetBasketQuery,
  useRemoveFromBasketMutation,
} from '../../generated/types';

interface BasketProps {}

export const Basket = ({}: BasketProps) => {
  const stripe = useStripe();
  const { data: basket } = useGetBasketQuery();
  // console.log('basket', basket);

  const [add] = useAddToBasketMutation();
  const [remove] = useRemoveFromBasketMutation();

  const [createPayment] = useCreatePaymentMutation();

  const addToBasket = (id: string) => {
    add({
      variables: { input: { id } },
      onError: (err) => console.log('err', { err }),
    });
  };

  const removeFromBasket = (id: string) => {
    remove({
      variables: { input: { id } },
      onError: (err) => console.log('err', { err }),
    });
  };

  const buy = async () => {
    const id = await createPayment().then((res) => res.data?.createPayment.id);
    if (!id) return;
    await stripe!.redirectToCheckout({ sessionId: id });
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
