import React from "react";
import './App.css';

function Button(props){
    return(
        <button id={props.name}>{props.name}</button>
    )
};

export default Button;