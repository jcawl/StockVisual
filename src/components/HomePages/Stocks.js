import React from 'react';
import { ResponsiveTreeMap } from '@nivo/treemap'
import IpoTimeline from './IpoTimeline.js'
import Divider from '../Divider/Divider'
import NewsCard from '../Cards/NewsCard'
import SocialMediaChart from '../TrendingCharts/SocialMediaChart'

export default class Example extends React.Component {
  state = {
    data: {
      "name": "nivo",
      "color": "hsl(150, 70%, 50%)",
      "children": [
        {
          "name": "viz",
          "color": "hsl(333, 70%, 50%)",
          "children": [
            {
              "name": "stack",
              "color": "hsl(94, 70%, 50%)",
              "children": [
                {
                  "name": "cchart",
                  "color": "hsl(312, 70%, 50%)",
                  "loc": 4331
                },
                {
                  "name": "xAxis",
                  "color": "hsl(253, 70%, 50%)",
                  "loc": 97439
                },
                {
                  "name": "yAxis",
                  "color": "hsl(224, 70%, 50%)",
                  "loc": 138946
                },
                {
                  "name": "layers",
                  "color": "hsl(254, 70%, 50%)",
                  "loc": 182901
                }
              ]
            },
            {
              "name": "ppie",
              "color": "hsl(140, 70%, 50%)",
              "children": [
                {
                  "name": "chart",
                  "color": "hsl(78, 70%, 50%)",
                  "children": [
                    {
                      "name": "pie",
                      "color": "hsl(45, 70%, 50%)",
                      "children": [
                        {
                          "name": "outline",
                          "color": "hsl(97, 70%, 50%)",
                          "loc": 33535
                        },
                        {
                          "name": "slices",
                          "color": "hsl(140, 70%, 50%)",
                          "loc": 88991
                        },
                        {
                          "name": "bbox",
                          "color": "hsl(311, 70%, 50%)",
                          "loc": 172407
                        }
                      ]
                    },
                    {
                      "name": "donut",
                      "color": "hsl(15, 70%, 50%)",
                      "loc": 75105
                    },
                    {
                      "name": "gauge",
                      "color": "hsl(189, 70%, 50%)",
                      "loc": 186205
                    }
                  ]
                },
                {
                  "name": "legends",
                  "color": "hsl(135, 70%, 50%)",
                  "loc": 164010
                }
              ]
            }
          ]
        }]
  }
  }

  render() {
    const MyResponsiveTreeMap = () => (
      <ResponsiveTreeMap
          data={this.state.data}
          identity="name"
          value="loc"
          valueFormat=".02s"
          labelSkipSize={12}
          labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.2 ] ] }}
          parentLabelTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
          borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.1 ] ] }}
      />
  )
    
    return (
      <div style={{"display":"flex", "flexDirection":"column"}}>
        <Divider title={"Heatmap"}/>
        <div style={{"height":"70vh", "width":"60vw","marginLeft":"auto", "marginRight":"auto","color":"white"}}>
          Market overview / we should make this customizable
          <MyResponsiveTreeMap />
        </div>
        <Divider title={"News"}/>
        <div style={{"width":"60vw","height":"30vh","marginLeft":"auto", "marginRight":"auto"}}>
          <IpoTimeline />
        </div>
        <div style={{"display":"grid", "gridTemplateColumns": "repeat(auto-fit, minmax(250px,1fr))","height":"30vh"}}> 
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
          <Divider title={"Trending"} />
          <SocialMediaChart />
      </div>
    );
  }
}
