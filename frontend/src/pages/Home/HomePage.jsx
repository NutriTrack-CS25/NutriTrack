import React, { useRef } from "react";
import Navbar from "../../components/NavBar";
import HeroSection from "./sections/HeroSection";
import Testimonials from "./sections/Testimonials";
import CTASection from "./sections/CTASection";
import Footer from "./sections/Footer";
import Features from "./sections/Features";

const HomePage = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Create an object with all refs to pass to the navbar
  const sectionRefs = {
    hero: heroRef,
    features: featuresRef,
    testimonials: testimonialsRef,
  };

  return (
    <>
      <Navbar sectionRefs={sectionRefs} />
      <div ref={heroRef} id="hero">
        <HeroSection featuresRef={featuresRef} />
      </div>
      <div ref={featuresRef} id="features">
        <Features />
      </div>
      <div ref={testimonialsRef} id="testimonials">
        <Testimonials />
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;
