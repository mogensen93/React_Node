import React, { Component } from 'react';
import picture1 from './picture1.jpg';
import './App.css';
import ProfilePage from './components/profile_page/ProfilePage';
import Bus from './components/bus/Bus'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navpage: 'bus'
    };
  }

  onNavButtonClicked = (navpage) => {
    this.setState({ navpage });
    console.log( navpage );
  };

  render() {
    
    const {navpage} = this.state;
    console.log("this is the state:", navpage);
    
let pageToShow = <h1>Hej</h1>;
    if(navpage === 'bus'){
      pageToShow = <Bus />

    } else {
      pageToShow = <ProfilePage />
    }
  return (

    
    <div className="App">

      <div onClick={() => this.onNavButtonClicked("Div")} >
      <h1>DIV' DIV' DIV'</h1>

      </div>

      <button onClick={() => this.onNavButtonClicked("bus")}>Bus Page</button>
      <button onClick={() => this.onNavButtonClicked("profile")}>Profile Page</button>
      <button onClick={() => this.onNavButtonClicked("text")}> asd</button>
      {pageToShow}

      
      <h1 className="headline">TEST</h1>
      <p className="paragrapf">This is a test</p>
      <img className="picture1"src={picture1} alt="something"></img>
   
    </div>
  );
  }
}

export default App;
