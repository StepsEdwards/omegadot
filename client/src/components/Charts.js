import React from 'react';
import RecordTransactions from './Transactions/RecTrans' 
import Basic from './BasicAttachment';
import { Card, CardImg, CardText,
  CardTitle, CardSubtitle, Button,CardColumns,Container,Row,Col } from 'reactstrap';
import {PieChart, Pie, Legend, Label, Tooltip} from 'recharts';
import {ChartsJr} from './ChartsJr';

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{name}
    </text>
  );
};


class Charts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
      inventory: null,
      totalAssets: null,
      netincome: null,
      currentLiabilities: null,
      currentAssets: null,
      turnoverAssetData: null,
      turnoverColor: '',
      assetData: null,
      assetColor: '',
      currentRatioData: null,
      currentRatio: [],
      currentRatioColor: '',
      quickRatioData: null,
      quickRatio: null,
      quickRatioColor: '',
      loggedIn: false
    };
  }

  async getCurrentAssets(){
    await fetch('/transactions/assetsbalance')
            .then(res => res.json())
            .then(async transactions => await  this.setState({ totalAssets: transactions}, () => {
                console.log('Accounts fetched...', transactions);
            })
        )
}

async getTotalAssets(){
  await fetch('/transactions/totalassetsbalance')
          .then(res => res.json())
          .then(async transactions => await  this.setState({ currentAssets: transactions}, () => {
              console.log('Accounts fetched...', transactions);
          })
      )
}

async getInventory(){
  await fetch('/transactions/inventorybalance')
          .then(res => res.json())
          .then(async transactions => await this.setState({ inventory: transactions}, () => {
              console.log('Accounts fetched...', transactions);
              let quickRatioData = ((this.state.currentAssets-this.state.inventory)/this.state.currentLiabilities);
              let quickRatio = [{name: 'Current Assets - Inventory', value: (this.state.currentAssets-this.state.inventory)},
              {name: 'Current Liabilities', value: this.state.currentLiabilities}];
              let num = Math.round(quickRatioData * 100) / 100;
              this.setState({ quickRatioData: num, quickRatio });
          })
      )
}

async getCurrentLiabilities(){
  await fetch('/transactions/liabilitiesbalance')
          .then(res => res.json())
          .then(async transactions => await this.setState({ currentLiabilities: transactions}, () => {
              console.log('Accounts fetched...', transactions);
              let currentRatioData = (this.state.currentAssets/this.state.currentLiabilities);
              let currentRatio = [{name: 'Current Assets', value: this.state.currentAssets},
              {name: 'Current Liabilities', value: this.state.currentLiabilities}];
              debugger;
              let num = Math.round(currentRatioData * 100) / 100
              this.setState({ currentRatioData: num, currentRatio });
              this.setColors();
          })
      )
}

setColors(){
  // Current Ratio
  let color = '';
  if((this.state.currentAssets/this.state.currentLiabilities) < .2){
    color = '#ff0000';
  } else if(((this.state.currentAssets/this.state.currentLiabilities) > .5)) {
    color = '#006400';
  } else {
    color = '#CCCC00';
  }
  debugger;

  this.setState({ currentRatioColor: color });

  if(((this.state.currentAssets-this.state.inventory)/this.state.currentLiabilities) < .2){
    color = '#ff0000';
  } else if(((this.state.currentAssets-this.state.inventory)/this.state.currentLiabilities) > .4) {
    color = '#006400';
  } else {
    color = '#CCCC00';
  }
  debugger;

  this.setState({ quickRatioColor: color });
}

sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async getData() {
  this.getCurrentAssets();
    this.getCurrentLiabilities();
    this.getInventory();
    this.getTotalAssets();
    // Get data.
}

  componentWillMount() {
    this.getData();
    // Calculate Asset Turnover Stuff
    var salesValue = 500;
    var assetsValue = 100;
    var newTunoverAssetData = [{name: 'Sales', value: salesValue},
    {name: 'Assets', value: assetsValue}]; 
    var newTurnoverColor;
    if((salesValue/assetsValue) > .7){
      newTurnoverColor = '#417B3E';
    } else if(((salesValue/assetsValue) < .3)) {
      newTurnoverColor = '#ff0000';
    } else {
      newTurnoverColor = '#00ff00';
    }

    this.setState({
      turnoverAssetData: newTunoverAssetData,
      turnoverColor: newTurnoverColor
    });
  }
  
  render() {
    debugger;
    if (this.state.quickRatioData == null || this.state.quickRatio == null) {
      console.log('This happens 5th - when waiting for data.');
    return (<h2>Loading...</h2>);
    }
    else if (this.state.quickRatioData) {
      console.log(this.state.quickRatioData, this.state.quickRatio);
    return (
      <div>
        <h1>Dashboard</h1>
        <Container>
        <Row>
          <Col>
        <Card>
          <CardTitle>Turnover Assets</CardTitle>
          <PieChart width={500} height={400}>
            <Pie startAngle={180} endAngle={0} data={this.state.turnoverAssetData} cx={260} cy={260} outerRadius={200} fill={this.state.turnoverColor} labelLine={false} label={renderCustomizedLabel}/>
            <Tooltip />
          </PieChart>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardTitle>Assets</CardTitle>
          <PieChart width={500} height={400}>
            <Pie startAngle={180} endAngle={0} data={this.state.turnoverAssetData} cx={260} cy={260} outerRadius={200} fill='#999900' labelLine={false} label={renderCustomizedLabel}/>
            <Tooltip />
          </PieChart>
        </Card>
        </Col>
        </Row>
        <Row>
          <Col>
        <Card>
          <CardTitle>Current Ratio</CardTitle>
          <CardTitle>{this.state.currentRatioData}</CardTitle>
          <PieChart width={500} height={400}>
            <Pie startAngle={180} endAngle={0} data={this.state.currentRatio} cx={260} cy={260} outerRadius={200} fill={this.state.currentRatioColor} labelLine={false} label={renderCustomizedLabel}/>
            <Tooltip />
          </PieChart>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardTitle>Quick Ratio</CardTitle>
          <CardTitle>{this.state.quickRatioData}</CardTitle>
          <PieChart width={500} height={400}>
            <Pie startAngle={180} endAngle={0} data={this.state.quickRatio} cx={260} cy={260} outerRadius={200} fill={this.state.quickRatioColor} labelLine={false} label={renderCustomizedLabel}/>
            <Tooltip />
          </PieChart>
        </Card>
        </Col>
        </Row>
        </Container>
       </div>
    )
  }
  }
}

export default Charts;
