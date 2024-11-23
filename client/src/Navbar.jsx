import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse dark:text-white">
          <FontAwesomeIcon icon={faBriefcase} size="2x" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Portfolio
          </span>
        </a>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-white focus:outline-none dark:text-gray-400"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`lg:flex lg:space-x-4 ${
            isMenuOpen ? 'block' : 'hidden'
          } w-full lg:w-auto mt-4 lg:mt-0 transition-all duration-300 ease-in-out`}
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 lg:flex-row lg:space-x-8 rtl:space-x-reverse bg-gray-50 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent border lg:border-0 rounded-lg lg:rounded-none">
            <li>
              <a
                href="#Certification"
                className="block py-2 px-3 text-gray-900 hover:text-red-700 dark:text-white dark:hover:text-red-500"
              >
                Certification
              </a>
            </li>
            <li>
              <a
                href="#Service"
                className="block py-2 px-3 text-gray-900 hover:text-red-700 dark:text-white dark:hover:text-red-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Education"
                className="block py-2 px-3 text-gray-900 hover:text-red-700 dark:text-white dark:hover:text-red-500"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="block py-2 px-3 text-gray-900 hover:text-red-700 dark:text-white dark:hover:text-red-500"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#Experience"
                className="block py-2 px-3 text-gray-900 hover:text-red-700 dark:text-white dark:hover:text-red-500"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#Project"
                className="block py-2 px-3 text-gray-900 hover:text-red-700 dark:text-white dark:hover:text-red-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Skill"
                className="block py-2 px-3 text-gray-900 hover:text-red-700 dark:text-white dark:hover:text-red-500"
              >
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <hr />
      </>
  );
};

export default Navbar;

