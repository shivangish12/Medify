import React from "react";
import styles from "./CardDetails.module.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-solid-svg-icons";

const CardDetails = ({ key, hospital, city, address }) => {
  return (
    <div>
      <p>{key}</p>
      <div className={styles.cardDetailsContainer}>
        <FontAwesomeIcon className={styles.icon} icon={faHospital} />
        <div>
          <h4 className={styles.hospitalName}>{hospital}</h4>
          <p className={styles.address}>{address}</p>
          <p className={styles.cityName}>{city}</p>
        </div>
        <Button name={"Book FREE Center Visit"} />
      </div>
    </div>
  );
};
export default CardDetails;
