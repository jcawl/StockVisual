import React from "react"
import './Articles.css'

const optionsCursorTrueWithMargin = {
    followCursor:true,
    shiftX:20,
    shiftY:0
}

export default class Articles extends React.Component{

    state = {
        news: [],
    }

    componentDidMount() {
        fetch('https://finnhub.io/api/v1/news?category=forex&minId=0&token=bvhs6ef48v6okueau8n0')
        .then(res => res.json())
        .then((data) => {
          this.setState({ news: data })
          this.setState({news: this.state.news.splice(1,10)})
          console.log(this.state.news)
        })
        .catch(console.log);
      }

    render () {
        return(
            <div style={{"display":"flex"}}>
                {this.state.news.map(d => (
                <a key={d.id} href={d.url} target={"_blank"}>{d.headline}</a>))}
            </div>
        )
    }
}