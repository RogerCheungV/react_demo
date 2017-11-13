import React, { Component } from 'react';

function CustomTextInput(props) {
    return (
        <div>
            <input type="text" ref={props.inputRef} value={props.value} readOnly />
        </div>
    )
}

class Parent extends Component {
    render() {
        return (
            <CustomTextInput
                inputRef={el => this.inputElement = el}
                value={99}
            />
        )
    }

    componentDidMount() {
        
    }
}

export default Parent;