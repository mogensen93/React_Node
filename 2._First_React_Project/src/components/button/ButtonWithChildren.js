import React, {Component} from 'react';
import "./ButtonWithProps";


export default class ButtonWithChilderen extends Component {
    render() {
        const {childeren} = this.props;
        return(
           
            <button className ="button-with-props">{childeren ? childeren : "click"} </button>

        );
    }
}