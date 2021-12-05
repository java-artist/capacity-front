import React, { PureComponent } from 'react';
import { 
    ResponsiveContainer, 
    Legend, 
    BarChart, 
    XAxis, 
    YAxis, 
    CartesianGrid,
    Bar    
} from 'recharts';


export default class CapacityChart extends PureComponent{

    render(){

        var requested = this.props.requested 
        var provided = this.props.provided

        const data = [
            {
                name: 'Capacity', 
                requested: requested, 
                provided: provided
            },
          ];

        return(
            <div>
                <ResponsiveContainer width="50%" height={300}>
                    <BarChart 
                        width={600} 
                        height={300} 
                        data={data} 
                        layout="vertical"
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    >
                        <XAxis type="number"/>
                        <YAxis type="category" dataKey="name" />
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Legend />
                        <Bar dataKey="requested" fill="#8884d8" label={{ position: 'middle' }} opacity="70%" />
                        <Bar dataKey="provided" fill="#82ca9d" label={{ position: 'middle' }} opacity="70%" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
        
    }
}