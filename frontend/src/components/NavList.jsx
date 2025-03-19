import React from "react";

const NavList = ({ text }) => {
  return (
    <li>
      <a
        href="#"
        className="text-gray-800 transition-all duration-300 hover:text-[#0FA87D]"
      >
        {text}
      </a>
    </li>
  );
};

export default NavList;
