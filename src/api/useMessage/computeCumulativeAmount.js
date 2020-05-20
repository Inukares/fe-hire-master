import { cumsum } from 'd3-array'

export const computeCumulativeAmount = (data, reverse) => {
  let cumSum = 0;
  if(reverse) {
    cumSum = cumsum(data, d => d.amount)
    return data.map((d, index) => ({...d, cumulativeAmount: cumSum[index] }))
  }
  const reversedData = data.slice().reverse();
  cumSum = cumsum(reversedData, d => d.amount)
  return data.map((d, index) => ({...d, cumulativeAmount: cumSum[data.length-1-index] }))
};
