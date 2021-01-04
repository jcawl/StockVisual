import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

export default class SocialMediaChart extends React.Component{

    state = {
        data: 
            [
                {
                  "taste": "Twitter",
                  "AAPL": 119,
                  "ROKU": 28,
                  "TSLA": 92
                },
                {
                  "taste": "Reddit",
                  "AAPL": 96,
                  "ROKU": 47,
                  "TSLA": 31
                },
                {
                  "taste": "TradingView",
                  "AAPL": 80,
                  "ROKU": 91,
                  "TSLA": 41
                },
                {
                  "taste": "StockTwits",
                  "AAPL": 71,
                  "ROKU": 31,
                  "TSLA": 119
                },
                {
                  "taste": "Robinhood",
                  "AAPL": 88,
                  "ROKU": 107,
                  "TSLA": 93
                }
              ]
        
    }

    render () {
        return(
            <div style={{"height":"50vh"}}>
                <ResponsiveRadar
                    data={this.state.data}
                    keys={[ 'AAPL', 'ROKU', 'TSLA' ]}
                    indexBy="taste"
                    maxValue="auto"
                    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                    curve="linearClosed"
                    borderWidth={2}
                    borderColor={{ from: 'color' }}
                    gridLevels={5}
                    gridShape="circular"
                    gridLabelOffset={36}
                    enableDots={true}
                    dotSize={10}
                    dotColor={{ theme: 'background' }}
                    dotBorderWidth={2}
                    dotBorderColor={{ from: 'color' }}
                    enableDotLabel={true}
                    dotLabel="value"
                    dotLabelYOffset={-12}
                    colors={{ scheme: 'nivo' }}
                    fillOpacity={0.25}
                    blendMode="multiply"
                    animate={true}
                    motionConfig="wobbly"
                    isInteractive={true}
                    legends={[
                        {
                            anchor: 'top-left',
                            direction: 'column',
                            translateX: -50,
                            translateY: -40,
                            itemWidth: 80,
                            itemHeight: 20,
                            itemTextColor: '#999',
                            symbolSize: 12,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        )
    }
}