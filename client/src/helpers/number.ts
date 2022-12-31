export const randomNumber = (count: number = 6) =>
  +Math.random().toString().slice(-count);
