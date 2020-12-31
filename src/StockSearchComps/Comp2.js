import React from "react";
import { ResponsiveHeatMap } from '@nivo/heatmap'

export default class Comp2 extends React.Component{

    state = {
        ticks: []
    }

    componentDidMount() {
        var today = Math.round((new Date()).getTime() / 1000);
        var oneMonthAgo = today - 604800;
        fetch('https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=60&from='+oneMonthAgo+'&to='+today+'&token=bvhs6ef48v6okueau8n0')
        .then(res => res.json())
        .then((data) => {
          let zero = {"time":"00:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let nine = {"time":"09:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let ten = {"time":"10:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let eleven = {"time":"11:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let twelve = {"time":"12:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let thirteen = {"time":"13:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let fourteen = {"time":"14:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let fifteen = {"time":"15:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let sixteen = {"time":"16:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let seventeen = {"time":"17:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let eighteen = {"time":"18:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let nineteen = {"time":"19:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let twenty = {"time":"20:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let twentyOne = {"time":"21:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let twentyTwo = {"time":"22:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};
          let twentyThree = {"time":"23:00","Mon":0,"MonColor": "hsl(233, 70%, 50%)","Tue":0,"TueColor": "hsl(233, 70%, 50%)","Wed":0,"WedColor": "hsl(233, 70%, 50%)","Thu":0,"ThuColor": "hsl(233, 70%, 50%)","Fri":0,"FriColor": "hsl(233, 70%, 50%)"};

          for ( let i in data.c){

              let date = new Date(data.t[i] * 1000);
              let day = date.toUTCString().substr(0,3);
              let time = date.toUTCString().substr(17,20);


              switch (time){
                case "00:00:00 GMT":
                  zero[day] = data.v[i]
                  break;
                case "09:00:00 GMT":
                  nine[day] = data.v[i]
                  break;
                case "10:00:00 GMT":
                  ten[day] = data.v[i]
                  break;
                case "11:00:00 GMT":
                  eleven[day] = data.v[i]
                  break;
                case "12:00:00 GMT":
                  twelve[day] = data.v[i]
                  break;
                case "13:00:00 GMT":
                  thirteen[day] = data.v[i]
                  break;
                case "14:00:00 GMT":
                  fourteen[day] = data.v[i]
                  break;
                case "15:00:00 GMT":
                  fifteen[day] = data.v[i]
                  break;
                case "16:00:00 GMT":
                  sixteen[day] = data.v[i]
                  break;
                case "17:00:00 GMT":
                  seventeen[day] = data.v[i]
                  break;
                case "18:00:00 GMT":
                  eighteen[day] = data.v[i]
                  break;
                case "19:00:00 GMT":
                  nineteen[day] = data.v[i]
                  break;
                case "20:00:00 GMT":
                  twenty[day] = data.v[i]
                  break;
                case "21:00:00 GMT":
                  twentyOne[day] = data.v[i]
                  break;
                case "22:00:00 GMT":
                  twentyTwo[day] = data.v[i]
                  break;
                case "23:00:00 GMT":
                  twentyThree[day] = data.v[i]
                  break;
                default:
                  break;
              }
          }
          console.log(twentyOne);

          let d = [zero,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty,twentyOne,twentyTwo,twentyThree];

          this.setState({
            ticks : d
        })
        })
        .catch(console.log);
      }

    render (){
        const MyResponsiveHeatMap = ({ data /* see data tab */ }) => (
            <ResponsiveHeatMap
                data={this.state.ticks}
                keys={[
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri'
                ]}
                indexBy="time"
                margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
                
                cellShape="circle" padding={0} sizeVariation={1}
                enableGridX={true}
                enableGridY={true}
                axisTop={{ orient: 'top', tickSize: 20, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: 36 }}
                axisRight={null}
                axisBottom={null}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 0,
                    tickRotation: 0,
                    legend: 'Time',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
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
                        spacing: 20
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
            <div style={{"background":"grey", "height":"500px"}}>
              Volume Heat Map
                <MyResponsiveHeatMap />
            </div>
        )
    }
}