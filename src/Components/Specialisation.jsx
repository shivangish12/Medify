import React from "react";
import CardSearch from "./CardSearch";
import styles from "./Specialisation.module.css";
import {
  faTooth,
  faHeartCircleBolt,
  faStethoscope,
  faDroplet,
  faFlaskVial,
  faXRay,
  faEye,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const Specialisation = () => {
  return (
    <div className={styles.specialisation}>
      <h2 className={styles.specHead}>Find by specialisation</h2>
      <div className={styles.specCard}>
        <CardSearch icon={faTooth} text="Dentistry" link="/find-doctors" />
        <CardSearch
          icon={faStethoscope}
          text="Primary Care"
          link="/find-doctors"
        />
        <CardSearch
          icon={faHeartCircleBolt}
          text="Cardiology"
          link="/find-doctors"
        />
        <CardSearch icon={faDroplet} text="Blood Test" link="/find-doctors" />
        <CardSearch icon={faEye} text="Ophthalmology" link="/find-doctors" />
        <CardSearch icon={faBrain} text="Neurology" link="/find-doctors" />
        <CardSearch icon={faXRay} text="X-Ray" link="/find-doctors" />
        <CardSearch icon={faFlaskVial} text="Laboratory" link="/find-doctors" />
      </div>
    </div>
  );
};

export default Specialisation;
