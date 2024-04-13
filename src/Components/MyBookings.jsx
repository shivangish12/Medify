// MyBookings.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import CardDetails from "./CardDetails";
import Navbar from "./Navbar";
import styles from "./MyBookings.module.css";

import Footer from "./Footer";

function MyBookings() {
  const location = useLocation();
  const bookings = location?.state?.bookings || []; // Assuming bookings are passed from the previous page

  return (
    <div className={styles.myBookingsPage}>
      <Navbar />
      <h2 className={styles.heading}>My Bookings</h2>
      <div className={styles.bookingContainer}>
        {bookings.map((booking, index) => (
          <CardDetails
            key={index}
            hospital={booking.hospital}
            address={booking.address}
            city={booking.city}
            state={booking.state}
            dateTime={booking.dateTime}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MyBookings;
