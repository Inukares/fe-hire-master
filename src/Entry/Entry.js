import React from 'react';
import { divideOnDot } from './divideOnDot';
import { ASKS } from '../constants';
import { getDistinctOrder } from './getDistinctOrder';

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
  handleClickPrice,
}) => {
  const [significantAmount, insignificantAmount] = divideOnDot(amount);
  const [
    significantCumulativeAmount,
    insignificantCumulativeAmount,
  ] = divideOnDot(cumulativeAmount);
  const humanReadablePrice = (price) =>
    price > 9999999999 ? '<9999999999.0' : price;
  const { same, distinct } = getDistinctOrder(price, compareTo);

  const renderPrice = forceEmphasis ? (
    <span
      className={`price ${
        side === ASKS ? 'color-short' : 'color-long'
      } cursor-pointer`}
    >
      {humanReadablePrice(price)}
    </span>
  ) : (
    <span
      className={`price ${
        side === ASKS ? 'color-short' : 'color-long'
      } cursor-pointer`}
    >
      <span className={'opacity-55'}>{same}</span>
      {humanReadablePrice(distinct)}
    </span>
  );

  return (
    <div className={'order-list-entry'}>
      <li
        onMouseOver={() => onMouseOver(index)}
        onMouseLeave={() => onMouseOver(-1)}
        onClick={() => handleClickPrice(price)}
        className={`${highlight ? 'highlight' : ''}`}
      >
        {renderPrice}
        <div className={'amount-component cursor-pointer'}>
          <span>{significantAmount}</span>
          <span className="weak">{insignificantAmount}</span>
        </div>
        <div className={'amount-component cursor-pointer'}>
          <span>{significantCumulativeAmount}</span>
          <span className="weak">{insignificantCumulativeAmount}</span>
        </div>
      </li>
    </div>
  );
};
