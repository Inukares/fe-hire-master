import { parseExponents } from './parseExponents';
import { sortData } from './sortData';
import { calculateCumulativeAmount } from './calculateCumulativeAmount';
import { format } from './format';

export const mapToObject = (data) => ({
  price: data[0],
  amount: data[1],
});

export const normalize = (data, reverse = false) => {
  const parsedData = data.map(([price, _]) => [parseExponents(price), _]);
  const sortedMappedData = sortData(parsedData).map(mapToObject);
  const withCumulativeAmount = calculateCumulativeAmount(
    sortedMappedData,
    reverse
  );

  return format(withCumulativeAmount);
};
