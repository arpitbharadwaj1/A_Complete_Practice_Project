import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {/* this takes value from the child component and display them */}
        {props.children}
    </button>
  );
};

export default Button;
