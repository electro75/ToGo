import React from 'react';
import './TimerDisplay.css';
import Button from '@material-ui/core/Button';
import TimerData from './TimerData/TimerData';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import {removeTimer} from  '../../../../actions';

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
                onClick = {() => this.props.removeTimer(this.props.timer)}
                startIcon={<DeleteIcon />}>
                Delete
            </Button>
            </div>
        </div>)
    }

}

function mapStateToProps(state) {
    return state
}

export default  connect(mapStateToProps, {removeTimer})(TimerDisplay) 