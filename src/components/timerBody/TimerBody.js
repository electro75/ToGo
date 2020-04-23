import React from 'react';
import AddTimer from './AddTimer';
import DisplayTimer from './DisplayTimer';
import './TimerBody.css'

class TimerBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="timer-body" >
                <DisplayTimer />
                <AddTimer />
            </div>
        )
    }
}

export default TimerBody