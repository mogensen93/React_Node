import React, { Component } from 'react';
import BusWheel from './BusWheel'

export default class Bus extends Component {
    render() {
        const Wheel1 = {name:"The Wheel"};
        const Wheel2 = {name:"On the Bus"};
        const Wheel3 = {name:"Goes Around"};
        const Wheel4 = {name:"And Around"};

        const BusWheels = [Wheel1, Wheel2, Wheel3, Wheel4];
        return (
            <div>
            <h1>Bussen</h1>

            {BusWheels.map((wheel, index) => {
                return <BusWheel key={'Buswheel' + index} WheelNumber ={wheel}  />;
            })

            }
        </div>


        )
    }

}