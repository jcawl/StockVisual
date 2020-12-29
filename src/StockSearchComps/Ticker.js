import React from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";

export default class Ticker extends React.Component{
    render () {
        return(
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(800px,1fr))"}}>
                <Comp1 />
                <Comp2 />
                <Comp3 />
                <Comp4 />
            </div>
        )
    }
}