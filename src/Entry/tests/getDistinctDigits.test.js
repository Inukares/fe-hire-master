import { getDistinctOrder } from '../getDistinctOrder';

describe('getDistinctOrder', () => {
  it('returns all digits as same for identical number', () => {
    expect(getDistinctOrder('5000.5', '5000.5')).toEqual({
      same: '5000.5',
      distinct: '',
    });
  });

  it('returns all digits as distinct, because first digit is different for two numbers', () => {
    expect(getDistinctOrder('1234.5', '5678.5')).toEqual({
      same: '',
      distinct: '1234.5',
    });
  });

  it('returns last 2 digits with dot as distinct', () => {
    expect(getDistinctOrder('1234.5', '1235.5')).toEqual({
      same: '123',
      distinct: '4.5',
    });
    expect(getDistinctOrder('9472.9', '9473.1')).toEqual({
      same: '947',
      distinct: '2.9',
    });
  });

  it('returns just last digit as distinct', () => {
    expect(getDistinctOrder('1234.5', '1234.7')).toEqual({
      same: '1234.',
      distinct: '5',
    });
  });
});
