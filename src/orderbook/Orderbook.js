import { ListEntry } from '../ListEntry/ListEntry';
import React, { useState } from 'react';
import { closestDifferenceIndex } from './closestDifference';

export const Orderbook = ({ asks, bids }) => {
  const ASKS = 'ASKS';
  const BIDS = 'BIDS';
  const [activeAsks, setActiveAsks] = useState();
  const [activeBids, setActiveBids] = useState();

  const getActive = (side) => (indexHovered) => {
    let target = 0;
    const asksComparator = asks[asks.length - 1].price;
    const bidsComparator = bids[0].price;

    if (side === ASKS) {
      setActiveAsks(indexHovered);
      target = Math.abs(asks[asks.length - 1].price - asks[indexHovered].price);
      setActiveBids(closestDifferenceIndex(bids, target, bidsComparator));
    } else {
      setActiveBids(indexHovered);
      target = Math.abs(bids[0].price - bids[indexHovered].price);
      setActiveAsks(closestDifferenceIndex(asks, target, asksComparator));
    }
  };

  const mapDataToList = (data, side) =>
    data.map(({ price, amount, cumulativeAmount }, index) => {
      return (
        <ListEntry
          price={price}
          amount={amount}
          cumulativeAmount={cumulativeAmount}
          index={index}
          key={`${index}:${price}`}
          compareTo
          side={side}
          forceEmphasis={index === 0 || index === data.length - 1}
          onMouseOver={side === ASKS ? getActive(ASKS) : getActive(BIDS)}
          highlight={
            side === ASKS ? index === activeAsks : index === activeBids
          }
        />
      );
    });

  const asksEntryList = mapDataToList(asks, ASKS);

  const asksList = (
    <div className={'orders-list'} id={'asks-list'}>
      <div className={'feed'}>
        <ul className={'feed-list asks'}>
          <div>{asksEntryList}</div>
        </ul>
      </div>
    </div>
  );

  const bidsEntryList = mapDataToList(bids, BIDS);

  const bidsList = (
    <div className={'orders-list'} id={'bids-list'}>
      <div className={'feed'}>
        <ul className={'feed-list bids'}>
          <div>{bidsEntryList}</div>
        </ul>
      </div>
    </div>
  );

  const orderbook = (
    <div className={'orders-container'}>
      <div className={'orderbook'}>
        {asksList}
        <div id={'price-ticker'}>
          <span>8580.2</span>
        </div>
        {bidsList}
      </div>
    </div>
  );

  return orderbook;
};
