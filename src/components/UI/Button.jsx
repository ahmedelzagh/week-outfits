import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${classes.button} ${props.variant === "dark" ? classes.dark : classes.light}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
