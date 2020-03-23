import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleDayWeather from './components/SingleDayWeather';
import Cat from './components/Cat';

class App extends Component {

  state = {
    cityName : "",
  }


  handleInputChange = (event) => {
    this.setState({ [event.target.id]: event.target.value})
  }

  render() {
    return (
      <Router>
        <div> 
        <Switch>

          <Route path="/openweathermap">
            <div className="alignCenter">
              <SingleDayWeather city={this.state.cityName}/>
              <button ><Link to="/" className="button">Try again</Link></button>
            </div>
          </Route>

          <Route path="/">
            <div className="alignCenter">
              <h1> Welcome to the Weather App</h1>
              <p> Its developed using the free version of <a href="https://openweathermap.org/">OpenWeather</a></p>
              <p> It gives the oppertunity to call weather data on a location</p>
              <p> Try E.g Copenhagen, Stockholm, London</p>

              <input id="cityName" placeholder ="Which City" onChange = {this.handleInputChange}></input>  
              <button><Link to="/openweathermap" className="button">Search</Link></button>

              <br/>
              <br/>
            
              <p>Also, Cat tax</p>
              <Cat />
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
    );
    }
  }
export default App;
