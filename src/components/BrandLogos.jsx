import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SiHonda, SiBmw, SiMercedes, SiAudi, SiFord, SiNissan, SiToyota, SiVolkswagen, SiPorsche } from 'react-icons/si';

const brands = [
  { name: 'Toyota', logo: <SiToyota size={80} /> },
  { name: 'Honda', logo: <SiHonda size={80} /> },
  { name: 'Ford', logo: <SiFord size={80} /> },
  { name: 'BMW', logo: <SiBmw size={80} /> },
  { name: 'Mercedes', logo: <SiMercedes size={80} /> },
  { name: 'Audi', logo: <SiAudi size={80} /> },
  { name: 'Nissan', logo: <SiNissan size={80} /> },
  { name: 'Volkswagen', logo: <SiVolkswagen size={80} /> },
  { name: 'Porsche', logo: <SiPorsche size={80} /> }
];

const BrandLogos = () => {
  const [activeButton, setActiveButton] = useState('brand');
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate total pages based on 7 logos per page
  const totalPages = Math.ceil(brands.length / 7);

  // Get logos for current page
  const currentLogos = brands.slice(currentPage * 7, (currentPage + 1) * 7);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-swipe effect
  useEffect(() => {
    const autoSwipeInterval = setInterval(() => {
      handleNextPage();
    }, 5000); // Swipe every 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(autoSwipeInterval);
  }, [currentPage]);

  return (
    <div className='container mx-auto py-12'>
      <div className='flex flex-col justify-center items-center h-[200px] space-y-4 text-center'>
        <h1 className='text-4xl font-bold'>
          Rent A car From <span className='text-[#a85349] font-bold'>Top Brands</span>
        </h1>
        <p className='text-sm md:text-base'>
          Get on a road trip now with the best deals for high-end cars manufactured by top automobile companies in the world.
        </p>
      </div>
      <div className='flex flex-wrap justify-between items-center mt-6'>
        {/* Buttons Section */}
        <div className="inline-flex overflow-hidden rounded-md border border-[#a85349]">
          <button
            className={`px-6 py-3 text-[#a85349] font-medium border-r border-[#a85349] ${
              activeButton === 'brand' ? 'bg-[#a85349] !text-white' : 'bg-white'
            }`}
            onClick={() => setActiveButton('brand')}
          >
            By Brands
          </button>
          <button
            className={`px-6 py-3 text-[#a85349] font-medium ${
              activeButton === 'type' ? 'bg-[#a85349] !text-white' : 'bg-white'
            }`}
            onClick={() => setActiveButton('type')}
          >
            By Type
          </button>
        </div>
        {/* Navigation and "All Brands" Button */}
        <div className='flex items-center space-x-2'>
          <motion.div 
            className='border border-[#a85349] rounded-md p-3 cursor-pointer hover:bg-gray-100'
            onClick={handlePrevPage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} color='#a85349' />
          </motion.div>
          <motion.div 
            className='border border-[#a85349] rounded-md p-3 cursor-pointer hover:bg-gray-100'
            onClick={handleNextPage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} color='#a85349' />
          </motion.div>
          <motion.button 
            className='flex items-center px-12 py-3 bg-[#a85349] text-white rounded-md hover:opacity-90 transition-opacity'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Brands →
          </motion.button>
        </div>
        {/* Brand Logos Section */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPage}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className='flex justify-center items-center gap-6 flex-wrap mt-10 w-full'
          >
            {currentLogos.map((brand, index) => (
              <motion.div 
                key={brand.name}
                className='flex flex-col items-center justify-center w-40 h-40 p-4 border rounded-lg 
                  hover:shadow-xl transition-all duration-300 cursor-pointer border-none 
                  hover:bg-slate-700 group'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className='mb-10 text-slate-600 group-hover:text-white transition-colors'>
                  {React.cloneElement(brand.logo, { 
                    color: 'currentColor', 
                    className: 'text-slate-600 group-hover:text-white transition-colors' 
                  })}
                </div>
                <span className='text-sm font-medium text-slate-600 group-hover:text-white transition-colors'>
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BrandLogos;