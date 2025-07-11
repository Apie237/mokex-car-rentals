import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='sticky top-0 bg-slate-700 text-white shadow-md z-50'>
      <div className='flex justify-between items-center h-16 px-4 md:px-6 lg:px-8'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <NavLink to="/" onClick={closeMenu}>
            <img
              src={assets.mokex_logo}
              className='w-22 h-16'
              alt="mokex-logo"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-6 text-lg'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[#a85349] transition duration-300 ${
                isActive ? 'text-[#a85349]' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-[#a85349] transition duration-300 ${
                isActive ? 'text-[#a85349]' : ''
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              `hover:text-[#a85349] transition duration-300 ${
                isActive ? 'text-[#a85349]' : ''
              }`
            }
          >
            Brands
          </NavLink>
          <NavLink
            to="/fleets"
            className={({ isActive }) =>
              `hover:text-[#a85349] transition duration-300 ${
                isActive ? 'text-[#a85349]' : ''
              }`
            }
          >
            Fleets
          </NavLink>
          <NavLink
            to="/offers"
            className={({ isActive }) =>
              `hover:text-[#a85349] transition duration-300 ${
                isActive ? 'text-[#a85349]' : ''
              }`
            }
          >
            Offers
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `hover:text-[#a85349] transition duration-300 ${
                isActive ? 'text-[#a85349]' : ''
              }`
            }
          >
            Blogs
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white hover:text-[#a85349] focus:outline-none focus:text-[#a85349] transition duration-300'
            aria-label='Toggle menu'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='px-4 pt-2 pb-4 space-y-2 bg-slate-800'>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-base font-medium hover:text-[#a85349] hover:bg-slate-700 rounded-md transition duration-300 ${
                isActive ? 'text-[#a85349] bg-slate-700' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-base font-medium hover:text-[#a85349] hover:bg-slate-700 rounded-md transition duration-300 ${
                isActive ? 'text-[#a85349] bg-slate-700' : ''
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/brands"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-base font-medium hover:text-[#a85349] hover:bg-slate-700 rounded-md transition duration-300 ${
                isActive ? 'text-[#a85349] bg-slate-700' : ''
              }`
            }
          >
            Brands
          </NavLink>
          <NavLink
            to="/fleets"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-base font-medium hover:text-[#a85349] hover:bg-slate-700 rounded-md transition duration-300 ${
                isActive ? 'text-[#a85349] bg-slate-700' : ''
              }`
            }
          >
            Fleets
          </NavLink>
          <NavLink
            to="/offers"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-base font-medium hover:text-[#a85349] hover:bg-slate-700 rounded-md transition duration-300 ${
                isActive ? 'text-[#a85349] bg-slate-700' : ''
              }`
            }
          >
            Offers
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-base font-medium hover:text-[#a85349] hover:bg-slate-700 rounded-md transition duration-300 ${
                isActive ? 'text-[#a85349] bg-slate-700' : ''
              }`
            }
          >
            Blogs
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;