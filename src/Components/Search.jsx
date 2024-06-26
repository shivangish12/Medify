import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Search.module.css";

import CardSearch from "./CardSearch";
import {
  faUserDoctor,
  faClinicMedical,
  faHospital,
  faPills,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import SearchSection from "./SearchSection";

function Search() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

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
          navigate("/details", { state: { searchResult: res.data } });
        })
        .catch((err) => console.error("Error fetching search result:", err));
    }
  };

  return (
    <div className={styles.searchContainer}>
      <SearchSection
        states={states}
        cities={cities}
        selectedState={selectedState}
        selectedCity={selectedCity}
        setSelectedState={setSelectedState}
        setSelectedCity={setSelectedCity}
        handleSearch={handleSearch}
      />
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
