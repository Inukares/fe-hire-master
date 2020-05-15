## Hello Cryptowatch team!

Thank you very much for a chance to interview with you. I'd like to leave few notes on the submission, as there are multiple
ways of fulfilling requirements.

#### Digits Emphasis
On Cryptowatch page some digits are dimmed, the others aren't. 
Just by looking at colours you can see the magnitude of changes happening on the market, which
is extremely cool, hence I decided to add that, too.

#### Highlighting
When hovering over entry you can see it's counterpart being highlighted also. This could be done in various ways.
I took approach which I find useful for traders, which means that by hovering over bid I compute:

`diff = Math.abs(max(bid) - highlighted(bid))`

Then I try to find on the other side difference that is closest to above one.

What it really means is that by just hovering over items trader can tell what is the current trend for data.

Other approach which could be applied is just highlighting items with same index for both sides.
This approach however doesn't seem to be useful when it comes to trading, hence I stuck with the option above.
 
#### Fair price
Fair price can mean different things. 

- It could be `(mean(asks) + mean(bids))/2`
- It could be taking `(min(asks)+max(bids))/2`
- It could be taking `((median(asks) + median(bids))/2`

Knowing I could have huge number that doesn't represent whole dataset very vell option with mean
felt as poor one. The second option takes into account only one number and doesn't care about data set, which means
it can quickly change. With that in mind it feels like imperfect representation for fair price.
Median however takes whole dataset into account, and that's what I ended up implementing.

#### Testing
I want to mention that existing testing is far from being ideal and in real-world scenario should be improved.
Initially I thought you'd like to avoid adding *any* libraries, hence I omitted it on purpose. After a mail to you though
it became clear that only framework-like libraries are off-limits, hence only some parts of the code are tested.

#### Numbers
In the code I scale the floats when performing comparison to ensure correctness of computations and also round them
for more accurate presentation (as you lose some digits when ensuring certain precision).

In requirements for orderbook you mentioned that all numbers should be floats. Orderbook worker posts
number that can be so huge that JS believes it equals to `Infinity`, which is troublesome.
It's also worth noting that in real world scenario it doesn't seem very likely for the bid to be so huge, as it's very unlikely
that anybody's that rich :). As I knew that there will be only one so huge number on one side (asks/bids) I didn't deal in the code
with comparing numbers that are bigger than 2^53-1.

#### Optimisations and improvements
- This submission lacks type-checking of any kind. There are several options to choose from to solve this, but for
this size of the application and requirement to not put any additional libraries I decided to not focus on this topic.

- Deployment is in dev mode currently, should be modified in real world scenario.

- `closestDifference.js` iterates over all items in the list, but in fact it's not necessary as the data is sorted in descending
order it's possible to use modified version of binary search to solve the problem. It's still just 15 entries to check though, so it's
not a real issue.