import React from "react";
import WatchListItem from "./WatchlistItem"
import "./Watchlist.scss"

export default class WatchList extends React.Component {
    render() {
        return (
            <div className="watchlist">
                <div className="watchlist__head">
                    <h3>Watchlist</h3>
                    <button className="button is-small">edit</button>
                </div>
                <div className="watchlist__body">
                    <WatchListItem />
                    <WatchListItem />
                    <WatchListItem />
                </div>
            </div>
        );
    }
}