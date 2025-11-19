"use client";
import React, { useState, useEffect, useRef } from "react";
import { FiMoon } from "react-icons/fi";
import { LuSunMedium } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // The header is at mt-[58px] (navbar height) and has min-h-58
      // Show logo when scrolled past approximately 116px (58px navbar + 58px header minimum)
      const scrollThreshold = 150;
      setShowLogo(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div ref={navbarRef} className="fixed left-0 w-screen bg-white dark:bg-[#09090b] z-30 transition-colors duration-300">
      <div className="w-full border-y border-gray-200 dark:border-gray-900 mt-1.5 py-3 h-12">
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex justify-between items-center w-11/12 sm:w-9/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 px-4 text-gray-900 dark:text-white">
            {/* Logo on the left */}
            <div className={`font-jura text-4xl sm:text-5xl transition-all duration-300 ${
              showLogo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}>
              AG
            </div>

            {/* Desktop Navigation on the right */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <div className="font-jura flex space-x-4 lg:space-x-6 items-center">
                <span className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  Portfolio
                </span>
                <span className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  Projects
                </span>
                <span className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  Blogs
                </span>
              </div>
              <a
                href="https://github.com/agayushh/friday"
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <button
                onClick={toggleDarkMode}
                className="px-2 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <LuSunMedium size={18} /> : <FiMoon size={18} />}
              </button>
            </div>

            {/* Mobile Menu Button on the right */}
            <div className="flex md:hidden items-center space-x-3">
              <a
                href="https://github.com/agayushh/friday"
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <button
                onClick={toggleDarkMode}
                className="px-2 rounded-lg transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <LuSunMedium size={18} /> : <FiMoon size={18} />}
              </button>
              <button
                onClick={toggleMenu}
                className="text-gray-900 dark:text-white"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-12 left-0 w-full bg-white dark:bg-[#09090b] border-b border-gray-200 dark:border-gray-900 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col font-jura px-6 py-4 space-y-4">
          <span 
            className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </span>
          <span 
            className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </span>
          <span 
            className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
