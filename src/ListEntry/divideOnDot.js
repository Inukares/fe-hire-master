export const divideOnDot = (string) => {
  const parts = /(\d+\.)(\d+)/.exec(string);
  const [significantDigits, insignificantDigits] = [parts[1], parts[2]];
  return [significantDigits, insignificantDigits];
};
