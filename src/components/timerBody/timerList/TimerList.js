import React from 'react';
import {connect} from 'react-redux';
import {Paper} from '@material-ui/core';
import './TimerList.css';

class TimerList extends React.Component {

    renderList() {        
        return this.props.timers.map(timer => {            
            return(
            <Paper
                className = "timer-paper"
                key={timer.name}                           
                square={false}
                elevation={2} >
                   {timer.name}
            </Paper>
            )
        })
    }
    
    render() {                

        if(!this.props.timers.length) {
            return (
                <div>Timers will appear here!</div>
            )
        } else {            
            return (                    
                <div className ="paper-container" >
                    {this.renderList()}
                </div>
            )            
        }
        
    }
}

const mapStateToProps = ({timers}) => {
    return {timers}
}

export default connect(mapStateToProps)(TimerList)