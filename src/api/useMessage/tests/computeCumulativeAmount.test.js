import { computeCumulativeAmount } from '../computeCumulativeAmount';

describe('computeCumulativeAmount', () => {
  const asks = [
    { price: '4004.9', amount: 4.931 },
    { price: '4004.8', amount: 8.346 },
    { price: '4001.8', amount: 8.573 },
    { price: '4000.8', amount: 2.955 },
  ];
  const bids = [
    { price: '4000.3', amount: 1.520 },
    { price: '3999.3', amount: 10.361 },
    { price: '3998.7', amount: 2.526 },
    { price: '3996.9', amount: 5.359 },
  ];
  const expectedAsks = [
    { price: '4004.9', amount: 4.931, cumulativeAmount: 24.805000000000003 },
    { price: '4004.8', amount: 8.346, cumulativeAmount: 19.874000000000002 },
    { price: '4001.8', amount: 8.573, cumulativeAmount: 11.528},
    { price: '4000.8', amount: 2.955, cumulativeAmount: 2.955 }
  ];
  const expectedBids = [
    { price: '4000.3', amount: 1.52, cumulativeAmount: 1.52 },
    { price: '3999.3', amount: 10.361, cumulativeAmount: 11.881 },
    { price: '3998.7', amount: 2.526, cumulativeAmount: 14.407 },
    { price: '3996.9', amount: 5.359, cumulativeAmount: 19.766 },
  ];

  it('sums amount from smallest to highest price(asks) correctly', () => {
    expect(computeCumulativeAmount(asks)).toEqual(expectedAsks)
  });

  it('sums amount from highest to smallest price(bids) correctly', () => {
    expect(computeCumulativeAmount(bids, true)).toEqual(expectedBids)
  });

});
