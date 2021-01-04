import React from 'react';
import Stocks from './components/HomePages/Stocks';
import Nav from './components/Nav/Nav';
import Ticker from './SingleTicker';
import {Route} from 'react-router-dom';
import IpoTimeline from './components/HomePages/IpoTimeline'
import './App.scss'

export default class App extends React.Component{
    render () {
        return(
            <div className="main-container">
                <div className="nav-container">
                    <Nav />
                </div>
                <div className="home-container">
                    <Route exact path="/" component={Stocks} />
                    <Route exact path="/tickers" component={Ticker} />
                </div>
            </div>
        )
    }
}

