import React, {Component} from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            clickNum: props.num
        }
        // *在给render里的标签注册事件时不处理this会报错*
        // 三种处理方式: 
        // 1. 在constructor中用bind绑定事件 --- 推荐这种方式，性能较好
        this.handleClick = this.handleClick.bind(this);
    }
    
    // 2. 使用箭头函数
    // 2. handleClick = () => {
    handleClick() {
        this.setState(prevState => {
            var count = prevState.clickNum;
            count++;
            return {
                isToggleOn: !prevState.isToggleOn,
                clickNum: count
            }
        })
    }

    render() {
        return (
            <div>
                {/* 1和2对应的代码，事件后无小括号 */}
                <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
                {/* 3. 给事件传入箭头函数，事件后有小括号 */}
                {/* <button onClick={() => this.handleClick()}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button> */}
                <p>点击了{this.state.clickNum}</p>
            </div>
        )
    }
}

export default Toggle;