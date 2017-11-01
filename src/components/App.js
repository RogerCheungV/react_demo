import React, { Component } from 'react';

// import Clock from './Clock/index';
// import Toggle from './Toggle/index';
// import Greeting from './Greeting/index';
// import LoginControl from './LoginControl/index';
// import MailBox from './MailBox/index';
// import WarningBanner from './WarningBanner/index';
// import NumberList from './NumberList/index';
// import NameForm from './NameForm/index';
// import FlavorForm from './FlavorForm/index';
// import TemperCal from './TemperCal/index';
import TemperateCal from './TemperateCal/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: ['第一条', '第二条', '第三条']
        }
    }
    render() {
        return (
            <div>
                {/* <Clock title="当前时间"/> */}
                {/* <Toggle num={1} /> */}
                {/* <Greeting isLoggedIn={false} /> */}
                {/* <LoginControl /> */}
                {/* <MailBox unReadMessages={this.state.messages} /> */}
                {/* <WarningBanner /> */}
                {/* <NumberList messages={this.state.messages} /> */}
                {/* <NameForm /> */}
                {/* <FlavorForm /> */}
                {/* <TemperCal /> */}
                <TemperateCal />
            </div>
        )
    }
}

export default App;