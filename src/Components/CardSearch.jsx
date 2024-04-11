import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./CardSearch.module.css";

const CardSearch = ({ icon, text, link }) => {
  return (
    <a href={link} className={styles.cardLink}>
      <div className={styles.cardContainer}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
        <p>{text}</p>
      </div>
    </a>
  );
};

export default CardSearch;
