import React, { Component } from 'react';

export default class BusWheel extends Component {
    render(){
        const {name} = this.props.WheelNumber;

        return (
            <div>
            <h1>{name}</h1>


        </div>


        )
    }

}