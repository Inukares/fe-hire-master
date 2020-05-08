import React from 'react';
import ReactDOM from 'react-dom';
import OrderbookWorker from 'worker-loader!./orderbook/worker';
import './styles.scss';

// I have to search for previous number

// {price: x, amount: y, cumulativeAmount: sum(range(0, i).volume }
// how to structure data to prevent rerendering

const noExponents = (n) => {
  const [lead,decimal,pow] = n.toString().split(/e|\./);
  return +pow <= 0
    ? "0." + "0".repeat(Math.abs(pow)-1) + lead + decimal
    : lead + ( +pow >= decimal.length ? (decimal + "0".repeat(+pow-decimal.length)) : (decimal.slice(0,+pow)+"."+decimal.slice(+pow)))
}


// parses numbers in exponential notation
const parseExponents = (number) => {
  if(typeof number === "string") {
    return noExponents(number)
  }
  return number
}

// safely round numbers to specified precision
const round = (x,n) =>
  (parseFloat(Math.round(x * Math.pow(10, n)) / Math.pow(10, n)).toFixed(n));

// sort desc with merge sort. As there's very small chance that the data is sorted quicksort could be faster on average
// although I'll stay with the default for simplicity
const sortData = (data) => {
  const precision = 3;
  const scale = 1000;
  return data.sort((a, b) => (scale * round(b[0], precision)) - (scale * round(a[0], precision)))
}

const mapToObject = data => ({
  price: data[0],
  amount: data[1]
})

const calculateCumulativeAmount = (data) => {
  let sum = 0;
  let newData = [];

  for(let i = data.length-1; i>=0;i--) {
    sum += data[i].amount;
    newData = [{...data[i], cumulativeAmount: sum}, ...newData]
  }

  return newData;
}

// formats sorted and transformed data to a way that components accept it
const formatData = (data) => {} //

const normalize = (data)  => {
  const parsedData = data.map(([price, _]) => [noExponents(price), _])
  const sortedMappedData = sortData(parsedData).map(mapToObject)
  const withCumulativeAmount = calculateCumulativeAmount(sortedMappedData)

  console.log(withCumulativeAmount)
  // console.log('sorted Data from sort data::', sortedData)

  // // const sortedData = sortData(parsedData)
  //
  //
  // return sortedData
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }


  componentDidMount() {
    if (window.Worker) {
      this.ob = new OrderbookWorker();
      this.ob.onmessage = e => {
        console.log('data from worker/n/n', e)
        normalize(e.data.asks)
        /*
          Worker returns orderbook data as:
          {
            e: {
              data: {
                asks: [[<price>, <volume>], ...],
                bids: [[<price>, <volume>], ...]
              }
            }
          }
        */
      };
    }
  }


  render() {
    return (
      <div className="page-container">
        <span>
          <h2>Good luck!</h2>
          <p>- The Cryptowatch Team</p>
        </span>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
