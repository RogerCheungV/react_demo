import React, { Component } from 'react';

import FancyBorder from './fancyBorder';

class Dialog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FancyBorder color="green">
                <h3 className="dialog-title">
                    {this.props.title}
                </h3>
                <p className="dialog-message">
                    {this.props.message}
                </p>
                {this.props.children}
            </FancyBorder>
        )
    }
}

export default Dialog;