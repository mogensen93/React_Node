import React, {Component} from 'react';
import {FaBeer} from 'react-icons/fa';

export default class Theme extends Component {

       state = {
        colorWheel:undefined
        };
    
    render() {
        
        return(
            <div>
            <input type="color" 
                onChange={event => this.setState({ 
                colorWheel: event.target.value
                })}>
            </input> 
            <button onClick={() => this.props.onColorChange(this.state.colorWheel)}>Submit Theme color</button>

            <h1>Lets have a <p style={{color: this.state.colorWheel}}><FaBeer /></p></h1>
            
           
            </div>
        );
    }
}
