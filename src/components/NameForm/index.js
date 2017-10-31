import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            msg: ''
        };
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    change(e) {
        this.setState({
            value: e.target.value.toUpperCase()
        });
    }

    submit(e) {
        e.preventDefault();
        this.setState({
            msg: this.state.value
        });
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    Name:
                    <input type="text"
                           value={this.state.value}
                           onChange={this.change}
                    />
                    <input type="submit" value="Submit"/>
                    <div>{this.state.msg}</div>
                </label>
            </form>
        )
    }
}

export default NameForm;