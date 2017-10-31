import React, {Component} from 'react';

class FlavorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'jyj',
            msg: 'nkll'
        };
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    change(e) {
        this.setState({
            value: e.target.value
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
            <form action="" onSubmit={this.submit}>
                <label htmlFor="">
                    <select onChange={this.change}>
                        <option value="nkll">nkll</option>
                        <option value="bzhw">bzhw</option>
                        <option value="jyj">jyj</option>
                        <option value="snk">snk</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
                <div>你的选择是{this.state.msg}</div>
            </form>
        )
    }
}

export default FlavorForm;