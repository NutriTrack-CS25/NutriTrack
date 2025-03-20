import React from "react";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="flex justify-between items-center bg-[#F6FDF7] rounded-xl shadow-[10px_10px_15px_-5px_#E8F5E9] overflow-hidden w-250 mx-auto">
        <div className="pl-8 my-16">
          <h2 className="font-bold text-2xl">Join NutriTrack Today!</h2>
          <p className="mt-12">
            Please use our app so that we, developers can get to buy a meal as
            well...
          </p>
          <Link to="/signup">
            <Button className="py-4 mt-4" text="Sign Up Now" />
          </Link>
        </div>
        <div className="w-80">
          <img src="/assets/home/cta.png" alt="a begger asking for moni" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
