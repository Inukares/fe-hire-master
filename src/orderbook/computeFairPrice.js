import { round } from '../hooks/useMessage/sortData';

// number of elements is always odd, but could be easily improved
export const computeFairPrice = ({ asks, bids }) => {
  const middleAsks = asks[Math.floor((asks.length - 1) / 2)].price;
  const middleBids = bids[Math.floor((bids.length - 1) / 2)].price;
  return round((parseFloat(middleAsks) + parseFloat(middleBids)) / 2, 1);
};
