import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";
import CardSearch from "./CardSearch";
import {
  faUserDoctor,
  faClinicMedical,
  faHospital,
  faPills,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Search() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate(); // Corrected the variable name

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

  const handleSearch = () => {
    if (selectedState && selectedCity) {
      axios
        .get(
          `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
        )
        .then((res) => {
          // Navigate to the search result page
          navigate("/details", { state: { searchResult: res.data } }); // Corrected the object structure
        })
        .catch((err) => console.error("Error fetching search result:", err));
    }
  };

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
        <Button name={"Search"} onClick={handleSearch} />
      </div>
      <h3 className={styles.text}>You may be looking for</h3>
      <div className={styles.cards}>
        <CardSearch icon={faUserDoctor} text="Doctors" link="/find-doctors" />
        <CardSearch icon={faClinicMedical} text="Labs" />
        <CardSearch icon={faHospital} text="Hospitals" link="/details" />
        <CardSearch icon={faPills} text="Medical Store" />
        <CardSearch icon={faAmbulance} text="Ambulance" />
      </div>
    </div>
  );
}

export default Search;
