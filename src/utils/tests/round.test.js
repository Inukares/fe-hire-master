import { round } from '../round';

describe('round', () => {
  it('should ceil to a decimal precision of 1', () => {
    expect(round('1234.05', 1)).toEqual('1234.1');
  });
  it('should floor to a decimal precision of 3', () => {
    expect(round('1234.0004', 3)).toEqual('1234.000');
  });
});
