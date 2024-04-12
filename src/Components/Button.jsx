import React from "react";
import styles from "./Button.module.css";
const Button = ({ name, onClick }) => {
  return (
    <div>
      <button className={styles.btn} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
