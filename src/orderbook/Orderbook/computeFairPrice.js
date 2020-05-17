import { round } from '../../utils/round';

// number of elements is always odd, with the current worker implementation, but below could be easily improved
// to handle cases where number of elements are even
export const computeFairPrice = ({ asks, bids }) => {
  const middleAsks = asks[Math.floor((asks.length - 1) / 2)].price;
  const middleBids = bids[Math.floor((bids.length - 1) / 2)].price;
  return round((parseFloat(middleAsks) + parseFloat(middleBids)) / 2, 1);
};
