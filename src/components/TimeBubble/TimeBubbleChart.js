import React from "react";
import { ResponsiveHeatMap } from '@nivo/heatmap'

export default class TimeBubbleChart extends React.Component{

    state = {
        ticks: [],
        Percent: []
    }

    componentDidMount() {
        var today = Math.round((new Date()).getTime() / 1000);
        var oneMonthAgo = today - 604800;
        fetch('https://finnhub.io/api/v1/stock/candle?symbol=TSLA&resolution=60&from='+oneMonthAgo+'&to='+today+'&token=bvhs6ef48v6okueau8n0')
        .then(res => res.json())
        .then((data) => {
          let nine = {"time":"9:00 AM","vol":0,"count":0};
          let ten = {"time":"10:00 AM","vol":0,"count":0};
          let eleven = {"time":"11:00 AM","vol":0,"count":0};
          let twelve = {"time":"12:00 PM","vol":0,"count":0};
          let one = {"time":"1:00 PM","vol":0,"count":0};
          let two = {"time":"2:00 PM","vol":0,"count":0};
          let three = {"time":"3:00 PM","vol":0,"count":0};
          let four = {"time":"4:00 PM","vol":0,"count":0};

          let change = {"vol.9:00 AM":0,"vol.10:00 AM":0,"vol.11:00 AM":0,"vol.12:00 PM":0,"vol.1:00 PM":0,"vol.2:00 PM":0,"vol.3:00 PM":0,"vol.4:00 PM":0}

          for ( let i in data.c){

              let date = new Date(data.t[i] * 1000);
              let time = date.toLocaleTimeString();
              console.log(data.v[i]);
              let percent = (data.c[i]-data.o[i])/data.c[i];

              switch (time){
                case "9:00:00 AM":
                  nine['vol'] += data.v[i]
                  nine['count'] += 1
                  change['vol.9:00 AM'] += percent;
                  break;
                case "10:00:00 AM":
                  ten['vol'] += data.v[i];
                  ten['count'] += 1
                  change['vol.10:00 AM'] += percent;
                  break;
                case "11:00:00 AM":
                  eleven['vol'] += data.v[i];
                  eleven['count'] += 1
                  change['vol.11:00 AM'] += percent;
                  break;
                case "12:00:00 PM":
                  twelve['vol'] += data.v[i];
                  twelve['count'] += 1
                  change['vol.12:00 PM'] += percent;
                  break;
                case "1:00:00 PM":
                  one['vol'] += data.v[i];
                  one['count'] += 1
                  change['vol.1:00 PM'] += percent;
                  break;
                case "2:00:00 PM":
                  two['vol'] += data.v[i];
                  two['count'] += 1
                  change['vol.2:00 PM'] += percent;
                  break;
                case "3:00:00 PM":
                  three['vol'] += data.v[i];
                  three['count'] += 1
                  change['vol.3:00 PM'] += percent;
                  break;
                case "4:00:00 PM":
                  four['vol'] += data.v[i];
                  four['count'] += 1
                  change['vol.4:00 PM'] += percent;
                  break;
                default:
                  break;
              }
          }
          nine['vol'] = (nine['vol']/nine['count']/1000000).toFixed(2);
          ten['vol'] = (ten['vol']/ten['count']/1000000).toFixed(2);
          eleven['vol'] = (eleven['vol']/eleven['count']/1000000).toFixed(2);
          twelve['vol'] = (twelve['vol']/twelve['count']/1000000).toFixed(2);
          one['vol'] =(one['vol']/one['count']/1000000).toFixed(2);
          two['vol'] = (two['vol']/two['count']/1000000).toFixed(2);
          three['vol'] = (three['vol']/three['count']/1000000).toFixed(2);
          four['vol'] = (four['vol']/four['count']/1000000).toFixed(2);

          let d = [nine,ten,eleven,twelve,one,two,three,four];

          this.setState({
            ticks : d,
            percent: change
        })

        })
        .catch(console.log);
      }

    render (){
        const VolumeMap = () => (
            <ResponsiveHeatMap
                data={this.state.ticks}
                keys={[
                    'vol'
                ]}
                width="300"
                indexBy="time"
                margin={{ top: 100, right: 60, bottom: 60, left: 100 }}
                cellShape="circle" padding={0} sizeVariation={1}
                enableGridX={true}
                enableGridY={true}
                axisTop={{ orient: 'top', tickSize: 20, tickPadding: 5, tickRotation: -90, legend: 'Performace by Hour', legendOffset: -80 }}
                axisRight={null}
                axisBottom={null}
                axisLeft={{
                    orient: 'left',
                    tickSize: 0,
                    tickPadding: 10,
                    tickRotation: 25,
                    legendPosition: 'middle',
                    legendOffset: -80
                }}
                tooltip={({id, value}) => {
                    let change = (this.state.percent[id]*100).toFixed(3);
                    return (
                    <div style={{"fontSize":"0.8em"}}>
                        <div>
                        Change: {change}%
                        </div>
                        Vol: {value}M
                    </div>
                  )}}
                cellOpacity={1}
                cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
                labelTextColor={{ from: 'color', modifiers: [ [ 'brighter', 1.8 ] ] }}
                defs={[
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(0, 0, 0, 0.1)',
                        rotation: -45,
                        lineWidth: 4,
                        spacing: 10,
                    }
                ]}
                
                fill={[ { id: 'lines' } ]}
                animate={true}
                motionConfig="wobbly"
                motionStiffness={80}
                motionDamping={9}
                hoverTarget="cell"
                cellHoverOthersOpacity={0.2}
            />
        )
        return(
            <div style={{"height":"500px", "width": "20rem", "color":"gray", "padding":"1rem"}}>
              Volume Heat Map
                <VolumeMap />
            </div>
        )
    }
}