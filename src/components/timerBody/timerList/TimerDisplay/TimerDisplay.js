import React from 'react';
import './TimerDisplay.css';
import Button from '@material-ui/core/Button';
import TimerData from './TimerData/TimerData';
import DeleteIcon from '@material-ui/icons/Delete';

class TimerDisplay extends React.Component {

    render() {
        return (
        <div className="timer-display">
            <div className="timer-data" >
                <TimerData timer = {this.props.timer}/>
            </div>
            <div className="timer-actions" >
            <Button
                variant="contained"
                color="secondary"
                size="small"        
                startIcon={<DeleteIcon />}>
                Delete
            </Button>
            </div>
        </div>)
    }

}

export default TimerDisplay