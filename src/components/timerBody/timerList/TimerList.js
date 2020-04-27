import React from 'react';
import {connect} from 'react-redux'

class TimerList extends React.Component {

    render() {
        console.log(this.props.timers)
        if(!this.props.timers.length) {
            return (
                <div>Timers will appear here!</div>
            )
        } else {
            return this.props.timers.map(timer => {
                return (
                <div key={timer.name} >{timer.name}</div>
                )
            })
        }
        
    }
}

const mapStateToProps = ({timers}) => {
    return {timers}
}

export default connect(mapStateToProps)(TimerList)