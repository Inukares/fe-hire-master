import { format } from '../format';

describe('format', () => {
  it('should add zeroes', () => {
    const data = [{price: '100', amount: 50, cumulativeAmount: 50}]
    const expected = [{price: '100.0', amount: "50.000", cumulativeAmount: '50.000'}]
    expect(format(data)).toEqual(expected)
  })

  it('should format prices to decimal precision of 1, amount to 3 and cumulative amount to 3', () => {
    const data = [{price: '100.0000', amount: 50.0000, cumulativeAmount: 50.00014}]
    const expected = [{price: '100.0', amount: "50.000", cumulativeAmount: '50.000'}]
    expect(format(data)).toEqual(expected)
  })

  it('should format prices to correct decimal precision and round numbers', () => {
    const data = [{price: '100.05', amount: 50.0005, cumulativeAmount: 50.0005}]
    const expected = [{price: '100.1', amount: "50.001", cumulativeAmount: '50.001'}]
    expect(format(data)).toEqual(expected)
  })
})