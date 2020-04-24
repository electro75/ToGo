import React from 'react';
import AddTimer from './AddTimer';
import DisplayTimer from './DisplayTimer';
import './TimerBody.css'

class TimerBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            eventTime : 1588809600,
            eventName : '25th Bday.', 
            currentTime : new Date().getTime() / 1000                       
        }        
    }

    incCurrentTime = () => {        
        this.setState({            
            currentTime: new Date().getTime() / 1000
        })
    }
    

    render() {
        return (
            <div className="timer-body" >
                <DisplayTimer  
                    eventTime = {this.state.eventTime} 
                    eventName = {this.state.eventName}
                    currentTime = {this.state.currentTime}
                    incTime = {this.incCurrentTime}/>
                <AddTimer />
            </div>
        )
    }
}

export default TimerBody