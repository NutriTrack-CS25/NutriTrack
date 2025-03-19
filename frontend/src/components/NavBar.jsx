import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = ({ sectionRefs }) => {
  // Function to handle smooth scrolling
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex justify-between items-center bg-[#E8F5E9] h-24 px-12 w-full shadow-md z-50 sticky top-0">
      {/* Logo */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(sectionRefs.hero);
        }}
      >
        <img
          className="rounded-full w-20 h-20"
          alt="NutriTrack logo"
          src="/assets/logo/logo.png"
        />
      </a>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-8 text-lg font-medium">
          <li>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sectionRefs.hero);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sectionRefs.features);
              }}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sectionRefs.testimonials);
              }}
            >
              Testimonials
            </a>
          </li>
          <Link to="/signup">
            <Button className="w-full" text="Sign Up" />
          </Link>
          <Link to="/login">
            <Button className="w-full" variant="secondary" text="Log In" />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
