export const getDistinctDigits = (numberString, comparator) => {
  let distinct = [];
  let same = [];
  for (let i = numberString.length; i >= 0; i--) {
    if (numberString[i] !== comparator[i]) {
      distinct = [numberString[i], ...distinct];
    } else {
      same = [numberString[i], ...same];
    }
  }

  return { same, distinct };
};
