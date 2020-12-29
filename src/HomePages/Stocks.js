import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';

const electronicTech = [
  { name: 'AAPL', value: 2323 },
  { name: 'TSM', value: 549 },
  { name: 'NVDA', value: 319 },
  { name: 'INTC', value: 192 },
];

const healthCare = [
    { name: 'CVS', value: 257 },
    { name: 'UNH', value: 240 },
    { name: 'MCK', value: 224 },
    { name: 'ABC', value: 182 },
  ];

const finance = [
    { name: 'V', value: 496 },
    { name: 'JPM', value: 382 },
    { name: 'MA', value: 343 },
    { name: 'BAC', value: 260 },
  ];

const transportation = [
    { name: 'UPS', value: 148 },
    { name: 'UNP', value: 138 },
    { name: 'CNI', value: 79 },
    { name: 'FDX', value: 70 },
]

const techServices = [
    { name: 'MSFT', value: 1700 },
    { name: 'GOOG', value: 1200 },
    { name: 'FB', value: 788 },
    { name: 'PYPL', value: 276 },
]

const consumerDurables = [
    { name: 'TSLA', value: 629 },
    { name: 'TM', value: 210 },
    { name: 'SNE', value: 119 },
    { name: 'ATVI', value: 70 },
]

const retail = [
    { name: 'AMZN', value: 1650 },
    { name: 'BABA', value: 600 },
    { name: 'WMT', value: 410 },
    { name: 'HD', value: 289 },
]

const communication = [
    { name: 'VZ', value: 244 },
    { name: 'T', value: 203 },
    { name: 'TMUS', value: 165 },
    { name: 'CHL', value: 116 },
]

const energy = [
    { name: 'XOM', value: 176 },
    { name: 'CVX', value: 163 },
    { name: 'TOT', value: 114 },
    { name: 'BP', value: 70 },
]

const energy2 = [
    { name: 'XOM', value: 176 },
    { name: 'CVX', value: 163 },
    { name: 'TOT', value: 114 },
    { name: 'BP', value: 70 },
]

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={0} textAnchor="middle" fill={fill}>{payload.name}</text>
      <text x={cx} y={cy} dy={20} textAnchor="middle" fill={fill}>{payload.value}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#999">
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  state = {
    activeElectronicTech: 0,
    activeHealth: 0,
    activeFinance: 0,
    activeTransportation: 0,
    activeTechServices: 0,
    activeConsumerDurables: 0,
    activeRetail: 0,
    activeCommunication: 0,
    activeEnergy: 0,
    activeEntergy2: 0
  };

  onElectronicTechEnter = (data, index) => {
    this.setState({
      activeElectronicTech: index,
    });
  };
  onHealthEnter = (data, index) => {
    this.setState({
      activeHealth: index,
    });
  };
  onFinanceEnter = (data, index) => {
    this.setState({
      activeFinance: index,
    });
  };
  onTransportationEnter = (data, index) => {
    this.setState({
      activeTransportation: index,
    });
  };
  onTechServicesEnter = (data, index) => {
    this.setState({
      activeTechServices: index,
    });
  };
  onConsumerDurablesEnter = (data, index) => {
    this.setState({
      activeConsumerDurables: index,
    });
  };
  onRetailEnter = (data, index) => {
    this.setState({
      activeRetail: index,
    });
  };
  onCommunicationEnter = (data, index) => {
    this.setState({
      activeCommunication: index,
    });
  };
  onEnergyEnter = (data, index) => {
    this.setState({
      activeEnergy: index,
    });
  };
  onEnergy2Enter = (data, index) => {
    this.setState({
      activeEnergy2: index,
    });
  };
  

  render() {
    return (
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(400px,1fr))"}}>
            <PieChart width={400} height={400}>
                <Pie
                activeIndex={this.state.activeElectronicTech}
                activeShape={renderActiveShape}
                data={electronicTech}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onElectronicTechEnter}
                />
            </PieChart>
            <PieChart width={400} height={400}>
                <Pie
                activeIndex={this.state.activeHealth}
                activeShape={renderActiveShape}
                data={healthCare}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onHealthEnter}
                />
            </PieChart>
            <PieChart width={400} height={400}>
                <Pie
                activeIndex={this.state.activeFinance}
                activeShape={renderActiveShape}
                data={finance}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onFinanceEnter}
                />
            </PieChart>
            <PieChart width={400} height={400}>
                <Pie
                activeIndex={this.state.activeTransportation}
                activeShape={renderActiveShape}
                data={transportation}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onTransportationEnter}
                />
            </PieChart>
            <PieChart width={400} height={400}>
                <Pie
                activeIndex={this.state.activeTechServices}
                activeShape={renderActiveShape}
                data={techServices}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onTechServicesEnter}
                />
            </PieChart>
            <PieChart width={400} height={400}>
                <Pie
                activeIndex={this.state.activeConsumerDurables}
                activeShape={renderActiveShape}
                data={consumerDurables}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onConsumerDurablesEnter}
                />
            </PieChart>
            <PieChart width={400} height={400}>
                <Pie
                activeIndex={this.state.activeRetail}
                activeShape={renderActiveShape}
                data={retail}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onRetailEnter}
                />
            </PieChart>
            <PieChart width={400} height={400}>
                <Pie
                activeIndex={this.state.activeCommunication}
                activeShape={renderActiveShape}
                data={communication}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onCommunicationEnter}
                />
            </PieChart>
            <PieChart width={400} height={400}>
                <Pie
                activeIndex={this.state.activeEnergy}
                activeShape={renderActiveShape}
                data={energy}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onEnergyEnter}
                />
            </PieChart>
            <PieChart width={400} height={400}>
                <Pie
                activeIndex={this.state.activeEnergy2}
                activeShape={renderActiveShape}
                data={energy2}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onEnergy2Enter}
                />
            </PieChart>
      </div>
    );
  }
}
