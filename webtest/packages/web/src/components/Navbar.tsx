import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-700 dark:to-secondary-700 h-20 flex justify-center items-center text-xl sticky top-0 z-[999] shadow-md">
      <div className="flex justify-between items-center w-full max-w-7xl px-12">
        <Link
          to="/"
          className="text-white cursor-pointer no-underline text-3xl font-bold flex items-center hover:text-gray-100 transition-colors"
          onClick={closeMenu}
        >
          Y.HN
        </Link>

        <div className="flex items-center gap-2.5">
          <ul className={`
            flex items-center list-none text-center m-0 p-0 gap-1.5
            max-md:flex-col max-md:w-full max-md:absolute max-md:top-20
            max-md:bg-gradient-to-r max-md:from-primary-500 max-md:to-secondary-500
            dark:max-md:from-primary-700 dark:max-md:to-secondary-700
            max-md:transition-all max-md:duration-500
            ${isMenuOpen ? 'max-md:left-0 max-md:opacity-100' : 'max-md:-left-full max-md:opacity-0'}
          `}>
            <li className="h-20 flex items-center max-md:w-full max-md:h-15">
              <Link
                to="/"
                className="text-white no-underline px-6 py-2 h-full flex items-center transition-all hover:bg-white/10 hover:rounded"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="h-20 flex items-center max-md:w-full max-md:h-15">
              <Link
                to="/about"
                className="text-white no-underline px-6 py-2 h-full flex items-center transition-all hover:bg-white/10 hover:rounded"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="h-20 flex items-center max-md:w-full max-md:h-15">
              <Link
                to="/services"
                className="text-white no-underline px-6 py-2 h-full flex items-center transition-all hover:bg-white/10 hover:rounded"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li className="h-20 flex items-center max-md:w-full max-md:h-15">
              <Link
                to="/contact"
                className="text-white no-underline px-6 py-2 h-full flex items-center transition-all hover:bg-white/10 hover:rounded"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="h-20 flex items-center max-md:w-full max-md:h-15">
              <a
                href="http://localhost:3001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline px-6 py-2 h-full flex items-center transition-all hover:bg-white/10 hover:rounded"
                onClick={closeMenu}
              >
                Admin
              </a>
            </li>
            <li className="h-20 flex items-center ml-2.5 max-md:w-full max-md:h-15 max-md:ml-0">
              <ThemeToggle />
            </li>
          </ul>

          <div
            className="hidden max-md:block cursor-pointer px-5"
            onClick={toggleMenu}
          >
            <div className="w-8 h-6 relative cursor-pointer flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white rounded transition-all ${isMenuOpen ? 'rotate-45 translate-x-2 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white rounded transition-all ${isMenuOpen ? '-rotate-45 translate-x-2 -translate-y-2' : ''}`}></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
