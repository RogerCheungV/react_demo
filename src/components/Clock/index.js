import React, {Component} from 'react';

import './Clock.css';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className="wrapper">
                <h3>{this.props.title}</h3>
                <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
            </div>
        )
    }
}