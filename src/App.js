import React from "react";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Details from "./Components/Details";
import MyBookings from "./Components/MyBookings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/details" element={<Details />} />
          <Route path="/mybookings" element={<MyBookings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
