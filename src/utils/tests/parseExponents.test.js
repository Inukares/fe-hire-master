import { mockParsedAsks } from './dataMock';
import { parseExponents } from '../parseExponents';
const test = require('ava')


test('parseExponents', t => {
  const parsedMock = mockAsks.map(([price, _]) => [parseExponents(price), _])

  t.deepEqual(parsedMock, mockParsedAsks)
})