import React from 'react';

const intervals = [
    {interval : 'week', unit : 7 * 24 * 60 * 60},
    {interval : 'day', unit : 24 * 60 * 60},
    {interval : 'hour', unit : 60* 60},
    {interval : 'minute', unit : 60},
    {interval : 'second', unit : 1}
]


function getDifference(eventTime) {    
    let i = 0;
    let newDiffArr = [
        { interval : 'week', diff : 0 }, 
        { interval : 'day', diff : 0 }, 
        { interval : 'hour', diff : 0 }, 
        { interval : 'minute', diff : 0 }, 
        { interval : 'second', diff : 0 }, 
    ]    

    while(eventTime > 0 && i < 5) {        
        newDiffArr[i].diff = Math.trunc(eventTime / intervals[i].unit);

        eventTime = eventTime % intervals[i].unit;

        i = i + 1;
    }    

    return newDiffArr
}

function getDiffStr(arr) {
    // console.log(arr);
    let str = ``;
    arr.forEach(interval => {
        // console.log(interval)
        str = `${str} ` + ((interval.diff > 1 ) ? `${interval.diff} ${interval.interval}s` :
                (interval.diff === 1) ? `${interval.diff} ${interval.interval}` : ``);                
    })

    return str;
}

const DisplayTimer = (props) => {

    if(!props.eventTime) {
        return (
            <div>No Event Added!</div>
        )
    } else {        
        let diffStr = '';
        let d1 = props.currentTime
        let diff = (props.eventTime) - d1        
        diffStr = getDiffStr(getDifference(diff));

        setInterval(function() {
            props.incTime();
        }, 1000)            

        return (
            <div>{diffStr}</div>
        )
        
    }

    
}

export default DisplayTimer;