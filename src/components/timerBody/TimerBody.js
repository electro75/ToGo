import React from 'react';
import AddTimer from './AddTimer';
import DisplayTimer from './DisplayTimer';

import ShowProgress from './ShowProgress';
import './TimerBody.css'

class TimerBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            eventTime : 1587732780,
            eventName : '25th Bday', 
            currentTime : new Date().getTime() / 1000,
            createdAt : 1587732691,            
            timer : setInterval(()=> {
                this.incCurrentTime()
            }, 1000)                                
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
                <div className="timer-data" >
                    <DisplayTimer  
                        eventTime = {this.state.eventTime} 
                        eventName = {this.state.eventName}
                        currentTime = {this.state.currentTime}
                        timer = {this.state.timer}/>
                    <AddTimer />    
                </div>   
                <div className="progress-bar" > 
                    <ShowProgress 
                        currentTime = {this.state.currentTime}
                        eventTime = {this.state.eventTime}
                        createdAt = {this.state.createdAt}  />                   
                </div>
            </div>
        )
    }
}

export default TimerBody