import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <div>
      <button>{props.name}</button>
    </div>
  );
};

export default Button;
