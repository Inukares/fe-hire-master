import { round } from '../hooks/useMessage/sortData';

export const computeFairPrice = ({ asks, bids }) => {
  return round(
    (parseFloat(asks[asks.length - 1].price) + parseFloat(bids[0].price)) / 2,
    1
  );
};
