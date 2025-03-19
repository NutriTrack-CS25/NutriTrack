import React from "react";
import Navbar from "../../components/NavBar";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;
