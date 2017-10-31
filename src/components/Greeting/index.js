import React, {Component} from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props);
    }

    createGreetingElement(isLoggedIn) {
        var greetingElement = false;
        if (isLoggedIn) {
            greetingElement = <h1>Welcome Back!</h1>;   
        } else {
            greetingElement = <h1>Please sign up!</h1>;  
        }
        return greetingElement;
    }

    render() {
        var isLoggedIn = this.props.isLoggedIn;
        return (
            this.createGreetingElement(isLoggedIn)
        )
    }
}

export default Greeting;