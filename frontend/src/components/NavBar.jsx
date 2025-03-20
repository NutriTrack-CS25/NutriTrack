import React from "react";
import Button from "./Button";
import NavList from "./NavList";
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
        aria-label="Go to Home"
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
          <NavList
            text="Home"
            onClick={() => scrollToSection(sectionRefs.hero)}
          />
          <NavList
            text="Features"
            onClick={() => scrollToSection(sectionRefs.features)}
          />
          <NavList
            text="Testimonials"
            onClick={() => scrollToSection(sectionRefs.testimonials)}
          />

          <li>
            <Link to="/signup">
              <Button className="w-full" text="Sign Up" />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <Button className="w-full" variant="secondary" text="Log In" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
