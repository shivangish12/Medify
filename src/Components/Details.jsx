import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CardDetails from "./CardDetails";
import Navbar from "./Navbar";
import styles from "./Details.module.css";
import SearchSection from "./SearchSection";
import Footer from "./Footer";

function Details() {
  const location = useLocation();
  const searchResult = location?.state?.searchResult || [];

  const [bookings, setBookings] = useState([]);

  const handleBooking = (bookingData) => {
    setBookings((prevBookings) => [...prevBookings, bookingData]);
  };

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
              dateTime={item["DateTime"]}
              onBook={handleBooking}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
