import React, { Component } from 'react';

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
    }

    addVal() {
        this.textInput.value = 111;
    }

    addOne() {
        this.textInput.value++;
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => {
                    this.textInput = input;
                }} />
                <input type="button" value="我是按钮" onClick={this.addOne}/>
            </div>
        )
    }
}

export default CustomTextInput;