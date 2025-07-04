import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavItem } from '../types';
import { COLORS } from '../constants';
import { MenuIcon, XIcon } from './IconComponents'; 
import logo from '../assets/images/logo.png';

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
  }, [location.pathname]);

  return (
    <nav className={`bg-${COLORS.bgWhite} shadow-md fixed w-full z-50 top-0 left-0`}>
      <div className="w-full px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 w-full">
          {/* Logo - always visible */}
          <Link to='/' className='text-xl md:text-2xl font-bold flex items-center'>
            <img
              src={logo}
              alt='Cloverdale Logo'
              className='h-14 md:h-20 w-auto'
            />
          </Link>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-end min-w-0">
            <div className="flex flex-wrap items-baseline space-x-2 sm:space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                    location.pathname === item.path
                      ? `bg-${COLORS.brandGreen} text-white`
                      : `text-${COLORS.textPrimary} hover:bg-gray-200 hover:text-${COLORS.brandBlue}`
                  } transition-colors duration-150`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md text-${COLORS.textPrimary} hover:text-white hover:bg-${COLORS.brandGreen} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden" onClick={toggleMenu} aria-hidden="true"></div>
          <div className={`fixed top-20 md:top-24 left-0 w-full shadow-lg z-50 lg:hidden animate-slide-down bg-${COLORS.bgWhite}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`block w-full px-4 py-3 rounded-md text-base font-medium text-center ${
                    location.pathname === item.path
                      ? `bg-${COLORS.brandGreen} text-white`
                      : `text-${COLORS.textPrimary} hover:bg-gray-200 hover:text-${COLORS.brandBlue}`
                  } transition-colors duration-150`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
