import React, { Component } from 'react';
import picture1 from './picture1.jpg';
import './App.css';
import ProfilePage from './components/profile_page/ProfilePage';
import Bus from './components/bus/Bus';
import ButtonWithProps from './components/button/ButtonWithProps';
import CarPage from './components/car_page/Car';
import ButtonWithChilderen from './components/button/ButtonWithChildren';


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageToRender: undefined
    };
  }

  handleNavButtonClicked = (navpage) => {
    this.setState({ navpage });
    console.log( navpage );
  };

  handlebButtonClicked = (text) => {
    console.log(text);
  }

  render() {
    
    const {pageToRender} = this.state;
 
  return (

    
    <div className="App">
  
      <div onClick={() => this.handleNavButtonClicked("Div")} >
      

      </div>
      <ButtonWithProps buttonText ="bus" onButtonClicked={() => this.setState({pageToRender:<Bus/>})}/>
      <ButtonWithProps buttonText ="profile" onButtonClicked={() =>this.setState({pageToRender:<ProfilePage/>})}/>
      <ButtonWithProps buttonText ="car" onButtonClicked={() =>this.setState({pageToRender:<CarPage/>})}/>
  
      
    {/* Den her sørger for at vælge en side at render*/}
      {pageToRender}
  
      
      <h1 className="headline">TEST</h1>
      <p className="paragrapf">This is a test</p>
      <img className="picture1"src={picture1} alt="something"></img>
      <ButtonWithChilderen></ButtonWithChilderen>
    </div>
   
  );

  }
}

export default App;
