import React, {Component} from 'react';


export default class Form extends Component {
    state = {
        firstName: "",
        lastName: ""
    }

    handleNameChange = (firstName, lastName)  => {
        console.log(firstName, lastName);
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.id]: event.target.value})
        console.log(this.state.firstName);
        console.log(this.state.lastName);
    }

    render() {
        return(
            <div>
                <h1>Form</h1>
                <input placeholder ="First Name" onChange = {event => {this.setState ({ firstName: event.target.value }) }}></input>
                <input placeholder ="Last Name" onChange = {event => {this.setState ({ lastName: event.target.value }) }}></input>
                <button type="submit" onClick={() => this.handleNameChange(this.state.firstName, this.state.lastName)}> Submit</button>
           
                <hr />
           
                <h1>Form</h1>
                <input id="firstName" placeholder ="First Name" onChange = {this.handleInputChange}></input>
                <input id="lastName" placeholder ="Last Name" onChange = {this.handleInputChange}></input>
                <button onClick = {() => {this.props.onNameChange(this.state.firstName, this.state.lastName); this.props.history.push("/")} }>Submit</button>
                
                <hr />

            </div>

        );
    }
}