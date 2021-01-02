import React from "react";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const App = () => (
    <TradingViewWidget
      symbol="NASDAQ:AAPL"
      hide_side_toolbar={false}
      theme={Themes.DARK}
      locale="us"
      autosize
    />
  );

export default class Comp1 extends React.Component{
    render (){
        return(
            <div style={{ "height":"40vh"}}>
                Candle Chart
                {App()}
            </div>
        )
    }
}
