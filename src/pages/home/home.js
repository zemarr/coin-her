import React from "react";
import Hero from "../../components/landing/hero";
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
    </>
  );
};

export default Home;
