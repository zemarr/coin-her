import React from "react";
import Hero from "../../components/landing/hero";
import HowItWorks from "../../components/landing/howitworks";
import MarketTrends from "../../components/landing/marketTrends";
import Testimonials from "../../components/landing/testimonials";
import Why from "../../components/landing/why";

const Home = () => {
  return (
    <>
      <Hero />
      <Why />
      <MarketTrends />
      <Testimonials />
      <HowItWorks />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
