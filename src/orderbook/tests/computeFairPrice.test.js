import { computeFairPrice } from '../computeFairPrice';

describe('computeFairPrice', () => {
  it('rounds to precision 1 correctly', () => {
    const asks = [{ price: '4000.2' }];
    const bids = [{ price: '4000.1' }];
    expect(computeFairPrice({ asks, bids })).toEqual('4000.2');
  });

  it('calculates fair price as smallest(asks) + biggest(bids)/2 correctly', () => {
    const asks = [
      { price: '4004.9', amount: '4.931', cumulativeAmount: '27.088' },
      { price: '4004.8', amount: '8.346', cumulativeAmount: '22.157' },
      { price: '4001.8', amount: '8.573', cumulativeAmount: '13.812' },
      { price: '4000.0', amount: '2.955', cumulativeAmount: '2.955' },
    ];
    const bids = [
      { price: '4000.0', amount: '1.520', cumulativeAmount: '1.520' },
      { price: '3999.3', amount: '10.361', cumulativeAmount: '11.881' },
      { price: '3998.7', amount: '2.526', cumulativeAmount: '14.408' },
      { price: '3996.9', amount: '5.359', cumulativeAmount: '22.611' },
    ];
    expect(computeFairPrice({ asks, bids })).toEqual('4000.0');
  });
});
