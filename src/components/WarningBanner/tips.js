import React, { Component } from 'react';

class Tips extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.warning
                ? <h4>waring!</h4>
                : null
        )
    }
}

export default Tips;