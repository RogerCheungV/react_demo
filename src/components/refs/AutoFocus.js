import React, { Component } from 'react';
import CustomTextInput from './customInput';

class AutoFocusInput extends Component {
    componentDidMount() {
        console.log(this.textInput);
        this.textInput.addVal();
    }

    render() {
        return (
            <CustomTextInput ref={input => {
                this.textInput = input;
            }} />
        )
    }
}

export default AutoFocusInput;