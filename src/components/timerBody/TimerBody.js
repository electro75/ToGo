import React from 'react';
import TimerConfig from './TimerConfig';
import DisplayTimer from './DisplayTimer';
import ShowProgress from './ShowProgress';
import './TimerBody.css'
import Paper from '@material-ui/core/Paper';
// import { CardContent, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


class TimerBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            eventTime : 0,
            eventName : '', 
            currentTime : new Date().getTime() / 1000,
            createdAt : 0,            
            timer : setInterval(()=> {
                this.incCurrentTime()
            }, 1000)                                
        }        
    }

    selectEvent = (time) => {
        this.setState({
            eventTime : time.valueOf() / 1000,
            createdAt : new Date().getTime() / 1000
        })
    }
    

    incCurrentTime = () => {        
        this.setState({            
            currentTime: new Date().getTime() / 1000
        })        
    }    

    render() {
        return (
            <div className="timer-body" >                
                <div className = "timer-card-container" >
                    <Paper className="timer-card" elevation={3} >
                        <div className="card-content" >                            
                            <div className = "timer-display" >
                                <div className="timer-data" >
                                    <DisplayTimer  
                                        eventTime = {this.state.eventTime} 
                                        eventName = {this.state.eventName}
                                        currentTime = {this.state.currentTime}
                                        timer = {this.state.timer}/>                       
                                </div>   
                                <div className="progress-bar" > 
                                    <ShowProgress 
                                        currentTime = {this.state.currentTime}
                                        eventTime = {this.state.eventTime}
                                        createdAt = {this.state.createdAt}  />                   
                                </div>
                            </div>                             
                        </div>                        
                        <div className="card-actions" >                            
                            <Button>
                                <DeleteIcon/>
                            </Button>                            
                        </div>                        
                    </Paper>                    
                </div>
                <div className="timer-config" >
                    <div>
                        <TimerConfig 
                            eventTime = {this.state.eventTime}
                            selectEvent = {this.selectEvent} />
                    </div>                    
                </div>            
            </div>
        )
    }
}

export default TimerBody