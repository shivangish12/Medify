import React from "react";
import styles from "./Button.module.css";
const Button = ({ name, onClick, forDetailsStyle }) => {
  return (
    <div>
      <button className={styles.btn} onClick={onClick} style={forDetailsStyle}>
        {name}
      </button>
    </div>
  );
};

export default Button;
