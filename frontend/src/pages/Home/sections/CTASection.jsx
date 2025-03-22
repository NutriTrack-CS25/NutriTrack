import React from "react";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#F6FDF7] rounded-xl shadow-[5px_5px_15px_2px_rgba(232,245,233,0.90)] sm:shadow-[15px_15px_25px_5px_rgba(232,245,233,0.90)] overflow-hidden w-full max-w-6xl mx-auto">
        <div className="p-6 sm:pl-8 sm:my-8 lg:my-16 text-center md:text-left">
          <h2 className="font-bold text-xl sm:text-2xl">
            Join NutriTrack Today!
          </h2>
          <p className="mt-6 sm:mt-12">
            Please use our app so that we, developers can get to buy a meal as
            well...
          </p>
          <Link to="/signup">
            <Button className="py-3 mt-4 w-full md:w-auto" text="Sign Up Now" />
          </Link>
        </div>
        <div className="w-full md:w-80">
          <img
            src="/assets/home/cta.png"
            alt="a begger asking for moni"
            className="w-full h-auto rounded-2xl lg:rounded-none "
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
