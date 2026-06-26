"use client";
import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { FiMoon } from "react-icons/fi";
import { LuSunMedium } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { ScrollProgress } from "@/components/scroll-progress";

const Navbar = () => {
  // Initialize with a function to read localStorage on first render
  const [darkMode, setDarkMode] = useState(() => {
    // This runs only on client-side during initial render
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      return theme !== "light"; // Default to dark mode
    }
    return true; // Server-side default
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  // Sync with system preference or localStorage on mount
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const isDark = theme !== "light";
    setDarkMode(isDark);

    // Apply the class to ensure consistency
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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

  const toggleDarkMode = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const isAppearanceTransition =
      typeof document !== "undefined" &&
      // @ts-ignore
      document.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const performToggle = (nextMode: boolean) => {
      if (nextMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    };

    if (!isAppearanceTransition) {
      const nextMode = !darkMode;
      setDarkMode(nextMode);
      performToggle(nextMode);
      return;
    }

    const x = event ? event.clientX : window.innerWidth / 2;
    const y = event ? event.clientY : window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        const nextMode = !darkMode;
        setDarkMode(nextMode);
        performToggle(nextMode);
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 400,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 58; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div
      ref={navbarRef}
      className="fixed top-0 left-0 w-screen bg-white dark:bg-[#09090b] z-50 transition-colors duration-300"
    >
      <ScrollProgress />
      <div className="w-full border-y mt-1.5 py-3 h-12">
        <div className="flex justify-center items-center w-full h-full">
          <div className="flex justify-between items-center w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 px-4 text-gray-900 dark:text-white transition-all duration-300 ease-in-out">
            {/* Logo on the left */}
            <div
              className={`font-jura text-4xl sm:text-5xl transition-all duration-300 ${
                showLogo
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              AG
            </div>

            {/* Desktop Navigation on the right */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <div className="font-jura flex space-x-4 lg:space-x-6 items-center">
                <span className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  <a
                    href="https://drive.google.com/file/d/118Fjl7KgCKGMMohqkmRFh_UUGBit5X8Q/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </span>
                <span
                  className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  onClick={() => scrollToSection("projects")}
                >
                  Projects
                </span>
                <span
                  className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  onClick={() => scrollToSection("experience")}
                >
                  Experience
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
                className="rounded-lg transition-all duration-300"
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
        className={`md:hidden absolute top-12 left-0 w-full bg-white dark:bg-[#09090b] border-b shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col font-jura px-6 py-4 space-y-4">
          <span
            className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <a
              href="https://drive.google.com/file/d/118Fjl7KgCKGMMohqkmRFh_UUGBit5X8Q/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </span>
          <span
            className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </span>
          <span
            className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
