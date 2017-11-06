import React, {Component} from 'react';

import Item from './item';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name, gender, lists } = this.props;
        return (
            <div id={id}>
                <h4>{name}</h4>
                <p>{gender}</p>
                <ul>
                    {
                        lists.map((msg, index) => {
                            return <Item key={index} message={msg} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;