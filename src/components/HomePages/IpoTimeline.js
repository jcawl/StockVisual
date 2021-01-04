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
            <div style={{"width":"60vw","height":"40vh","color":"white"}}>
                IPO Calender
                <Chrono 
                    theme={{primary: "#ff9966", secondary: "white", cardBgColor: "white", cardForeColor: "#ff9966" }}
                    items={this.state.items}
                    mode="HORIZONTAL"
                    />
            </div>
        )
    }
}