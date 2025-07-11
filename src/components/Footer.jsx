import React from 'react';
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';

// Simple NavLink replacement for demo
const NavLink = ({ to, children, className }) => (
  <a href={to} className={className}>
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="w-32">
              <svg viewBox="0 0 200 100" className="fill-white">
                <path d="M40,30 L10,80 L30,80 L50,50 L70,80 L90,80 L60,30 Z" />
                <path d="M100,30 L70,80 L90,80 L110,50 L130,80 L150,80 L120,30 Z" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">MOKEX</h2>
            </div>
            <div className="bg-red-400 bg-opacity-20 border-l-4 border-red-500 p-3">
              <p className="text-sm">
                Mokex Rent a Car is a trusted car rental company based in Dubai, UAE. Since its inception, it has grown into a leading brand, offering reliable and affordable car rental services across the city.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-medium text-yellow-400 mb-4">QUICK LINKS</h3>
            <div className="space-y-2">
              {['/', '/about-us', '/fleet', '/offers', '/vip-services', '/faqs'].map((path, index) => (
                <div
                  key={index}
                  className="transform hover:rotate-1 hover:translate-x-1 transition-transform duration-300"
                >
                  <NavLink
                    to={path}
                    className="flex items-center hover:text-yellow-400 transition-colors text-sm md:text-base"
                  >
                    <span className="text-yellow-400 mr-2">»</span>
                    {path.replace('/', '').replace('-', ' ') || 'Home'}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>

          {/* Support and Info */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-medium text-yellow-400 mb-4">SUPPORT AND INFO</h3>
            <div className="space-y-2">
              {['/contact-us', '/sitemap', '/cancellation-policy', '/privacy-policy', '/terms-and-conditions'].map((path, index) => (
                <div
                  key={index}
                  className="transform hover:rotate-1 hover:translate-x-1 transition-transform duration-300"
                >
                  <NavLink
                    to={path}
                    className="flex items-center hover:text-yellow-400 transition-colors text-sm md:text-base"
                  >
                    <span className="text-yellow-400 mr-2">»</span>
                    {path.replace('/', '').replace('-', ' ')}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>

          {/* Media Center & Newsletter */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            {/* Media Center */}
            <div>
              <h3 className="text-lg md:text-xl font-medium text-yellow-400 mb-4">MEDIA CENTER</h3>
              <div className="transform hover:rotate-1 hover:translate-x-1 transition-transform duration-300">
                <NavLink
                  to="/blogs"
                  className="flex items-center hover:text-yellow-400 transition-colors text-sm md:text-base"
                >
                  <span className="text-yellow-400 mr-2">»</span>
                  Blogs
                </NavLink>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg md:text-xl font-medium text-yellow-400 mb-4">NEWSLETTER</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email ..."
                  className="px-4 py-2 bg-white text-gray-800 flex-grow rounded sm:rounded-l sm:rounded-r-none text-sm md:text-base"
                />
                <button className="bg-gray-800 text-white px-4 py-2 rounded sm:rounded-r sm:rounded-l-none hover:bg-gray-700 transition-colors text-sm md:text-base">
                  Submit
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg md:text-xl font-medium text-yellow-400 mb-4">FOLLOW US</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  { icon: FaFacebookF, link: "#" },
                  { icon: FaInstagram, link: "#" },
                  { icon: FaSnapchatGhost, link: "#" },
                  { icon: FaLinkedinIn, link: "#" },
                  { icon: FaYoutube, link: "#" },
                  { icon: FaTiktok, link: "#" },
                ].map(({ icon: Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    className="hover:text-yellow-400 transition-all duration-300 transform hover:rotate-1 hover:translate-x-1 p-2 rounded-full hover:bg-gray-600"
                  >
                    <Icon size={18} className="md:text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-4 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base">
              Copyright © 2025 MOKEX. All rights reserved - Powered By Apie 237
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm md:text-base">Payment Available</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;