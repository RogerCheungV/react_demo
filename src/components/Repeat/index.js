import React, { Component } from 'react';

import Item from './item';

class Repeat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Item numTimes={10}>
                {index => <li key={index}>这是列表中的第{index}项</li>}
            </Item>
        )
    }
}

export default Repeat;