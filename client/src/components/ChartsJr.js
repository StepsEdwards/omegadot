import React from 'react';
import RecordTransactions from './Transactions/RecTrans' 
import Basic from './BasicAttachment';
import { Card, CardImg, CardText,
  CardTitle, CardSubtitle, Button,CardColumns,Container,Row,Col } from 'reactstrap';
import {PieChart, Pie, Legend, Label, Tooltip} from 'recharts';

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


class ChartsJr extends React.Component {
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
      quickRatio: [],
      quickRatioColor: '',
      loggedIn: false
    };
  }

  componentWillMount() {
   debugger;
   this.props;
  }
  
  render() {

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

export default ChartsJr;
