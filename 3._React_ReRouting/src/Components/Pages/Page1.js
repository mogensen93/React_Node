import React, {Component} from 'react';

export default class AboutPage extends Component {
    handleRedirect = () => {
        
        this.props.history.push("/");
    }

    render(){
        return(
            <div>
                <h1>ABOUT PAGE</h1>
                <button onClick={() => {this.handleRedirect()}}>Redirect to Viva las Homes</button>
            </div>
        );
    }
}