import React from 'react';
import { divideOnDot } from './divideOnDot';
import { ASKS } from '../constants';

export const Entry = ({
  price,
  amount,
  cumulativeAmount,
  index,
  forceEmphasis,
  compareTo,
  side,
  highlight,
  onMouseOver,
}) => {
  const [significantAmount, insignificantAmount] = divideOnDot(amount);
  const [
    significantCumulativeAmount,
    insignificantCumulativeAmount,
  ] = divideOnDot(cumulativeAmount);
  const humanReadablePrice = price > 99999999999 ? '<99999999999' : price;

  const renderPrice = forceEmphasis ? (
    <span
      className={`price ${
        side === ASKS ? 'color-short' : 'color-long'
      } cursor-pointer`}
    >
      {humanReadablePrice}
    </span>
  ) : (
    <span
      className={`price ${
        side === ASKS ? 'color-short' : 'color-long'
      } cursor-pointer`}
    >
      {humanReadablePrice}
    </span>
  );

  return (
    <div
      onMouseOver={() => onMouseOver(index)}
      onMouseLeave={() => onMouseOver(-1)}
      className={'order-list-entry'}
    >
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
