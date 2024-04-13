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
                <a href="/about" className={styles.textAnchor}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/pricing" className={styles.textAnchor}>
                  Our Pricing
                </a>
              </li>
              <li>
                <a href="/gallery" className={styles.textAnchor}>
                  Our Gallery
                </a>
              </li>
              <li>
                <a href="/appointment" className={styles.textAnchor}>
                  Appointment
                </a>
              </li>
              <li>
                <a href="/privacy" className={styles.textAnchor}>
                  Privacy Policy
                </a>
              </li>
            </div>
            <div>
              <li>
                <a href="/orthology" className={styles.textAnchor}>
                  Orthology
                </a>
              </li>
              <li>
                <a href="/neurology" className={styles.textAnchor}>
                  Neurology
                </a>
              </li>
              <li>
                <a href="/dentalcare" className={styles.textAnchor}>
                  Dental Care
                </a>
              </li>
              <li>
                <a href="/opthalmology" className={styles.textAnchor}>
                  Opthalmology
                </a>
              </li>
              <li>
                <a href="/cardiology" className={styles.textAnchor}>
                  Cardiology
                </a>
              </li>
            </div>
            <div>
              <li>
                <a href="/about" className={styles.textAnchor}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/pricing" className={styles.textAnchor}>
                  Our Pricing
                </a>
              </li>
              <li>
                <a href="/gallery" className={styles.textAnchor}>
                  Our Gallery
                </a>
              </li>
              <li>
                <a href="/appointment" className={styles.textAnchor}>
                  Appointment
                </a>
              </li>
              <li>
                <a href="/privacy" className={styles.textAnchor}>
                  Privacy Policy
                </a>
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
