import { divideOnDot } from '../divideOnDot';

describe('divideOnDot', () => {
  it('returns 0 with dot as first item, and other digits as second', () => {
    expect(divideOnDot('0.1525')).toEqual(['0.', '1525']);
  });

  it('returns all digits and dot as first item and 0 as second', () => {
    expect(divideOnDot('987654321.0')).toEqual(['987654321.', '0']);
  });
});
