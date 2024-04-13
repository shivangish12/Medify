import React, { useState } from "react";
import styles from "./CardDetails.module.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import Calendar from "./Calendar";

const CardDetails = ({ key, hospital, city, address, state }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };
  return (
    <div>
      <p>{key}</p>
      <div className={styles.cardDetailsContainer}>
        <FontAwesomeIcon className={styles.icon} icon={faHospital} />
        <div>
          <h4 className={styles.hospitalName}>{hospital}</h4>
          <p className={styles.address}>{address}</p>
          <p className={styles.cityName}>{city}</p>
          <p>{state}</p>
        </div>
        <Button
          name={"Book FREE Center Visit"}
          onClick={toggleCalendar}
          forDetailsStyle={{ width: "212px" }}
        />
        {showCalendar && <Calendar onSelectDate={toggleCalendar} />}
      </div>
    </div>
  );
};
export default CardDetails;
