import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import { useMessage } from './hooks/useMessage/useMessage';
import { Orderbook } from './orderbook/Orderbook';

const App = () => {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const data = useMessage();
  return (
    <div className="page-container">
      <section className={'selected-price'}>
        {selectedPrice && <h1>{selectedPrice}</h1>}
      </section>
      <div>
        {data && <Orderbook data={data} handleClickPrice={setSelectedPrice} />}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
