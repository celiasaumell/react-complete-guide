import React from "react";

const validation = (props) => {
    if(props.length < 5){
        return (<div><p>Text too short!</p></div>)
    } else{
        return (<div><p>Text long enough!</p></div>)
    }
}

export default validation 