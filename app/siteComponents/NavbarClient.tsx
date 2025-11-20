"use client";

import { useState, useEffect, useRef } from "react";
import { FiMoon } from "react-icons/fi";
import { LuSunMedium } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavbarClient() {
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
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
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
      const scrollThreshold = 150;
      setShowLogo(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      ref={navbarRef}
      className="h-[58px] sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b"
    >
      <div className="flex justify-between items-center h-full px-4">
        {/* Logo with animation */}
        <div
          className={`transition-all duration-300 ${
            showLogo
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4 pointer-events-none"
          }`}
        >
          <div className="text-xl font-jura tracking-tight text-black dark:text-white">
            Chánh Đại <span className="text-gray-600 dark:text-gray-400">/ ayush</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#about"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="https://github.com/agayushh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <button
            onClick={toggleDarkMode}
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <LuSunMedium size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <LuSunMedium size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <a
            href="#about"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="https://github.com/agayushh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors flex items-center"
          >
            <FaGithub size={20} className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
