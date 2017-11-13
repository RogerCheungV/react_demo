import React, { Component } from 'react';

class PropTypes extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props)
    }

    handleArray() {
        var hobby = this.props.hobby;
        var arr = hobby.map((ele, index) => {
            return <li key={index}>{index}:{ele}</li>
        });
        return arr;
    }

    handleObject() {
        var obj = this.props.obj;
        var arr = [];
        for (var key in obj) {
            arr.push(<li key={key}>{key}:{obj[key]}</li>)
        }
        return arr;
    }

    render() {
        var { name, age, bool, func, obj, hobby, refer, ele } = this.props;
        return (
            <div>
                <h4>name: {name}</h4>
                <p>age: {age}</p>
                <p>{bool ? '显示' : '隐藏'}</p>
                <p>func: {func(name)}</p>
                {/* <ul>
                    {this.handleArray()}
                </ul>
                <ul>
                    {this.handleObject()}
                </ul> */}
                <p>{refer}</p>
                {ele}
            </div>
        )
    }
}

PropTypes.propTypes = {
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number,
    bool: React.PropTypes.bool,
    func: React.PropTypes.func,
    obj: React.PropTypes.object,
    hobby: React.PropTypes.array,
    enum: React.PropTypes.oneOf(['news', 'photos', 'titles']),
    ele: React.PropTypes.element
}

export default PropTypes;