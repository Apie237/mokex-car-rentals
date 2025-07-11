import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SearchBox = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

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

  return (
    <div className="absolute z-50 w-full px-12 mt-20">
      <div className="bg-white/90 rounded-xl shadow-2xl p-2 grid grid-cols-1 gap-4"> {/* Single column layout */}
        {Object.keys(dropdownOptions).map((option) => (
          <div key={option} className="relative">
            <button
              onClick={() => toggleDropdown(option)}
              className="w-full flex justify-between items-center bg-gray-100 hover:bg-gray-200 p-2 rounded-lg text-left" // Reduced padding
            >
              <span className="font-semibold text-gray-700 text-sm">{option.replace('_', ' ')}</span> {/* Smaller text */}
              <ChevronDown
                className={`transform transition-transform duration-300 ${
                  openDropdown === option ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openDropdown === option && (
              <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg max-h-40 overflow-y-auto"> {/* Reduced height */}
                {dropdownOptions[option].map((item) => (
                  <div
                    key={item}
                    className="px-3 py-1 text-sm hover:bg-gray-100 cursor-pointer" // More compact spacing
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        <div className="flex justify-center mt-4">
          <button
            className="bg-[#9B4F0F] hover:bg-orange-900 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl text-sm" // Smaller button
          >
            SHOW CARS
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;