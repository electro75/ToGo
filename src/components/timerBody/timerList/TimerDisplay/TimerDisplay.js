import React from 'react';
import './TimerDisplay.css';
import './TimerData/TimerData';
import TimerData from './TimerData/TimerData';

class TimerDisplay extends React.Component {

    render() {
        return (
        <div className="timer-display">
            <div className="timer-data" >
                <TimerData timer = {this.props.timer}/>
            </div>
            <div className="timer-actions" >

            </div>
        </div>)
    }

}

export default TimerDisplay