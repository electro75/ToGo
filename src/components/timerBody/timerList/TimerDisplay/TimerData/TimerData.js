import React from 'react';
// import ShowProgress from './ShowProgress';
import ShowCount from './ShowCount';

class TimerData extends React.Component {

    constructor(props) {
        super(props);

        const {timer} = props

        console.log(timer);

        this.state = {
            eventTime : timer.timestamp,
            eventName : timer.name, 
            currentTime : new Date().getTime() / 1000,
            createdAt : timer.createdAt,            
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
            <div className="card-content" >                            
                <div className = "timer-display" >
                    <div className="timer-data" >
                        <ShowCount 
                            eventTime = {this.state.eventTime} 
                            eventName = {this.state.eventName}
                            currentTime = {this.state.currentTime}
                            timer = {this.state.timer}/>
                    </div>   
                    {/* <div className="progress-bar" > 
                        <ShowProgress 
                            currentTime = {this.state.currentTime}
                            eventTime = {this.state.eventTime}
                            createdAt = {this.state.createdAt}  />                   
                    </div> */}
                </div>
            </div>               
        )
    }
}

export default TimerData