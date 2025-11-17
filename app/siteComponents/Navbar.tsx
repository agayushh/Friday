"use client";
import React, { useState, useEffect } from "react";
import { FiMoon } from "react-icons/fi";
import { LuSunMedium } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="fixed left-0 flex justify-center items-center w-screen bg-white dark:bg-[#09090b] z-30 transition-colors duration-300">
      <div className="flex justify-center items-center mt-1.5 space-x-12 border-y border-gray-200 dark:border-gray-900 py-3 w-screen text-gray-900 dark:text-white h-12">
        <div className="w-[700px] flex justify-between items-center">
          <div className="md:ml-5 ml-9 font-jura text-5xl"> AG</div>
          <div className="flex ml-20 items-center">
            <div className="font-jura flex justify-between mitems-center w-48">
              <span>Portfolio</span>
              <span>Projects</span>
              <span>Blogs</span>
            </div>
            <span className="ml-4">
              <a href="https://github.com/agayushh/friday">
                <FaGithub size={18} />
              </a>
            </span>
            <button
              onClick={toggleDarkMode}
              className="ml-4 px-3 rounded-lg transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <LuSunMedium size={18} /> : <FiMoon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
