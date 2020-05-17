import OrderbookWorker from 'worker-loader!./worker';
import React, { useEffect, useState } from 'react';
import { normalize } from './normalize';

export const useMessage = () => {
  const [data, setData] = useState();
  const [worker, setWorker] = useState();

  const handleSetData = ({ data }) => {
    const { asks: rawAsks, bids: rawBids } = data;
    const asks = normalize(rawAsks);
    const bids = normalize(rawBids, true);
    setData({ asks, bids });
  };

  useEffect(() => {
    const isWindowWorkerReady = window && window.Worker;
    if (isWindowWorkerReady && !worker) {
      setWorker(new OrderbookWorker());
    }
  }, [setWorker, window.Worker]);

  useEffect(() => {
    if (!worker) {
      return;
    }

    worker.addEventListener('message', handleSetData);

    return () => {
      worker.removeEventListener('message', handleSetData);
    };
  }, [handleSetData, window.Worker, worker]);

  return data;
};
