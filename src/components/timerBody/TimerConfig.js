import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { DateTimePicker } from "@material-ui/pickers";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    configBody : {
        display : 'flex',
        flexDirection : 'column'        
    }
}));  

const TimerConfig = (props) => {

    let selectedDate = new Date();

    if(props.eventTime) {
        selectedDate = new Date(props.eventTime * 1000)
    }

    const classes = useStyles();

    return (
        <MuiPickersUtilsProvider utils ={MomentUtils}>
            <div className={classes.configBody} >
                <DateTimePicker
                    label="Add Event"
                    inputVariant="outlined"
                    value={selectedDate}
                    onChange={props.selectEvent}
                    disablePast
                />
                <TextField label="Event Name" />
            </div>
        </MuiPickersUtilsProvider>
        
    )
}

export default TimerConfig;