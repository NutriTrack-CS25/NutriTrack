import React from "react";
import Button from "../../../components/Button";

const HeroSection = ({ sectionRefs }) => {
  // Function to scroll to features section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#E8F5E9] py-10 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content - Show first on mobile */}
        <div className="lg:order-2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#333333] leading-tight">
            Track Your Nutrition, Simplify Your Diet
          </h1>
          <p className="text-base sm:text-lg text-[#333333] mt-4">
            NutriTrack helps you stay on top of your nutrition with meal
            planning, calorie tracking, and insights tailored to your goals.
            Start your journey towards healthier eating today!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              className="w-full sm:w-auto"
              text="Get Started"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sectionRefs.cta);
              }}
            />
            <Button
              className="w-full sm:w-auto"
              variant="secondary"
              text="Learn more ↓"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(sectionRefs.features);
              }}
            />
          </div>

          {/* Customers Section */}
          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-4 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  src={`/assets/home/customers/customer-${i + 1}.jpg`}
                  alt="Customer"
                  className="h-12 w-12 rounded-full border-2 border-[#F5F5F5]"
                />
              ))}
            </div>
            <p className="text-lg font-semibold text-[#333333]">
              <span className="text-teal-500 font-bold">999+</span> Happy
              Customers!
            </p>
          </div>
        </div>

        {/* Hero Image - Show second on mobile */}
        <div className="flex justify-center lg:order-1">
          <img
            src="/assets/home/hero.png"
            alt="Healthy food and meal tracking"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
