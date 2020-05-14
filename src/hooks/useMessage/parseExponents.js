export const parseExponents = (n) => {
  const [lead, decimal, pow] = n.toString().split(/e|\./);
  let parsedExponent = '';
  try {
    parsedExponent =
      +pow <= 0
        ? '0.' + '0'.repeat(Math.abs(pow) - 1) + lead + decimal
        : lead +
          (+pow >= decimal.length
            ? decimal + '0'.repeat(+pow - decimal.length)
            : decimal.slice(0, +pow) + '.' + decimal.slice(+pow));
  } catch (error) {
    console.error(
      'The number is too big to display even as a string, if you manage to sell this you are certainly rich!'
    );
    parsedExponent = n;
  }
  return parsedExponent;
};
