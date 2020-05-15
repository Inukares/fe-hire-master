import { getDistinctDigits } from '../getDistinctDigits';

describe('getDistinctDigits', () => {
  it('returns only same digits for same number', () => {
    expect(getDistinctDigits('5000.5', '5000.5')).toEqual({
      same: ['5000.5'],
      disitnct: [],
    });
  });

  it('returns last digit when its the only');
});
