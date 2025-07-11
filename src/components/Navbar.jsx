import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='sticky top-0 flex justify-between items-center h-16 bg-slate-700 text-white shadow-md z-50'>
      <div>
        <NavLink to="/">
          <img
            src={assets.mokex_logo}
            className='w-22 h-16'
            alt="mokex-logo"
          />
        </NavLink>
      </div>
      <div className='flex space-x-6 text-lg'>
        <NavLink
          to="/"
          className='hover:text-[#a85349] transition duration-300'
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className='hover:text-[#a85349] transition duration-300'
        >
          About
        </NavLink>
        <NavLink
          to="/brands"
          className='hover:text-[#a85349] transition duration-300'
        >
          Brands
        </NavLink>
        <NavLink
          to="/fleets"
          className='hover:text-[#a85349] transition duration-300'
        >
          Fleets
        </NavLink>
        <NavLink
          to="/offers"
          className='hover:text-[#a85349] transition duration-300'
        >
          Offers
        </NavLink>
        <NavLink
          to="/blogs"
          className='hover:text-[#a85349] transition duration-300'
        >
          Blogs
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;