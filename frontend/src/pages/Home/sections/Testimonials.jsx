import React from "react";
import Card from "../../../components/Card";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const testimonials = [
  {
    imageSrc: "https://placehold.co/80x80",
    altText: "Customer 1",
    testimonial:
      "NutriTrack made it so easy to track my calories and meals. The app is so intuitive, and it’s helped me achieve my fitness goals!",
    customerName: "Jennifer Anderson",
  },
  {
    imageSrc: "https://placehold.co/80x80",
    altText: "Customer 2",
    testimonial:
      "I’ve tried several meal tracking apps, but NutriTrack's personalized approach has really helped me stay on track with my diet!",
    customerName: "Emily Davis",
  },
  {
    imageSrc: "https://placehold.co/80x80",
    altText: "Customer 3",
    testimonial:
      "I never thought I could stick to a diet plan, but NutriTrack gave me the support I needed to make healthy choices every day.",
    customerName: "Robert Johnson",
  },
  {
    imageSrc: "https://placehold.co/80x80",
    altText: "Customer 4",
    testimonial:
      "I never thought I could stick to a diet plan, but NutriTrack gave me the support I needed to make healthy choices every day.",
    customerName: "Robert Johnson",
  },
];

const slideSettings = {
  transitionDuration: 750,
  infinite: true,
  arrows: true,
  indicators: true,
};

const Testimonials = () => {
  return (
    <section className="bg-[#FFFFEA] py-20">
      <h2 className="text-4xl font-bold text-center">Our Testimonials</h2>
      <p className="text-lg text-center mt-4">
        Our users speak for themselves – see how{" "}
        <span className="text-teal-500 font-semibold">NutriTrack</span> is
        changing lives.
      </p>
      <div className="flex justify-center gap-8 mt-12 items-center px-8">
        <div className="w-full max-w-3xl mx-auto">
          <Slide {...slideSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex justify-center">
                <Card {...testimonial} />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

{
  /* <Slide>
  {slideImages.map((slideImage, index) => (
    <div key={index}>
      <div>
        <span style={spanStyle}>{slideImage.caption}</span>
      </div>
    </div>
  ))}
</Slide>; */
}

{
  /* <div className="flex justify-around gap-8 mt-12 items-center px-8">
{testimonialsData.map((testimonial, index) => (
  <Card key={index} {...testimonial} />
))}
</div> */
}
