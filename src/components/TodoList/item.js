import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li>{this.props.message}</li>
    }
}

export default Item;