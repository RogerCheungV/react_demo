import React, { Component } from 'react';

import Tips from './tips';

class WarningBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: true
        };
        this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick() {
        this.setState(prevState => {
            return {
                showWarning: !prevState.showWarning
            }
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
                <Tips warning={this.state.showWarning} />
            </div>
        )
    }
}

export default WarningBanner;