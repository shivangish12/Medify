import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";
import CardSearch from "./CardSearch";
import {
  faUserDoctor,
  faHospital,
  faAmbulance,
  faClinicMedical,
  faPills,
} from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    axios
      .get("https://meddata-backend.onrender.com/states")
      .then((res) => setStates(res.data))
      .catch((err) => console.error("Error fetching states:", err));
  }, []);

  useEffect(() => {
    if (selectedState) {
      axios
        .get(`https://meddata-backend.onrender.com/cities/${selectedState}`)
        .then((res) => {
          setCities(res.data);
          setSelectedCity("");
        })
        .catch((err) => console.error("Error fetching cities:", err));
    }
  }, [selectedState]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <div className={styles.customSelect}>
          <FaSearch className={styles.searchIcon} />
          <select
            className={styles.searchbox}
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="" disabled>
              State
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.customSelect}>
          <FaSearch className={styles.searchIcon} />
          <select
            className={styles.searchbox}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="" disabled>
              City
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <Button name={"Search"} />
      </div>
      <h3 className={styles.text}>You may be looking for</h3>
      {selectedCity && (
        <h2 className="result">
          You selected <span className="highlight">{selectedCity},</span>
          <span className="fade"> {selectedState}</span>
        </h2>
      )}
      <div className={styles.cards}>
        <CardSearch icon={faUserDoctor} text="Doctors" link="/find-doctors" />
        <CardSearch icon={faClinicMedical} text="Labs" />
        <CardSearch icon={faHospital} text="Hospitals" />
        <CardSearch icon={faPills} text="Medical Store" />
        <CardSearch icon={faAmbulance} text="Ambulance" />
      </div>
    </div>
  );
}

export default Search;
