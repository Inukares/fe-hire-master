import { ListEntry } from '../ListEntry/ListEntry';
import React, { useState } from 'react';
// Match highlighted value according to following rule:
// take hovered item (can be from either bids or asks) and compute: Math.abs(hovered - closestToFairPriceValue)
// and then try to find value closest to abovementioned difference, but in second list, so for example
// if I compared vale 4200 to 4100 from asks, I have to find difference closest to 100 from bids.

const closestDifference = (data, targetDiffence, comparator) => {
  const closest = data.reduce(
    (accumulator, current, currentIndex) => {
      const { price } = current;
      const { value, index } = accumulator;

      const currentToTargetDifference = Math.abs(
        Math.abs(comparator - price) - targetDiffence
      );
      // console.log('\n current iteration value ', price);
      // console.log('\n currenttotargetdifference::', currentToTargetDifference);

      return value > currentToTargetDifference
        ? {
            value: currentToTargetDifference,
            index: currentIndex,
          }
        : accumulator;
    },
    { value: Infinity, index: -1 }
  );
  console.log('\n\nso the closest value is:', closest);
  return closest.index;
};

export const Orderbook = ({ asks, bids }) => {
  const ASKS = 'ASKS';
  const BIDS = 'BIDS';
  const [activeAsks, setActiveAsks] = useState();
  const [activeBids, setActiveBids] = useState();

  const getActive = (category) => (indexHovered) => {
    let target = 0;
    let comparator = 0;
    if (category === ASKS) {
      setActiveAsks(indexHovered);
      comparator = asks[asks.length - 1].price;
      target = Math.abs(comparator - asks[indexHovered].price);
      setActiveBids(closestDifference(bids, target, comparator));
    } else {
      setActiveBids(indexHovered);
      comparator = bids[0].price;
      target = Math.abs(comparator - bids[indexHovered].price);
      setActiveAsks(closestDifference(asks, target, comparator));
    }
  };

  // console.log('\n\ncheck if highlight', category=== ASKS ? index === activeAsks : index === activeBids)

  const mapDataToList = (data, category) =>
    data.map(({ price, amount, cumulativeAmount }, index) => {
      console.log(
        '\n\ncheck if highlight',
        category === ASKS ? index === activeAsks : index === activeBids
      );
      return (
        <ListEntry
          price={price}
          amount={amount}
          cumulativeAmount={cumulativeAmount}
          index={index}
          key={`${index}:${price}`}
          compareTo
          forceEmphasis={index === 0 || index === data.length - 1}
          onMouseOver={category === ASKS ? getActive(ASKS) : getActive(BIDS)}
          highlight={
            category === ASKS ? index === activeAsks : index === activeBids
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
