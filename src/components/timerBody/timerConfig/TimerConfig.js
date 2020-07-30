import React, {useState} from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { DateTimePicker } from "@material-ui/pickers";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { addTimer } from '../../../actions';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme) => ({
    configBody : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-evenly',
        height : '30vh'
    }    
}));

let newEvent = {
    name : '',
    timestamp : new Date().getTime()
}

const EventDialog = (props) => {

    const { onClose, open } = props;
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [selectedDate, handleDateChange] = useState(new Date());
    const classes = useStyles();  

    const handleClose = () => {
        onClose();
    };

    const makeEvent = () => {        
        newEvent.timestamp = Math.trunc(selectedDate.valueOf() / 1000)        
        props.addTimer({...newEvent, createdAt : new Date().getTime() / 1000});
        handleClose();
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Add Event</DialogTitle>
            <DialogContent className={classes.configBody} >
                <DateTimePicker
                        label="Add Event"
                        inputVariant="outlined"
                        value={selectedDate}
                        onChange={handleDateChange}
                        disablePast
                    />
                <TextField 
                    label="Event Name"
                    onChange={(n)=> {
                        newEvent.name = n.target.value; 
                        setBtnDisabled(!n.target.value)                       
                    }} 
                />
            </DialogContent>
            <DialogActions>
                <Button 
                    variant="contained" 
                    color="primary"
                    size="small"
                    onClick={()=> { makeEvent() } }
                    disableElevation={true}
                    disabled = { btnDisabled }>                    
                    Add Event
                </Button>
            </DialogActions>
                
        </Dialog>
    )
}

const TimerConfig = (props) => {

    
    const [open, setOpen] = React.useState(false);            

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);        
      }

    return (
        <MuiPickersUtilsProvider utils ={MomentUtils}>
            <div>
            <Fab 
                onClick={handleClickOpen}
                color="primary" 
                aria-label="add"
                variant = 'extended'
                size ="large">
                <AddIcon />
                Add Timer
            </Fab>
            <EventDialog open={open} onClose = {handleClose} addTimer={props.addTimer} />
                
            </div>
        </MuiPickersUtilsProvider>        
    )
}

const mapStateToProps = (state) => {    
    return state
}

export default connect(mapStateToProps, { addTimer })(TimerConfig);