import React, { useState } from "react";
import styles from "./Calendar.module.css";
import Button from "./Button";

function Calendar({ value, onChange }) {
  const [date, setDate] = useState(value?.split("T")[0] || "");
  const [time, setTime] = useState(value?.split("T")[1]?.substring(0, 5) || "");

  const handleDateChange = (event) => {
    const { value } = event.target;
    setDate(value);
  };

  const handleTimeChange = (event) => {
    const { value } = event.target;
    setTime(value);
  };

  const handleConfirm = () => {
    onChange(`${date} ${time}`);
  };

  return (
    <div className={styles.datetimepicker}>
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        placeholder="mm/dd/yyyy"
        autoComplete="off"
        className={styles.customdateinput}
      />
      <input
        type="time"
        value={time}
        onChange={handleTimeChange}
        placeholder="hh:mm"
        autoComplete="off"
        className={styles.customtimeinput}
      />
      <Button onClick={handleConfirm} name={"Confirm"}></Button>
    </div>
  );
}

export default Calendar;
