import React, {Component} from 'react';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
        this.loginClick = this.loginClick.bind(this);
        this.logoutClick = this.logoutClick.bind(this);
    }

    loginClick() {
        this.setState({
            isLogin: true
        });
    }

    logoutClick() {
        this.setState({
            isLogin: false
        });
    }

    render() {
        const isLoggedIn = this.state.isLogin;
        let button = null;
        if (isLoggedIn) {
            button = <button onClick={this.logoutClick}>Logout</button>
        } else {
            button = <button onClick={this.loginClick}>Login</button>
        }
        return button;
    }
}

export default LoginControl;