import axios from "axios";
import React from "react";
import CapacityChart from "./CapacityChart";
import CapacityPieChart from "./PieChart";

class Home extends React.Component{

    state = {
        data:[]
    }

    componentDidMount(){
        axios.get('http://localhost:8080/capacity/projects')
        .then(resp => {
            const data = resp.data
            this.setState({data})
            console.log('Data retrieved from /projects: ' + resp.data.id)
        })
    }


    render(){
        return(<div>
            <div id="projects">
                <h2>Projetos</h2>
                <table border="1" align="center">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(projeto =><RowCreator key={projeto.id} item={projeto}/>)}
                </tbody>
                </table>
            </div>
            <div id="charts">
                <table width="100%" border="1">
                    <thead>
                        <tr>
                            <td><h1>Capacity Charts</h1></td>
                            <td width="30%"><h1>News</h1></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p align="center"><CapacityChart requested="1200" provided="1100" /></p></td>
                            <td rowSpan="2"> teste </td>
                        </tr>
                        <tr>
                            <td><p align="center"><CapacityPieChart data="0" /></p></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
)
    }
}

class RowCreator extends React.Component{
    render(){
        var project = this.props.item
        return(
            <tr>
                <td>{project.id}</td>
                <td>{project.name}</td>
            </tr>
        ); 
    }
}

export default Home;