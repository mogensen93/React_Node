import React, {Component} from 'react';
import "./ButtonWithProps";

export default class ButtonWithProps extends Component {
    render(){
        const { buttonText, customStyle, onButtonClicked } = this.props;

        return(
            <button className="button-with-props"
                style = {customStyle} 
                onClick ={() => onButtonClicked("Custom Text")}   
             >  
                {buttonText ? buttonText : "Click"}
            </button>
        );
    }
}