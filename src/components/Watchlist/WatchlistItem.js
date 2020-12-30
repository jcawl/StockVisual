import React from "react";
import "./Watchlist.scss"

export default class WatchListItem extends React.Component {
    render() {
        return (
            <div className="watchlist__item">
                <div>
                    <h4>Ticker</h4>
                    <h5>Name</h5>
                </div>
                <div>Chart</div>
            </div>
        );
    }
}