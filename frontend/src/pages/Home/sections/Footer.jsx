import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import NavList from "../../../components/NavList";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 sm:py-16 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8 px-6 sm:px-8 lg:px-12 xl:px-32">
        <div className="flex flex-col items-center sm:items-start order-last lg:order-none justify-around space-y-6">
          <a href="#" className="mb-4">
            <img
              className="rounded-full w-16 h-16"
              alt="Omnifood logo"
              src="/assets/logo/logo.png"
            />
          </a>
          <ul className="flex space-x-6">
            <li>
              <a
                className="text-gray-600 hover:text-gray-800 transition"
                href="#"
              >
                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                className="text-gray-600 hover:text-gray-800 transition"
                href="#"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                className="text-gray-600 hover:text-gray-800 transition"
                href="#"
              >
                <FontAwesomeIcon icon={faGlobe} className="text-2xl" />
              </a>
            </li>
          </ul>
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Copyright &copy; <span className="year">2025</span> by NutriTrack,
            Inc. All rights reserved.
          </p>
        </div>

        <div className="sm:col-span-1 order-last lg:order-none lg:col-span-2 text-center sm:text-left">
          <p className="text-lg font-medium mb-4">Contact us</p>
          <address className="not-italic text-gray-600 text-sm space-y-2">
            <p>
              King Mongkut&apos;s University of Technology Thonburi, 126 Pracha
              Uthit Rd., Bangmod, Thungkru, Bangkok 1014, Thailand
            </p>
            <p>
              <a className="block hover:underline" href="tel:0-2470-9849">
                0-2470-9849
              </a>
              <a
                className="block hover:underline"
                href="mailto:webadmin@sit.kmutt.ac.th"
              >
                webadmin@sit.kmutt.ac.th
              </a>
            </p>
          </address>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium mb-4">Account</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <Link to="/signup">
              <NavList text="Create account" onClick={() => {}} />
            </Link>
            <Link to="/login">
              <NavList text="Sign In" onClick={() => {}} />
            </Link>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium mb-4">Resources</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <NavList text="Food Database" onClick={() => {}} />
            <NavList text="Privacy & Terms" onClick={() => {}} />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
