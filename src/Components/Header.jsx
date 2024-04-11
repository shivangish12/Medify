import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <p>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </p>
    </div>
  );
};

export default Header;
