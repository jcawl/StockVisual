import React from "react"
import Chart from "react-google-charts"

export default class Financials extends React.Component{

    state = {
        contacts: [],
        USD: 0,
        JPY: 0,
        EUR: 0,
        GBP: 0,
        AUD: 0,
        CAD: 0,
        CNY: 0,
        CHF: 0,
        KRW: 0,
        BRL: 0,
        RUB: 0,
        ZAR: 0,
        NGN: 0,
        EGP: 0,
        DZD: 0,
        MAD: 0,
        PHP: 0,
        INR: 0
      }


    componentDidMount() {
        fetch('https://finnhub.io/api/v1/forex/rates?base=USD&token=bvhs6ef48v6okueau8n0')
        .then(res => res.json())
        .then((data) => {
          console.log(data.quote);
          this.setState({ contacts: data })
          this.setState({ USD: data.quote.USD})
          this.setState({ JPY: data.quote.JPY})
          this.setState({ EUR: data.quote.EUR})
          this.setState({ GBP: data.quote.GBP})
          this.setState({ AUD: data.quote.AUD})
          this.setState({ CAD: data.quote.CAD})
          this.setState({ CNY: data.quote.CNY})
          this.setState({ CHF: data.quote.CHF})
          this.setState({ KRW: data.quote.KRW})
          this.setState({ BRL: data.quote.BRL})
          this.setState({ RUB: data.quote.RUB})
          this.setState({ ZAR: data.quote.ZAR})
          this.setState({ NGN: data.quote.NGN})
          this.setState({ EGP: data.quote.EGP})
          this.setState({ DZD: data.quote.DZD})
          this.setState({ MAD: data.quote.MAD})
          this.setState({ PHP: data.quote.PHP})
          this.setState({ INR: data.quote.INR})
        })
        .catch(console.log);
      }

    render () {
        return(
            <div style={{"width":"100%", "height":"90%", "margineLeft":"auto"}}>
                <Chart
                  width={'80vw'}
                  height={'80vh'}
                  chartType="GeoChart"
                  data={[
                    ['Country', '1 USD'],
                    ['United States', this.state.USD],
                    ['Japan', this.state.JPY],
                    ['Germany', this.state.EUR],
                    ['United Kingdom', this.state.GBP],
                    ['Australia', this.state.AUD],
                    ['Canada', this.state.CAD],
                    ['China', this.state.CNY],
                    ['Switzerland', this.state.CHF],
                    ['South Korea', this.state.KRW],
                    ['Brazil', this.state.BRL],
                    ['Russia', this.state.RUB],
                    ['South Africa', this.state.ZAR],
                    ['Nigeria', this.state.NGN],
                    ['Egypt', this.state.EGP],
                    ['Algeria', this.state.DZD],
                    ['Morocco', this.state.MAD],
                    ['Philippines', this.state.PHP],
                    ['India', this.state.INR]
                  ]}
                  options={{
                    colorAxis: { colors: ['#e6ab8c', 'white', '#b8e68c'] },
                  }}
                  // Note: you will need to get a mapsApiKey for your project.
                  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                  mapsApiKey="AIzaSyAkYBa9bM17NKiDU2e5MU-hqCitP7HD0hM"
                  rootProps={{ 'data-testid': '1' }}
                />
            </div>
        )
    }
}