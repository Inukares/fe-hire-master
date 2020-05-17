import { round } from '../../utils/round';
import { median } from 'd3-array';

export const computeFairPrice = ({ asks, bids }) => {
  const asksPrice = asks.map((ask) => ask.price);
  const bidsPrice = bids.map((bid) => bid.price);
  return round((median(asksPrice) + median(bidsPrice)) / 2, 1);
};
