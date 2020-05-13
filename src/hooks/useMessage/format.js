import { round } from './sortData';

export const format = (data) =>
  data.map(({ price, amount, cumulativeAmount }) => ({
    price: round(price, 1),
    amount: round(amount, 3),
    cumulativeAmount: round(cumulativeAmount, 3),
  }));
