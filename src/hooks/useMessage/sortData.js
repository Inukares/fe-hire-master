/**
 * rounds numbers to given precision
 * @param number
 * @param precision
 * @returns {string} rounded string
 */
export const round = (number, precision) =>
  number > Number.MAX_SAFE_INTEGER ||
  number * Math.pow(10, precision) > Number.MAX_SAFE_INTEGER
    ? number
    : parseFloat(
        Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision)
      ).toFixed(precision);

export const sortData = (data) => {
  const precision = 3;
  const scale = 1000;
  return data.sort(
    (a, b) => scale * round(b[0], precision) - scale * round(a[0], precision)
  );
};
