import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// this will be a smart component (aware of the state)
// state will have the settings of the current timer
// default state will have no timer set.


// const App = () => {
//     return <div>App</div>
// }

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,    
    },            
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(2),
    },
    bar : {
        padding : theme.spacing(2)
    }
}));   



export default function App() {

    const classes = useStyles();
                    
        return(
            <div className={classes.root} >
                <AppBar position="static" className={classes.bar} >
                    <Typography variant="h4" className={classes.title}>
                        ToGo
                    </Typography>             
                </AppBar>
            </div>
        )
    
}


// export default App