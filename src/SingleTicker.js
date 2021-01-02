import React from "react";
import CandleChart from "./components/CandleChart/CandleChart"
import Watchlist from "./components/Watchlist/WatchlistItem"
import TimeBubbleChart from "./components/TimeBubble/TimeBubbleChart"

export default class Ticker extends React.Component{
    render () {
        return(
            <div style={{"display":"grid", "gridTemplateColumns":"9fr 1fr", "gap":"1rem"}}>
                <div style={{"gridRow":"0"}}>
                    <Watchlist />
                    <Watchlist />
                    <Watchlist />
                    <Watchlist />
                    <Watchlist />
                </div>
                <div style={{"gridRow":"1"}}>
                    <CandleChart />
                    <TimeBubbleChart />
                </div>
            </div>
        )
    }
}