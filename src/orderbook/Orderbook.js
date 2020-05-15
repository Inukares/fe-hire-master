import { mapDataToListEntry } from '../Entry/mapDataToListEntry';
import React, { useState } from 'react';
import { closestDifferenceIndex } from './closestDifference';
import { computeFairPrice } from './computeFairPrice';
import { ASKS, BIDS } from '../constants';

export const Orderbook = ({ asks, bids }) => {
  const [activeAsks, setActiveAsks] = useState();
  const [activeBids, setActiveBids] = useState();
  const fairPrice = computeFairPrice({ asks, bids });

  const getActive = (side) => (indexHovered) => {
    let target = 0;
    const asksComparator = asks[asks.length - 1].price;
    const bidsComparator = bids[0].price;

    if (indexHovered < 0) {
      setActiveAsks(null);
      setActiveBids(null);
    } else if (side === ASKS) {
      setActiveAsks(indexHovered);
      target = Math.abs(asks[asks.length - 1].price - asks[indexHovered].price);
      setActiveBids(closestDifferenceIndex(bids, target, bidsComparator));
    } else {
      setActiveBids(indexHovered);
      target = Math.abs(bids[0].price - bids[indexHovered].price);
      setActiveAsks(closestDifferenceIndex(asks, target, asksComparator));
    }
  };

  const asksEntryList = mapDataToListEntry({
    data: asks,
    side: ASKS,
    onMouseOver: getActive(ASKS),
    activeIndex: activeAsks,
  });

  const asksList = (
    <div className={'orders-list'} id={'asks-list'}>
      <div className={'feed'}>
        <ul className={'feed-list asks'}>
          <div>{asksEntryList}</div>
        </ul>
      </div>
    </div>
  );

  const bidsEntryList = mapDataToListEntry({
    data: bids,
    side: BIDS,
    onMouseOver: getActive(BIDS),
    activeIndex: activeBids,
  });

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
          <span>{fairPrice}</span>
        </div>
        {bidsList}
      </div>
    </div>
  );

  return orderbook;
};
