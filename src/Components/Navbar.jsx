import React from "react";
import styles from "./Navbar.module.css";
import logoImage from "../assets/Logo.svg";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleBookings = () => {
    navigate("/mybookings");
  };
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logoImage} alt="Logo" />
      </Link>
      <ul>
        <li>
          <a href="#find-doctors">Find Doctors</a>
        </li>
        <li>
          <a href="/details">Hospitals</a>
        </li>
        <li>
          <a href="#medicines">Medicines</a>
        </li>
        <li>
          <a href="#surgeries">Surgeries</a>
        </li>
        <li>
          <a href="#software">Software for provider</a>
        </li>
        <li>
          <a href="#medicines">Facilities</a>
        </li>
        <li>
          <Button name={"My Bookings"} onClick={handleBookings} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
