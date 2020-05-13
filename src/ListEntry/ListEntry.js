import React from 'react';

const divideOnDot = (string) => {
  const parts = /(\d+\.)(\d+)/.exec(string);
  const [significantDigits, insignificantDigits] = [parts[1], parts[2]];
  return [significantDigits, insignificantDigits];
};

export const ListEntry = ({
  price,
  amount,
  cumulativeAmount,
  index,
  forceEmphasis,
  compareTo,
  highlight,
  onMouseOver,
}) => {
  const [significantAmount, insignificantAmount] = divideOnDot(amount);
  const [
    significantCumulativeAmount,
    insignificantCumulativeAmount,
  ] = divideOnDot(cumulativeAmount);
  const humanReadablePrice = price > 99999999999 ? '<99999999999' : price;
  // add better rendering later
  const renderPrice = forceEmphasis ? (
    <span className="price color-short cursor-pointer">
      {humanReadablePrice}
    </span>
  ) : (
    <span className="price color-short cursor-pointer">
      {humanReadablePrice}
    </span>
  );

  return (
    <div onMouseOver={() => onMouseOver(index)} className={'order-list-entry'}>
      <li className={`${highlight ? 'highlight' : ''}`}>
        {renderPrice}
        <div className={['amount-component', 'cursor-pointer'].join(' ')}>
          <span>{significantAmount}</span>
          <span className="weak">{insignificantAmount}</span>
        </div>
        <div className={['amount-component', 'cursor-pointer'].join(' ')}>
          <span>{significantCumulativeAmount}</span>
          <span className="weak">{insignificantCumulativeAmount}</span>
        </div>
      </li>
    </div>
  );
};
