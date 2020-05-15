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
}) => {
  const [significantAmount, insignificantAmount] = divideOnDot(amount);
  const [
    significantCumulativeAmount,
    insignificantCumulativeAmount,
  ] = divideOnDot(cumulativeAmount);
  const humanReadablePrice = (price) =>
    price > 99999999999 ? '<99999999999' : price;
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
