import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from 'lucide-react';
import { assets } from "../assets/assets";

const TEXTS = [
  <>
    Explore Freedom with
    <span className="text-[#a85349] font-bold"> Seamless Car Rentals</span>
  </>,
  <>
    Drive Your Dream
    <span className="text-[#a85349] font-bold">
      Anytime, Anywhere
    </span>
  </>,
];

const items = [
  { backgroundImage: assets.hero_image },
  { backgroundImage: assets.hero_image2 },
];

const transitionDuration = 1;
const totalInterval = 10;

const SearchBox = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const dropdownOptions = {
      BRANDS: ['Toyota', 'Mercedes', 'BMW', 'Audi', 'Honda', 'Ford'],
      MODELS: ['Sedan', 'SUV', 'Hatchback', 'Convertible', 'Coupe', 'Van'],
      SEATS: [2, 4, 5, 6, 7, 8],
      YEAR: [2020, 2021, 2022, 2023, 2024, 2025],
      COLOR: ['White', 'Black', 'Silver', 'Red', 'Blue', 'Gray'],
      MIN_PRICE: [50, 100, 200, 300, 500, 1000],
      MAX_PRICE: [500, 1000, 2000, 3000, 5000, 10000],
      FEATURED: ['Luxury', 'Economy', 'Sports', 'Electric', 'Family', 'Off-road'],
  };

  const toggleDropdown = (dropdown) => {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileSearch = () => {
      setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  return (
      <>
          {/* Desktop Search Box */}
          <div className="hidden lg:block absolute bottom-4 left-0 right-0 z-20 px-12">
              <div className="bg-white/20 backdrop-blur-md rounded-lg shadow-lg py-6 px-4 grid grid-cols-8 gap-2">
                  {Object.keys(dropdownOptions).map((option) => (
                      <div key={option} className="relative">
                          <button
                              onClick={() => toggleDropdown(option)}
                              className="w-full flex justify-between items-center bg-gray-100 hover:bg-gray-200 p-3 text-lg rounded-md text-left"
                          >
                              <span className="font-medium text-gray-700 text-xs">{option.replace('_', ' ')}</span>
                              <ChevronDown
                                  size={14}
                                  className={`transform transition-transform duration-300 ${
                                      openDropdown === option ? 'rotate-180' : ''
                                  }`}
                              />
                          </button>
                          {openDropdown === option && (
                              <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg max-h-40 overflow-y-auto z-50">
                                  {dropdownOptions[option].map((item) => (
                                      <div
                                          key={item}
                                          className="px-2 py-1 text-xs hover:bg-gray-100 cursor-pointer"
                                      >
                                          {item}
                                      </div>
                                  ))}
                              </div>
                          )}
                      </div>
                  ))}

                  <div className="col-span-8 flex justify-center mt-2">
                      <button
                          className="bg-[#a85349] hover:bg-red-900 text-white font-bold py-3 px-4 rounded-md text-xs transition duration-300 ease-in-out transform hover:scale-105 shadow-sm hover:shadow-md"
                      >
                          SHOW CARS
                      </button>
                  </div>
              </div>
          </div>

          {/* Mobile Search Toggle Button */}
          <div className="lg:hidden absolute bottom-4 left-0 right-0 z-20 px-4">
              <button
                  onClick={toggleMobileSearch}
                  className="w-full bg-[#a85349] hover:bg-red-900 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                  <Search size={18} />
                  {isMobileSearchOpen ? 'Hide Search' : 'Search Cars'}
              </button>
          </div>

          {/* Mobile Search Box */}
          <AnimatePresence>
              {isMobileSearchOpen && (
                  <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      transition={{ duration: 0.3 }}
                      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md rounded-t-2xl shadow-2xl p-6 max-h-[70vh] overflow-y-auto"
                  >
                      <div className="grid grid-cols-2 gap-3 mb-4">
                          {Object.keys(dropdownOptions).map((option) => (
                              <div key={option} className="relative">
                                  <button
                                      onClick={() => toggleDropdown(option)}
                                      className="w-full flex justify-between items-center bg-gray-100 hover:bg-gray-200 p-3 rounded-md text-left"
                                  >
                                      <span className="font-medium text-gray-700 text-sm">{option.replace('_', ' ')}</span>
                                      <ChevronDown
                                          size={16}
                                          className={`transform transition-transform duration-300 ${
                                              openDropdown === option ? 'rotate-180' : ''
                                          }`}
                                      />
                                  </button>
                                  {openDropdown === option && (
                                      <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg max-h-40 overflow-y-auto z-50">
                                          {dropdownOptions[option].map((item) => (
                                              <div
                                                  key={item}
                                                  className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                              >
                                                  {item}
                                              </div>
                                          ))}
                                      </div>
                                  )}
                              </div>
                          ))}
                      </div>
                      <button
                          className="w-full bg-[#a85349] hover:bg-red-900 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                          SHOW CARS
                      </button>
                  </motion.div>
              )}
          </AnimatePresence>
      </>
  );
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoNextRef = useRef(null);

  useEffect(() => {
    autoNextRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, totalInterval * 1000);
    return () => clearInterval(autoNextRef.current);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Transition */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                zIndex: currentIndex === index ? 1 : 0,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: transitionDuration }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-center items-center lg:items-start space-y-8 w-full h-full px-4 sm:px-6 lg:px-12 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="flex flex-col space-y-4 sm:space-y-6 flex-1 max-w-xs sm:max-w-md lg:max-w-lg mt-8 sm:mt-10 lg:mt-24 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide leading-tight">
              {TEXTS[currentIndex]}
            </h1>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed">
              Unlock the ultimate driving experience with our premium car rental service.
              Flexible, convenient, and tailored to your journey. Choose from our
              wide range of vehicles and hit the road with confidence.
            </p>
            <button
              className="bg-[#a85349] hover:bg-orange-900 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 max-w-[160px] sm:max-w-[200px] shadow-lg hover:shadow-xl text-sm sm:text-base self-center lg:self-start"
            >
              Discover Now
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 w-32 sm:w-48 h-1 bg-gray-300/50">
          <motion.div
            className="h-full bg-[#a85349]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: totalInterval, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      </div>

      {/* Search Box */}
      <SearchBox />
    </div>
  );
};

export default Hero;