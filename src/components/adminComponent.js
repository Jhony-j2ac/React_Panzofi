 import React  from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';



//necesario para graficas
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class AdminComponent extends React.Component{
    
    
    state  = { 
        details: {
            "out": [],
            "consolidate": {
                "button1": {},
                "button2": {},
                "time": {},
            },
    
        },
    };

    user = null;
    navigate = null;

    
    componentDidMount(){

        
        const apiUrl = process.env.REACT_APP_API_URL;
        let data;
        this.user = localStorage.getItem("user");
        if(!this.user){
        }else{
            axios.get(`${apiUrl}/Panel`)
            .then(res => {
                data = res.data;
                this.setState({
                    details: data
                })
            })
            .catch(err => {});
        }
        
        
    }
    
    render(){

        const dynamicDataButton1 = Object.values(this.state.details['consolidate']['button1']);
        const dynamiccolumButton1 = Object.keys(this.state.details['consolidate']['button1']);

        const dynamicDataButton2 = Object.values(this.state.details['consolidate']['button2']);
        const dynamiccolumButton2 = Object.keys(this.state.details['consolidate']['button2']);

        const dynamicDataTime = Object.values(this.state.details['consolidate']['time']);
        const dynamiccolumTime = Object.keys(this.state.details['consolidate']['time']);

        

        const optionsButton1 = {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Presiones en boton 1',
            },
            xAxis: {
                categories: dynamiccolumButton1,
            },
            yAxis: {
                title: {
                text: 'Cantidad',
                },
            },
            series: [
                {
                name: 'Persona',
                data: dynamicDataButton1,
                },
            ],
        };

        const optionsButton2 = {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Presiones en boton 2',
            },
            xAxis: {
                categories: dynamiccolumButton2,
            },
            yAxis: {
                title: {
                text: 'Cantidad',
                },
            },
            series: [
                {
                name: 'Persona',
                data: dynamicDataButton2,
                },
            ],
        };

        const optionsTime = {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Tiempo',
            },
            xAxis: {
                categories: dynamiccolumTime,
            },
            yAxis: {
                title: {
                text: 'Tiempo',
                },
            },
            series: [
                {
                name: 'Persona',
                data: dynamicDataTime,
                },
            ],
        };

        return (
            
                <div className="container mt-4">
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Ultimo inicio</th>
                            <th>Tiempo</th>
                            <th>Boton1</th>
                            <th>Boton1</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                           this.state.details['out'].map((register, index)=>(
                            <tr key={index}> 
                                <td key={register.Usuario}>{register.Usuario}</td>
                                <td key={register.Fecha}>{register.Fecha}</td>
                                <td key={register.UltimaFecha}>{register.UltimaFecha}</td>
                                <td key={register.Boton1}>{register.Boton1}</td>
                                <td key={register.Boton2}>{register.Boton2}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                    </table>
                    
                    <div className="row">
                        <div className="col-md-4">
                            <div className="bg-info text-white p-3">
                                <HighchartsReact highcharts={Highcharts} options={optionsButton1} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-info text-white p-3">
                                <HighchartsReact highcharts={Highcharts} options={optionsButton2} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-info text-white p-3">
                                <HighchartsReact highcharts={Highcharts} options={optionsTime} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    export {AdminComponent};