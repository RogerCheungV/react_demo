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
// import TemperateCal from './TemperateCal/index';
// import SplitPanel from './SplitPanel/index';
// import SignUpDialog from './SignUpDialog/index';
// import TodoList from './TodoList/index';
// import Repeat from './Repeat/index';
// import PropTypes from './PropTypes/index';
// import CustomTextInput from './refs/index';
import AutoFocusInput from './refs/AutoFocus';
// import CreateCustomInput from './refs/createCustomInput';
// import Parent from './refs/Parent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: ['吃饭', '睡觉', '打豆豆']
        };
        this.contacts = this.contacts.bind(this);
        this.chat = this.chat.bind(this);
    }

    contacts(tel) {
        return <h4>{tel}</h4>
    }

    chat(tips) {
        return <span>{tips}</span>
    }

    render() {
        const items = { id: 1, name: 'nkll', gender: 'male' };
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
                {/* <TemperateCal /> */}
                {/* <SplitPanel left={this.contacts} right={this.chat} /> */}
                {/* <SignUpDialog /> */}
                {/* <TodoList {...items} lists={this.state.messages} /> */}
                {/* <Repeat /> */}
                {/* <PropTypes
                    name='nkll'
                    age={18}
                    bool={true}
                    hobby={['sing', 'smile', 'drive']}
                    obj={{ skill: 'drive', hero: 'bzhw' }}
                    func={name => name}
                    refer='photos'
                    ele={<h6>我是ele</h6>}
                /> */}
                {/* <CustomTextInput /> */}
                <AutoFocusInput />
                {/* <CreateCustomInput /> */}
                {/* <Parent /> */}
            </div>
        )
    }
}

export default App;