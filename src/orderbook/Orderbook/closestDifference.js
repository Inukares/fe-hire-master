// Match highlighted value according to following rule:
// take hovered item (can be from either bids or asks) and compute: Math.abs(hovered - closestToFairPriceValue)
// then try to find value closest to above mentioned difference, but in second list, so for example
// if I compared vale 4200 to 4100 from asks, I have to find difference closest to 100 from bids.

export const closestDifferenceIndex = (data, targetDifference, comparator) => {
  const closest = data.reduce(
    (accumulator, current, currentIndex) => {
      const { price } = current;
      const { value } = accumulator;

      const currentToTargetDifference = Math.abs(
        Math.abs(comparator - price) - targetDifference
      );

      return value >= currentToTargetDifference
        ? {
            value: currentToTargetDifference,
            index: currentIndex,
          }
        : accumulator;
    },
    { value: Infinity, index: -1 }
  );
  return closest.index;
};
