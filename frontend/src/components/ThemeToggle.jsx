import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-9 flex items-center rounded-full p-1 transition-all cursor-pointer
        ${isDark ? "bg-gray-800" : "bg-green-100"}`}
    >
      <div
        className={`absolute w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center transition-all
          ${isDark ? "translate-x-7" : "translate-x-0"}`}
      >
        <FontAwesomeIcon
          icon={isDark ? faMoon : faSun}
          className="text-yellow-500"
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
