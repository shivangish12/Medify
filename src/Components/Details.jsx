import React from "react";
import { useLocation } from "react-router-dom";
import CardDetails from "./CardDetails";
import Navbar from "./Navbar";
import styles from "./Details.module.css";

function Details() {
  const location = useLocation();
  const searchResult = location?.state?.searchResult;

  return (
    <div className={styles.detailsPage}>
      <Navbar />
      <div>
        <h3 className={styles.heading}>Medical Centers</h3>
        <p className={styles.d}>
          Book appointments with minimum wait-time & verified doctor details
        </p>
        <div className={styles.cardBoxes}>
          {searchResult &&
            searchResult.map((item, index) => (
              <CardDetails
                className={styles.cardsH}
                key={index}
                hospital={item["Hospital Name"]}
                city={item["City"]}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
