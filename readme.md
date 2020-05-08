## Cryptowatch Hiretest

Hi there stranger!

Thanks for your interest in working for us over at cryptowat.ch! We'd like the opportunity to see how you write code and solve problems similar to the ones we do, so we created this little challenge set.

The idea is for you to build one half of our "orderbook" (found on the trading view, eg. cryptowat.ch/markets/kraken/btc/usd) which consists of an orderbook of trades, and a depth chart visualizing buy/sell walls.

You may choose to build either the depth chart, or the orderbook, or both if you are so inclined! Doing both is far more than you need to do, so don't feel pressure to do that. The requirements for each respective feature, including a screenshot of the of our version, are in the folders contained in this directory.

Your data sources is `src/orderbook/worker.js` which is a very simple web worker that will pump out fake orderbook data every `700ms`. It's already imported and subscribed to in the root of the application (`src/index.js`). It outputs an event object as follows:

```
{
  data: {
    asks: [[<price>, <amount>], ...],
    bids: [[<price>, <amount>], ...]
  }
}
```

The orderbook recreates a real world problem that we encounter often, not all values of the orderbook will be `float` or `int` - some will be exponential notation, so you'll need some code to cover that case.

Don't worry about making the design responsive, just make sure it looks professinal on anything 13" or above.

If you have any questions you can email will@kraken.com or marcv@kraken.com. (maybe we setup a generic email for this?)

Once you are finished please deploy your code somewhere so we can interact with it in a browser and email will@kraken.com and marcv@kraken.com with a link to your source code hosted somewhere (github.com or your perferred method).

Thanks for your interest in us and we look forward to seeing your solution!

All the best,

The Cryptowatch Team