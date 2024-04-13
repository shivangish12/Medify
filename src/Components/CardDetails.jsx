import React, { useState } from "react";
import styles from "./CardDetails.module.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import Calendar from "./Calendar";

const CardDetails = ({ hospital, city, address, state }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  const handleCalendarChange = (dateTime) => {
    setSelectedDateTime(dateTime);
    toggleCalendar(); // Close the calendar after selecting date/time
  };

  return (
    <div>
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
        {showCalendar && (
          <Calendar value={selectedDateTime} onChange={handleCalendarChange} />
        )}
      </div>
    </div>
  );
};
export default CardDetails;
