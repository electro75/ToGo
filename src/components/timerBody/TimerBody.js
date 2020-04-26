import React from 'react';
import './TimerBody.css';
import TimerConfig from './timerConfig/TimerConfig';
import TimerList from './timerList/TimerList';

const TimerBody = () => {
    return (
        <div className="timer-body" >
            <div className="timer-container" >
                <TimerList />
            </div>
            <div className="timer-config" >
                <TimerConfig/>
            </div>
        </div>
    )
}

export default TimerBody