import React, { Component } from 'react';

class FancyBorder extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className={`fancy-border fancy-border-${this.props.color}`}
                style={{
                    border: `1px solid ${this.props.color}`,
                    textAlign: "center"
                }}
            >
                {this.props.children}
            </div>
        )
    }
}

export default FancyBorder;