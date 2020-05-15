import { closestDifferenceIndex } from '../closestDifference';

describe('closestDifferenceIndex', () => {
  const asks = [
    { price: '4004.9', amount: '4.931', cumulativeAmount: '27.088' },
    { price: '4004.8', amount: '8.346', cumulativeAmount: '22.157' },
    { price: '4001.8', amount: '8.573', cumulativeAmount: '13.812' },
    { price: '4000.8', amount: '2.955', cumulativeAmount: '2.955' },
  ];
  const bids = [
    { price: '4000.3', amount: '1.520', cumulativeAmount: '1.520' },
    { price: '3999.3', amount: '10.361', cumulativeAmount: '11.881' },
    { price: '3998.7', amount: '2.526', cumulativeAmount: '14.408' },
    { price: '3996.9', amount: '5.359', cumulativeAmount: '22.611' },
  ];

  const asksComparator = asks[asks.length - 1].price;
  const bidsComparator = bids[0].price;

  it(`returns first object's index given passing comparator from asks as targetDifference`, () => {
    const comparator = bidsComparator;
    const targetDifference = asksComparator - asksComparator;
    const expected = 0;
    expect(closestDifferenceIndex(bids, targetDifference, comparator)).toEqual(
      expected
    );
  });

  it(`returns second object's index given targetDifference === 1`, () => {
    const comparator = bidsComparator;
    const targetDifference = 1;
    const expected = 1;
    expect(closestDifferenceIndex(bids, targetDifference, comparator)).toEqual(
      expected
    );
  });

  it(`returns object's index which's value - comparator difference is closest to targetDifference`, () => {
    const comparator = asksComparator;
    const targetDifference = 3;
    const expected = 1;
    expect(closestDifferenceIndex(asks, targetDifference, comparator)).toEqual(
      expected
    );
  });
});
