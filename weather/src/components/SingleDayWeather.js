import React, {Component} from 'react';
import './App.css';
import Loader from 'react-loader-spinner';
import FiveDayForecast from './FiveDayForecast';


export default class SingleDayWeather extends Component {

    state = {
        citystats: {},
        loading: true,
    }


    async componentDidMount() {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=42d16ec9f2fd02159a1fae7382308eb6&units=metric`);
        const citystats = await res.json();
        this.setState({citystats, loading: false})
    }   


    render() {
        const {citystats, loading} = this.state;
        return(
            <div> 
                { loading 
                    ? 
                    <div>
                        <h1 className = "alignCenter"> API' is loading</h1>
                        <Loader type="ThreeDots" height={100} width={100} className ="fullAlign"/>
                    </div>
                    : 
                    <div className="alignCenter"> 

                        <h1>{citystats.name}</h1>
                        <img className ="icons" src={`http://openweathermap.org/img/w/${citystats.weather[0].icon}.png`} alt="Weather icon"></img>

                        <p>
                        Temprature: {citystats.main.temp} Celcius<br/>
                        Feels like: {citystats.main.feels_like} Celcius<br/>
                        Wind speed: {citystats.wind.speed} m/s<br/>
                        Type of weather: {citystats.weather[0].main}<br/>
                        Description: {citystats.weather[0].description}<br/>
                        </p>

                        <FiveDayForecast cityChosen={this.props.city}/>

                    </div>
                }
                   
            </div>
        );
    }
}