import React, { Component } from 'react';

const scaleNames = {
    c: 'Ceisius',
    f: 'Fahrenheit'
}

export default class TemperateInput extends Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }

    change(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const { scale, value } = this.props;
        return (
            <fieldset>
                <legend>
                    请输入{scaleNames[scale]}温度
                </legend>
                <input type="text"
                    value={value}
                    onChange={this.change}
                />
            </fieldset>
        )
    }
}