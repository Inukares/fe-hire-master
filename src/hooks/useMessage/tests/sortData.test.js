import { sortData } from '../sortData';

describe('sortData', () => {
  it('leaves descending-sorted array as-is', () => {
    const sortedArray = [5.02, 4.152, 3.98, 2.0, 1.5];
    expect(sortData(sortedArray)).toEqual(sortedArray);
  });

  it('sorts array in descending order with numbers stored as strings', () => {
    const array = ['3996.5', '4003.1', '4000.2', '8000.5', '5000.0'];
    const expected = ['8000.5', '5000.0', '4003.1', '4000.2', '3996.5'];
    expect(sortData(array)).toEqual(expected);
  });

  it('sorts array with numbers in scientific notation', () => {
    const array = ['3992.4', '4000.5', '3998.6', '3995.231e.301'];
    const expected = ['3995.231e+301', '4000.5', '3998.6', '3992.4'];
    expect(sortData(array)).toEqual(expected);
  });
});

// import { mockParsedAsks } from '../../hooks/useMessage/tests/dataMock';
// import { parseExponents } from '../../hooks/useMessage/parseExponents';
// const test = require('ava');
//
// test('parseExponents', (t) => {
//   const parsedMock = mockAsks.map(([price, _]) => [parseExponents(price), _]);
//
//   t.deepEqual(parsedMock, mockParsedAsks);
// });
