import React, { Component } from 'react';

import './index.css';

class NumberList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { messages } = this.props;
        return (
            <ul>
                {
                    messages.map((ele, index) => <li key={index}>{ele}</li>)
                }
            </ul>
        )
    }

}

export default NumberList;