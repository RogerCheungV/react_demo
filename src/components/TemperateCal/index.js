import React, { Component } from 'react';

import TemperateInput from './temperateInput';

export default class TemperateCal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 'c',
            value: ''
        };
        this.ceisuisChange = this.ceisuisChange.bind(this);
        this.fahrenheitChange = this.fahrenheitChange.bind(this);
    }

    ceisuisChange(value) {
        this.setState({
            scale: 'c',
            value
        })
    }

    fahrenheitChange(value) {
        this.setState({
            scale: 'f',
            value
        })
    }

    toCeisius(f) {
        return (f - 32) * 5 / 9;
    }

    toFahrenheit(c) {
        return (c * 9 / 5) + 32;
    }

    tryConvert(value, convert) {
        var input = parseFloat(value);
        if (Number.isNaN(input)) {
            return '';
        }
        var output = convert(input);
        var rounded = Math.round(output * 1000) / 1000;
        return String(rounded);
    }

    boilingVerdict(value) {
        return value >= 100 ? <p>水沸腾了！！！</p> : <p>水还没开！！！</p>
    }

    render() {
        const { scale, value } = this.state;
        const ceisius = scale === 'f' ? this.tryConvert(value, this.toCeisius) : value;
        const fahrenheit = scale === 'c' ? this.tryConvert(value, this.toFahrenheit) : value;
        return (
            <div>
                <TemperateInput
                    scale='c'
                    value={ceisius}
                    onChange={this.ceisuisChange}
                />
                <TemperateInput
                    scale='f'
                    value={fahrenheit}
                    onChange={this.fahrenheitChange}
                />
                {this.boilingVerdict(ceisius)}
            </div>
        )
    }
}