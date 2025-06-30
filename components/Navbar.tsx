
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

  const Logo: React.FC = () => (
		<Link to='/' className='text-xl md:text-2xl font-bold'>
			<img
				src={logo}
				alt='Cloverdale Logo'
				className='h-10 md:h-12 w-auto'
			/>
		</Link>
	);

  return (
    <nav className={`bg-${COLORS.bgWhite} shadow-md fixed w-full z-50`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
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
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md text-${COLORS.textPrimary} hover:text-white hover:bg-${COLORS.brandGreen} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
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
      )}
    </nav>
  );
};

export default Navbar;
