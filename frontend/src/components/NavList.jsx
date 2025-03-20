import React from "react";

const NavList = ({ text, onClick }) => {
  return (
    <li>
      <button
        className="text-gray-800 transition-all duration-300 hover:text-[#0FA87D] focus:outline-none cursor-pointer"
        onClick={onClick}
      >
        {text}
      </button>
    </li>
  );
};

export default NavList;
