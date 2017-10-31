import React, { Component } from 'react';

class MailBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { unReadMessages } = this.props;
        return (
            <div>
                <h4>Hello!</h4>
                {
                    unReadMessages.length > 0 &&
                    <h5>
                        You have {unReadMessages.length} unread messages!
                    </h5>
                }
            </div>
        )
    }
}

export default MailBox;