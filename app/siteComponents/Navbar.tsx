"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

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
    <div className="fixed left-[-10px] flex justify-center items-center w-screen bg-white dark:bg-[#09090b] z-30 transition-colors duration-300">
      <ul className="flex justify-center items-center mt-1.5 space-x-12 border-y border-gray-200 dark:border-gray-900 py-3 w-screen text-gray-900 dark:text-white">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
