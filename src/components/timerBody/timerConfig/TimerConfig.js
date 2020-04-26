import React, {useState} from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { DateTimePicker } from "@material-ui/pickers";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { addTimer } from '../../../actions';

const useStyles = makeStyles((theme) => ({
    configBody : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-evenly',
        height : '100%'
    }
}));

let newEvent = {
    name : '',
    timestamp : new Date().getTime()
}

const TimerConfig = (props) => {

    const [selectedDate, handleDateChange] = useState(new Date());    

    const classes = useStyles();

    const makeEvent = () => {        
        newEvent.timestamp = selectedDate.valueOf() / 1000        
        props.addTimer(newEvent);
    }

    return (
        <MuiPickersUtilsProvider utils ={MomentUtils}>
            <div className={classes.configBody} >
                <DateTimePicker
                    label="Add Event"
                    inputVariant="outlined"
                    value={selectedDate}
                    onChange={handleDateChange}
                    disablePast
                />
                <TextField 
                    label="Event Name"
                    onChange={(n)=> {newEvent.name = n.target.value}  } 
                    />
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={()=> { makeEvent() } }>
                    
                    Add Event
                </Button>
            </div>
        </MuiPickersUtilsProvider>        
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return state
}

export default connect(mapStateToProps, { addTimer })(TimerConfig);