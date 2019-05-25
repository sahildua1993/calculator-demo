import React from 'react';
import './App.css';

class Result extends React.Component {
    state = {
        actions: [],
        result: 0,
    };

    handleClick = action => {
        if(action === 'equal') {
            this.calc()
        } else {
            this.setState((prevState) => ({ actions: [...prevState.actions, action] }));
        }
    };

    calc = () => {
        const { actions } = this.state;
        let result = 0;
        let _action = '';
        actions.forEach(item => {
            if(Number.parseInt(item)) {
                result += item;
            }
        })
    };

    addition = (a, b) => {
        return Number.parseInt(a) + Number.parseInt(b)
    };

    subtraction = (a, b) => {
        return Number.parseInt(a) - Number.parseInt(b)
    };

    division = (a, b) => {
        return Number.parseInt(a) / Number.parseInt(b)
    };

    mutiply = (a, b) => {
        return Number.parseInt(a) * Number.parseInt(b)
    };

    render() {
        const { displayName, calType } = this.props;
        return (
            <div onClick={() => this.handleClick(calType)} className="cal-btn">
                <span className="btn-text">{ displayName }</span>
            </div>
        )
    }

}

export default Result;