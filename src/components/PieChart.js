import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

//var data =  this.props.data 

 const data = [
  { name: 'ETF', value: 100 },
  { name: 'CARMIGNAC', value: 80 },
  { name: 'CUPS', value: 60 },
  { name: 'SANTANDER', value: 40 }
]; 

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, data}) => {

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class CapacityPieChart extends PureComponent {
  render() {
    return (<div>
           <ResponsiveContainer width={'50%'} height={300}>
                <PieChart width={400} height={400}>
                    <Legend layout="vertical" align="right" verticalAlign="middle" iconType="plainline" iconSize="1" />
                    <Pie 
                        data={data} 
                        dataKey="value" 
                        cx="50%" 
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        fill="#8884d8">
                        {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}>teste</Cell>))}
                    </Pie>
                    <Tooltip animationEasing="ease-in-out" />
                </PieChart>
            </ResponsiveContainer>
    </div>
    );
  }
}
