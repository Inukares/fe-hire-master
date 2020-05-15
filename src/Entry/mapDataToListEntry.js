import React from 'react';
import { Entry } from './Entry';
import { ASKS } from '../constants';

export const mapDataToListEntry = ({ data, side, onMouseOver, activeIndex }) =>
  data.map(({ price, amount, cumulativeAmount }, index) => {
    return (
      <Entry
        price={price}
        amount={amount}
        cumulativeAmount={cumulativeAmount}
        index={index}
        key={`${index}:${price}`}
        compareTo
        side={side}
        forceEmphasis={index === 0 || index === data.length - 1}
        onMouseOver={onMouseOver}
        highlight={
          side === ASKS ? index === activeIndex : index === activeIndex
        }
      />
    );
  });
