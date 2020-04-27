import React from 'react';

class TimerDisplay extends React.Component {

    render() {
        return <div>{this.props.timer.name}</div>
    }

}

export default TimerDisplay