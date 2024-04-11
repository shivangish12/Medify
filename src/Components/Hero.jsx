import React from "react";
import hero from "../assets/Hero.svg";
import styles from "./Hero.module.css";
import Navbar from "./Navbar";
import Button from "./Button";
import Search from "./Search";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.section}>
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            <h3>
              Skip the travel! Find Online{" "}
              <div>
                <span className={styles.medical}>Medical</span>{" "}
                <span className={styles.medical} style={{ color: "#2AA7FF" }}>
                  Centers
                </span>
              </div>
            </h3>
            <div className={styles.para}>
              <p>
                Connect instantly with a 24x7 specialist or choose to video
                visit a particular doctor.
              </p>
            </div>
          </div>
          <div className={styles.btn}>
            <Button name={"Find Centers"} />
          </div>
        </div>
        <div className={styles.heroImg}>
          <img src={hero} alt="Hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
