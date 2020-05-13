import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import { useMessage } from './hooks/useMessage/useMessage';
import { Orderbook } from './orderbook/Orderbook';

const App = () => {
  const data = useMessage();
  console.log(data);
  return (
    <div className="page-container">
      <div className={'sidebar_col'}>
        <div className={'sidebar__col__cells'}>
          <div className={'sidebar__col__cellFixedHeight'}>
            {data && <Orderbook {...data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
