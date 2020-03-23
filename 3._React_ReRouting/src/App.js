import React, {Component} from 'react';
import './App.css';

import AboutPage from './Components/Pages/Page1';
import ProfilePage from './Components/Pages/Page2';
import IndexPage from './Components/Pages/Page3';
import Theme from './Components/Pages/Theme';
import Form from './Components/Pages/Form'
import Cities from './Components/Pages/Cities'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { IoMdSad } from 'react-icons/io';
import { AiTwotoneTrophy } from 'react-icons/ai';

class App extends Component {
   
state =  {
  color: undefined,
  firstName: undefined, 
  lastName: undefined,
  welcomeMessage: <h1>Welcome stranger <IoMdSad /></h1>
}

handleColorChange = (color) => {
  this.setState({color})
  console.log(this.state.color)
}

isNamed = (firstName, lastName) => {
  console.log(localStorage.getItem('welcomeMessage'));
  if (firstName && lastName) {
    const message = `Hello ${firstName} ${lastName}`;
    this.setState({
      welcomeMessage: <h1>{message}<AiTwotoneTrophy /></h1>
    });
    localStorage.setItem('welcomeMessage', message);
  }
}

componentDidMount() {
  const welcomeMessage = <h1>{localStorage.getItem('welcomeMessage')}<AiTwotoneTrophy /></h1>

  if (welcomeMessage) {
    // this.setState({
    //   welcomeMessage
    // });
    console.log(welcomeMessage);
  }
}


  render(){

    const {
      welcomeMessage
    } = this.state;
  return (
    <Router>
    <div className="App" style={{backgroundColor: this.state.color}}>


      <nav>
          <ul>
            <ol>
              <Link to="/">Home</Link>
            </ol>
            <ol>
              <Link to="/about">About</Link>
            </ol>
            <ol>
              <Link to="/users">Users</Link>
            </ol>
            <ol>
              <Link to="/theme">Theme</Link>
            </ol>
            <ol>
              <Link to="/form">Form</Link>
            </ol>
            <ol>
              <Link to="/cities">Cities</Link>
            </ol>
          </ul>
      </nav>

      <Switch>
        <Route exact path="/about"
          component = {props => <AboutPage {...props} />} >
        </Route>

        <Route  path="/users"
          component = {props => <ProfilePage {...props} />}>
        </Route>  

        <Route exact path="/"
          component = {props => <IndexPage {...props} />}>
            <h1>Index</h1>
            {welcomeMessage}
            <p style={{ color: "gold", fontSize: "124px" }}><AiTwotoneTrophy /></p>
        </Route>  

        <Route exact path="/theme"
          component = {props => <Theme onColorChange={this.handleColorChange} {...props} />}>
        </Route>  

        <Route exact path="/form"
          component = {props => <Form onNameChange = {this.isNamed} {...props} />}>
        </Route>  

        <Route exact path="/cities"
          component = {props => <Cities {...props} />}>
        </Route>  

      </Switch>

    </div>
    </Router>
  );
}
}
export default App;
