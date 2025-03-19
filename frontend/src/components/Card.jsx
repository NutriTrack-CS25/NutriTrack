import React from "react";

const Card = ({ imageSrc, altText, testimonial, customerName }) => {
  return (
    <div className="bg-stone-50 rounded-xl shadow-md outline outline-lime-100 flex flex-col items-center overflow-hidden max-w-md mx-auto">
      <div className="w-full px-6 py-4 bg-green-100">
        <img className="w-16 h-16 rounded-full" src={imageSrc} alt={altText} />
      </div>
      <div className="w-full p-8 rounded-2xl flex flex-col items-start gap-6">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5293 32.9409V25.5356C3.5293 23.406 3.91809 21.1916 4.69567 18.8926C5.49681 16.5694 6.58071 14.3792 7.94737 12.3222C9.33759 10.241 10.8928 8.48642 12.6129 7.05859L18.5508 11.0154C17.1605 13.1692 15.9942 15.4198 15.0516 17.7673C14.1327 20.0905 13.685 22.6558 13.7085 25.463V32.9409H3.5293ZM21.449 32.9409V25.5356C21.449 23.406 21.8378 21.1916 22.6154 18.8926C23.4165 16.5694 24.5004 14.3792 25.8671 12.3222C27.2573 10.241 28.8125 8.48642 30.5326 7.05859L36.4705 11.0154C35.0803 13.1692 33.9139 15.4198 32.9714 17.7673C32.0524 20.0905 31.6047 22.6558 31.6283 25.463V32.9409H21.449Z"
            fill="#356554"
          />
        </svg>

        <div className="text-zinc-800 text-lg font-medium leading-relaxed">
          {testimonial}
        </div>

        <div className="text-neutral-400 text-lg font-semibold leading-relaxed">
          — {customerName}
        </div>
      </div>

      <div className="w-full h-0 border-t border-lime-100"></div>
    </div>
  );
};

export default Card;
