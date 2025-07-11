import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="w-32">
              <svg viewBox="0 0 200 100" className="fill-white">
                <path d="M40,30 L10,80 L30,80 L50,50 L70,80 L90,80 L60,30 Z" />
                <path d="M100,30 L70,80 L90,80 L110,50 L130,80 L150,80 L120,30 Z" />
              </svg>
              <h2 className="text-3xl font-bold mt-2">MOKEX</h2>
            </div>
            <div className="bg-red-400 bg-opacity-20 border-l-4 border-red-500 p-3">
              <p className="text-sm">
                Mokex Rent a Car is a trusted car rental company based in Dubai, UAE. Since its inception, it has grown into a leading brand, offering reliable and affordable car rental services across the city.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium text-yellow-400 mb-4">QUICK LINKS</h3>
            <div className="space-y-2">
              {['/', '/about-us', '/fleet', '/offers', '/vip-services', '/faqs'].map((path, index) => (
                <motion.div
                  key={index}
                  whileHover={{ rotate: 3, x: 5 }} // Subtle tilt and right shift
                  transition={{ type: "tween", duration: 0.3 }} // Smooth transition
                >
                  <NavLink
                    to={path}
                    className="flex items-center hover:text-yellow-400 transition-colors"
                  >
                    <span className="text-yellow-400 mr-2">»</span>
                    {path.replace('/', '').replace('-', ' ') || 'Home'}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Support and Info */}
          <div>
            <h3 className="text-xl font-medium text-yellow-400 mb-4">SUPPORT AND INFO</h3>
            <div className="space-y-2">
              {['/contact-us', '/sitemap', '/cancellation-policy', '/privacy-policy', '/terms-and-conditions'].map((path, index) => (
                <motion.div
                  key={index}
                  whileHover={{ rotate: 3, x: 5 }} // Subtle tilt and right shift
                  transition={{ type: "tween", duration: 0.3 }} // Smooth transition
                >
                  <NavLink
                    to={path}
                    className="flex items-center hover:text-yellow-400 transition-colors"
                  >
                    <span className="text-yellow-400 mr-2">»</span>
                    {path.replace('/', '').replace('-', ' ')}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Media Center & Newsletter */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-yellow-400 mb-4">MEDIA CENTER</h3>
              <motion.div
                whileHover={{ rotate: 3, x: 5 }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <NavLink
                  to="/blogs"
                  className="flex items-center hover:text-yellow-400 transition-colors"
                >
                  <span className="text-yellow-400 mr-2">»</span>
                  Blogs
                </NavLink>
              </motion.div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-yellow-400 mb-4">NEWSLETTER</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email ..."
                  className="px-4 py-2 bg-white text-gray-800 flex-grow rounded-l"
                />
                <button className="bg-gray-800 text-white px-4 py-2 rounded-r">
                  Submit
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-yellow-400 mb-4">FOLLOW US</h3>
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebookF, link: "#" },
                  { icon: FaInstagram, link: "#" },
                  { icon: FaSnapchatGhost, link: "#" },
                  { icon: FaLinkedinIn, link: "#" },
                  { icon: FaYoutube, link: "#" },
                  { icon: FaTiktok, link: "#" },
                ].map(({ icon: Icon, link }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    className="hover:text-yellow-400 transition-colors"
                    whileHover={{ rotate: 3, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-4 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p>Copyright © 2025 MOKEX. All rights reserved - Powered By Apie 237</p>
          </div>
          <div>
            <p>Payment Available</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;