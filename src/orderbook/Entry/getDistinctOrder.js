// if number's order is different, then it's treated as distinct
export const getDistinctOrder = (str, comparator) => {
  if (str.length !== comparator.length) {
    return { same: '', distinct: str };
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== comparator[i]) {
      return { same: str.substr(0, i), distinct: str.substr(i) };
    }
  }

  return { same: str, distinct: '' };
};
