import React, { Component } from 'react';

import TemperInput from './TemperInput';

class TemperCal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            scale: 'c'
        };
        this.celsiusChange = this.celsiusChange.bind(this);
        this.fahrenheitChange = this.fahrenheitChange.bind(this);
    }

    celsiusChange(value) {
        this.setState({
            scale: 'c',
            value
        });
    }

    fahrenheitChange(value) {
        this.setState({
            scale: 'f',
            value
        });
    }

    boilingVerdict(value) {
        return value >= 100 ? <p>水沸腾了！</p> : <p>水还没开！</p>
    }

    toCelsius(f) {
        return (f - 32) * 5 / 9;
    }

    toFahrenheit(c) {
        return (c * 9 / 5) + 32;
    }

    tryConvert(value, convert) {
        const input = parseFloat(value);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return String(rounded);
    }

    render() {
        const { value, scale } = this.state;
        const celsius = scale === 'f' ? this.tryConvert(value, this.toCelsius) : value;
        const fahrenheit = scale === 'c' ? this.tryConvert(value, this.toFahrenheit) : value;

        return (
            <div>
                <TemperInput scale='f'
                    value={fahrenheit}
                    onChange={this.fahrenheitChange}
                />
                <TemperInput scale='c'
                    value={celsius}
                    onChange={this.celsiusChange}
                />
                {this.boilingVerdict(celsius)}
            </div>
        )
    }
}

export default TemperCal;