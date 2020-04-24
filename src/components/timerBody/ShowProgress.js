import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


const ShowProgress = (props) => {  
    
    if(props.currentTime >= props.eventTime) {
        return <div></div>
    } else {
        return (
            <CircularProgress 
                variant='static' 
                value={((props.currentTime - props.createdAt)/(props.eventTime - props.createdAt)) * 100} 
                size={300}
                thickness={2} />
        )
    }

    
}

export default ShowProgress