import React, { Component } from 'react';

class SplitPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connector: {
                tel: 15088888888,
                weChat: 'roger'
            }
        }
    }

    render() {
        const { connector } = this.state; 
        return (
            <div className="split-panel">
                <div className="split-panel-left">
                    {this.props.left(connector.tel)}
                </div>
                <div className="split-panel-right">
                    {this.props.right(connector.weChat)}
                </div>
            </div>
        )
    }
}

export default SplitPanel;