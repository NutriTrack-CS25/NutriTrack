import React from "react";
import Button from "../../../components/Button";

const HeroSection = () => {
  return (
    <section className="bg-[#E8F5E9] py-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src="/assets/home/hero.png"
            alt="Healthy food and meal tracking"
            className="w-full max-w-lg"
          />
        </div>
        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-[#333333] leading-tight">
            Track Your Nutrition, Simplify Your Diet
          </h1>
          <p className="text-lg text-[#333333] mt-4">
            NutriTrack helps you stay on top of your nutrition with meal
            planning, calorie tracking, and insights tailored to your goals.
            Start your journey towards healthier eating today!
          </p>
          <div className="mt-8 flex gap-4">
            <Button
              className=""
              text="Get Started"
              onClick={() => console.log("Get Started Clicked")}
            />
            <Button
              className=""
              variant="secondary"
              text="Learn more ↓"
              onClick={() => console.log("Learn More Clicked")}
            />
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-4">
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  src={`/assets/home/customers/customer-${i + 1}.jpg`}
                  alt="Customer"
                  className="h-12 w-12 rounded-full border-2 border-[#F5F5F5] shadow-md"
                />
              ))}
            </div>
            <p className="text-lg font-semibold text-[#333333]">
              <span className="text-teal-500 font-bold">999+</span> Happy
              Customers!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
