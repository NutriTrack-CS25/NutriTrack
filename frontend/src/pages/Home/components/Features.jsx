import React from "react";

const Features = () => {
  return (
    <section className="py-20">
      {/* Features */}
      <h2 className="text-4xl font-bold text-center">Features</h2>
      <p className="text-lg text-center mt-4">
        Why Choose{" "}
        <span className="text-teal-500 font-semibold">NutriTrack</span>?
      </p>

      <div className="container pl-12 mt-12">
        <span className="text-sm text-teal-500 font-bold uppercase">
          How it works
        </span>
        <h2 className="text-3xl font-semibold">
          Your daily dose of health in simple steps
        </h2>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
        {/* Step 1 */}
        <div>
          <p className="text-[8.6rem] font-extrabold text-[#ddd] mb-4">01</p>
          <h3 className="text-2xl font-semibold">
            Calorie & Nutrition Tracking
          </h3>
          <p className="text-lg mt-4">
            Easily monitor your daily calorie intake and macronutrient balance
            with insightful charts.
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          <img
            src="/assets/home/feature-1.jpg"
            className="w-120"
            alt="calculater showing kcal with a burger"
          />
        </div>

        {/* Step 2 */}
        <div className="relative flex justify-center items-center">
          <img
            src="/assets/home/feature-2.jpg"
            className="w-180"
            alt="health goals"
          />
        </div>

        <div>
          <p className="text-[8.6rem] font-extrabold text-[#ddd] mb-4">02</p>
          <h3 className="text-2xl font-semibold">
            Weight Loss/Gain Goal Tracker
          </h3>
          <p className="text-lg mt-4">
            Set weight loss, weight gain, or maintenance goals and track
            progress over time, conveniently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
