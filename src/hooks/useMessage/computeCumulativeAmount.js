export const calculateCumulativeAmount = (data, reverse) => {
  let sum = 0;
  let newData = [];

  if (reverse) {
    for (let i = 0; i < data.length; i++) {
      sum += data[i].amount;
      newData = [...newData, { cumulativeAmount: sum, ...data[i] }];
    }
    return newData;
  }

  for (let i = data.length - 1; i >= 0; i--) {
    sum += data[i].amount;
    newData = [{ ...data[i], cumulativeAmount: sum }, ...newData];
  }

  return newData;
};
