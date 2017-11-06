import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let items = [];
        let callback = this.props.children;
        var numTimes = this.props.numTimes;
        for (var i = 0; i < numTimes; i++) {
            items.push(callback(i));
        }
        return <ul>{items}</ul>
    }
}

export default Item;