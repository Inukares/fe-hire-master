import { computeFairPrice } from '../computeFairPrice';

describe('computeFairPrice', () => {
  it('rounds to precision 1 correctly', () => {
    const asks = [{ price: '4000.2' }];
    const bids = [{ price: '4000.1' }];
    expect(computeFairPrice({ asks, bids })).toEqual('4000.2');
  });

  it('calculates fair price as (median(asks) + median(bids))/2 correctly', () => {
    const asks = [
      { price: '5555555.0', amount: '222.222', calculativeAmount: '152.234' },
      { price: '1234124.0', amount: '4.931', cumulativeAmount: '27.088' },
      { price: '100.0', amount: '8.346', cumulativeAmount: '22.157' },
      { price: '94.0', amount: '8.573', cumulativeAmount: '13.812' },
      { price: '93.0', amount: '2.955', cumulativeAmount: '2.955' },
    ];
    const bids = [
      { price: '500.0' },
      { price: '499.0', amount: '1.520', cumulativeAmount: '1.520' },
      { price: '50.0', amount: '10.361', cumulativeAmount: '11.881' },
      { price: '40.0', amount: '2.526', cumulativeAmount: '14.408' },
      { price: '30.0', amount: '5.359', cumulativeAmount: '22.611' },
    ];
    expect(computeFairPrice({ asks, bids })).toEqual('75.0');
  });
});
