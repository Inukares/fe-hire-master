import React from 'react';
import { Entry } from './Entry';
import { ASKS, BIDS } from '../../constants';

export const mapDataToListEntry = ({
  data,
  side,
  onMouseOver,
  activeIndex,
  handleClickPrice,
}) =>
  data.map(({ price, amount, cumulativeAmount }, index) => {
    let compareTo = '';
    const lastOrFirstIndex = index === 0 || index === data.length - 1;
    if (side === ASKS && !lastOrFirstIndex) {
      compareTo = data[index + 1].price;
    }
    if (side === BIDS && !lastOrFirstIndex) {
      compareTo = data[index - 1].price;
    }

    return (
      <Entry
        price={price}
        amount={amount}
        cumulativeAmount={cumulativeAmount}
        index={index}
        key={`${index}:${price}`}
        compareTo={compareTo}
        side={side}
        handleClickPrice={handleClickPrice}
        forceEmphasis={lastOrFirstIndex}
        onMouseOver={onMouseOver}
        highlight={
          side === ASKS ? index === activeIndex : index === activeIndex
        }
      />
    );
  });
