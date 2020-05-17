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
