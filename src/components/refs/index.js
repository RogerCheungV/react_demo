import React, { Component } from 'react';

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    focus() {
        this.textInput.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => {
                    this.textInput = input;
                }} />
                <input type="button" value="点击获取焦点" onClick={this.focus} />
            </div>
        )
    }
}

export default CustomTextInput;