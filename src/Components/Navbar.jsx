import React from "react";
import styles from "./Navbar.module.css";
import logoImage from "../assets/Logo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <Button name={"My Bookings"} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
