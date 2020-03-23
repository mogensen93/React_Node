import React, {Component} from 'react';
import Loader from 'react-loader-spinner';
import './App.css'

export default class FiveDayForecast extends Component {

    state = {
        forecast: {},
        loading: true
    }
    
    async componentDidMount() {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.cityChosen}&appid=42d16ec9f2fd02159a1fae7382308eb6&units=metric`);
        const forecast = await res.json();
        this.setState({forecast, loading: false})
        console.log(this.state.forecast);
    }

    render() {
        const {forecast, loading } = this.state;
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
       
        return (
           <div> 
                { loading 
                    ? 
                    <div>
                        <h1 className = "alignCenter"> API' is loading</h1>
                        <Loader type="ThreeDots" height={100} width={100} className ="fullAlign"/>
                    </div>
                    : 
                    <div className="alignCenter"> 
                     
                     {
                            <div className = "forecastDiv">
                            {forecast.list.map((info, index) => {
                                  console.log(info.dt_txt.slice(10).slice(1,3))
                                if(info.dt_txt.slice(10).slice(1,3)  === "15")
                              
                                return (
                
                                        <div class="containDiv" key={"table-header" + index}>
                                            <div className="spaceBetween">
                                    
                                                <h2>{days[(new Date(info.dt*1000).getDay())]} </h2><br/>
                                                <img className ="icons" src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`} alt="Weather icon"></img>
                                                <p>Max Temp: {info.main.temp_max} Celcius<br/></p>
                                                <p>Min Temp: {info.main.temp_min} Celcius<br/></p>
                                                <p>Wind speed: {info.wind.speed} m/s</p>
                                                <p>Description: {info.weather[0].description}</p>

                                            </div>
                                      </div>
                                    ) 
                                
                                return ( <div> </div>)
                            })}

                        </div>
                    }
                    </div>
                }
                   
            </div>
        );
    }
}