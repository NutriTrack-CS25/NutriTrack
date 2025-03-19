import React from "react";
import Navbar from "../../components/NavBar";
import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Features from "./components/Features";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;
