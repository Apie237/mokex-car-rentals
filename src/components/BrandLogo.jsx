import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  SiHonda, SiBmw, SiMercedes, SiAudi, 
  SiFord, SiNissan, SiToyota, SiVolkswagen, SiPorsche 
} from 'react-icons/si';

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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(brands.length / itemsPerPage);
  const currentLogos = brands.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const autoSwipeInterval = setInterval(handleNextPage, 5000);
    return () => clearInterval(autoSwipeInterval);
  }, [currentPage]);

  return (
    <div className='container mx-auto py-10'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-bold'>
          OUR <span className='text-[#a85349]'>BRANDS</span>
        </h2>
        <div className='flex items-center space-x-2'>
          <motion.div 
            className='border border-[#a85349] rounded-md p-2 cursor-pointer hover:bg-gray-100'
            onClick={handlePrevPage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={18} color='#a85349' />
          </motion.div>
          <motion.div 
            className='border border-[#a85349] rounded-md p-2 cursor-pointer hover:bg-gray-100'
            onClick={handleNextPage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={18} color='#a85349' />
          </motion.div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentPage}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ 
            type: "spring", 
            stiffness: 100,  // Lower stiffness for slower transition
            damping: 20,
            duration: 1  // Added duration for even more control
          }}
          className='flex justify-center items-center gap-8 flex-wrap mt-6 w-full'
        >
          {currentLogos.map((brand) => (
            <motion.div 
              key={brand.name}
              className='flex flex-col items-center justify-center w-24 h-24 p-6 border rounded-lg 
                hover:shadow-xl transition-all duration-300 cursor-pointer border-none 
                hover:bg-slate-700 group'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='mb-2 text-slate-600 group-hover:text-white transition-colors'>
                {React.cloneElement(brand.logo, { 
                  color: 'currentColor', 
                  className: 'text-slate-600 group-hover:text-white transition-colors text-4xl' 
                })}
              </div>
              <span className='text-xs font-medium text-slate-600 group-hover:text-white transition-colors'>
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BrandLogos;