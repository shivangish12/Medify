import React from "react";
import { useLocation } from "react-router-dom";
import CardDetails from "./CardDetails";
import Navbar from "./Navbar";
import styles from "./Details.module.css";
import SearchSection from "./SearchSection";

function Details() {
  const location = useLocation();
  const searchResult = location?.state?.searchResult || []; // Provide a default empty array if searchResult is undefined

  return (
    <div className={styles.detailsPage}>
      <Navbar />
      <SearchSection
        searchResult={searchResult}
        customStyle={{ marginLeft: "150px" }}
      />

      <div>
        <h3 className={styles.heading}>Medical Centers</h3>
        <p className={styles.d}>
          Book appointments with minimum wait-time & verified doctor details
        </p>
        <div className={styles.cardBoxes}>
          {searchResult.map((item, index) => (
            <CardDetails
              key={index}
              hospital={item["Hospital Name"]}
              address={item["Address"]}
              city={item["City"]}
              state={item["State"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
