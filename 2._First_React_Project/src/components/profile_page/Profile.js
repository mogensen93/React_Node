import React, { Component } from 'react';

export default class Profile extends Component {
    render(){
    

        const {name, hobby} = this.props.profileInfo;

        return(
            <div>
                <h1>A Profile</h1>
                <p> Name: {name}</p>
                <p>Good at: {hobby}</p>
            </div>

        );
    }
}