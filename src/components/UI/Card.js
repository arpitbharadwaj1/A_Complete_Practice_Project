import React from "react";
import classes from './Card.module.css';

const Card = (props) => {
    // dynamically taking the classes from addUser component
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
}

export default Card;