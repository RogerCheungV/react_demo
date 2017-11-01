import React, { Component } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default class TemperInput extends Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }

    change(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>请输入{scaleNames[scale]}温度</legend>
                <input type="text"
                       value={this.props.value}
                       onChange={this.change}
                />
            </fieldset>
        )
    }
}