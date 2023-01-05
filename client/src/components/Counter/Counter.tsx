import { useState } from 'react';
import { Button } from '../Global/Button/Button';

interface CounterProps {
  devaultValue: number;
  max: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export const Counter = ({
  devaultValue,
  max,
  onDecrease,
  onIncrease,
}: CounterProps) => {
  const [number, setNumber] = useState(devaultValue);

  const handleIncrease = () => {
    if (number > max) return;
    setNumber(number + 1);
    onIncrease();
  };

  const handleDecrease = () => {
    if (number <= 0) return;
    setNumber(number - 1);
    onDecrease();
  };

  return (
    <div>
      <Button onClick={() => handleIncrease()}>+</Button>
      <h2>{number.toString()}</h2>
      <Button onClick={() => handleDecrease()}>-</Button>
    </div>
  );
};
