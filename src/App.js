import React from 'react';
import Map from './HomePages/Map';
import Crypto from './HomePages/Crypto';
import Stocks from './HomePages/Stocks';
import Nav from './Nav';
import Ticker from './StockSearchComps/Ticker';
import {Route} from 'react-router-dom';

export default class App extends React.Component{
    render () {
        return(
            <div>
                <Nav />
                <div>
                    <Route exact path="/" component={Map} />
                    <Route exact path="/stocks" component={Stocks} />
                    <Route exact path="/crypto" component={Crypto} />
                    <Route exact path="/tickers" component={Ticker} />
                </div>
            </div>
        )
    }
}

