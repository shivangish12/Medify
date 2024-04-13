import React from "react";
import styles from "./Footer.module.css";
import logoImage from "../assets/Logo.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <a href="/">
          <img src={logoImage} alt="Logo" />
        </a>
        <div>
          <ul className={styles.list}>
            <div>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/pricing">Our Pricing</a>
              </li>
              <li>
                <a href="/gallery">Our Gallery</a>
              </li>
              <li>
                <a href="/appointment">Appointment</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </div>
            <div>
              <li>
                <a href="/orthology">Orthology</a>
              </li>
              <li>
                <a href="/neurology">Neurology</a>
              </li>
              <li>
                <a href="/dentalcare">Dental Care</a>
              </li>
              <li>
                <a href="/opthalmology">Opthalmology</a>
              </li>
              <li>
                <a href="/cardiology">Cardiology</a>
              </li>
            </div>
            <div>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/pricing">Our Pricing</a>
              </li>
              <li>
                <a href="/gallery">Our Gallery</a>
              </li>
              <li>
                <a href="/appointment">Appointment</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
    </div>
  );
};
export default Footer;
