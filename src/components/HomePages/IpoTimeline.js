import React from "react"
import { Chrono } from "react-chrono";
  

export default class IpoTimeline extends React.Component{
    state ={
        items : [
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },
            {
                title: "May 6",
                cardTitle: "Ticker",
                cardSubtitle: "Description/Price/Shares"
            },

        ]
    }

    render(){

        return(
            <div style={{"width":"20vw","color":"white"}}>
                IPO Calender
                <Chrono 
                    theme={{primary: "#8c98c2", secondary: "#06101f", cardBgColor: "#06101f", cardForeColor: "white" }}
                    items={this.state.items}
                    mode="VERTICAL"
                    />
            </div>
        )
    }
}