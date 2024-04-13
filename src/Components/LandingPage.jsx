import React from "react";
import Search from "./Search";
import Hero from "./Hero";
import Footer from "./Footer";
import Coupons from "./Coupons";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Search />
      <Coupons />
      <Footer />
    </div>
  );
};
export default LandingPage;
