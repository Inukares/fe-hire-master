export const parseExponents = (n) => {
  // prevent parsing numbers that are too big to even store as a string and cause huge memory issues
  if (+n === Infinity) {
    return n;
  }
  const [lead, decimal, pow] = n.toString().split(/e|\./);
  let parsedExponent = '';

  parsedExponent =
    +pow <= 0
      ? '0.' + '0'.repeat(Math.abs(pow) - 1) + lead + decimal
      : lead +
        (+pow >= decimal.length
          ? decimal + '0'.repeat(+pow - decimal.length)
          : decimal.slice(0, +pow) + '.' + decimal.slice(+pow));

  // below is not a good practice to be fair, operating on integer after it surpasses it's precision capabilities
  // is not a good practice, but as I know for a fact that I can't get any other value on same side (asks/bids)
  // it's not going to do any harm anyways. That being said, in real life scenario a decent library should be used/developed
  // to ensure correct arithmetics
  if (parsedExponent > Number.MAX_SAFE_INTEGER) {
    return n;
  }
  return parsedExponent;
};
