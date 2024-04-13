import React from "react";
import Search from "./Search";
import Hero from "./Hero";
import Footer from "./Footer";
import Coupons from "./Coupons";
import Specialisation from "./Specialisation";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Search />
      <Coupons />
      <Specialisation />
      <Footer />
    </div>
  );
};
export default LandingPage;
