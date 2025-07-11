import React, { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Calculate logos per page and total pages based on screen size
  const logosPerPage = isMobile ? 2 : 7;
  const totalPages = Math.ceil(brands.length / logosPerPage);

  // Get logos for current page
  const currentLogos = brands.slice(currentPage * logosPerPage, (currentPage + 1) * logosPerPage);

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
    }, 5000);

    return () => clearInterval(autoSwipeInterval);
  }, [currentPage, totalPages]);

  return (
    <div className='container mx-auto py-8 px-4'>
      {/* Header Section */}
      <div className='flex flex-col justify-center items-center space-y-4 text-center mb-8'>
        <h1 className='text-2xl md:text-4xl font-bold'>
          Rent A car From <span className='text-[#a85349] font-bold'>Top Brands</span>
        </h1>
        <p className='text-sm md:text-base max-w-3xl'>
          Get on a road trip now with the best deals for high-end cars manufactured by top automobile companies in the world.
        </p>
      </div>

      {/* Controls Section */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-8'>
        {/* Buttons Section */}
        <div className="inline-flex overflow-hidden rounded-md border border-[#a85349]">
          <button
            className={`px-4 md:px-6 py-3 text-[#a85349] font-medium border-r border-[#a85349] transition-colors ${
              activeButton === 'brand' ? 'bg-[#a85349] !text-white' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => setActiveButton('brand')}
          >
            By Brands
          </button>
          <button
            className={`px-4 md:px-6 py-3 text-[#a85349] font-medium transition-colors ${
              activeButton === 'type' ? 'bg-[#a85349] !text-white' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => setActiveButton('type')}
          >
            By Type
          </button>
        </div>

        {/* Navigation and "All Brands" Button */}
        <div className='flex items-center space-x-2'>
          <button 
            className='border border-[#a85349] rounded-md p-2 md:p-3 cursor-pointer hover:bg-gray-100 transition-all hover:scale-105'
            onClick={handlePrevPage}
          >
            <ChevronLeft size={isMobile ? 20 : 24} color='#a85349' />
          </button>
          <button 
            className='border border-[#a85349] rounded-md p-2 md:p-3 cursor-pointer hover:bg-gray-100 transition-all hover:scale-105'
            onClick={handleNextPage}
          >
            <ChevronRight size={isMobile ? 20 : 24} color='#a85349' />
          </button>
          <button 
            className='flex items-center px-6 md:px-12 py-2 md:py-3 bg-[#a85349] text-white rounded-md hover:opacity-90 transition-all hover:scale-105 text-sm md:text-base'
          >
            All Brands →
          </button>
        </div>
      </div>

      {/* Page Indicators */}
      <div className='flex justify-center space-x-2 mb-6'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              currentPage === index ? 'bg-[#a85349]' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>

      {/* Brand Logos Section */}
      <div className='relative overflow-hidden'>
        <div 
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <div 
              key={pageIndex}
              className={`flex-shrink-0 w-full ${
                isMobile 
                  ? 'grid grid-cols-2 gap-4' 
                  : 'flex justify-center items-center gap-4 md:gap-6 flex-wrap'
              }`}
            >
              {brands.slice(pageIndex * logosPerPage, (pageIndex + 1) * logosPerPage).map((brand, index) => (
                <div 
                  key={brand.name}
                  className={`flex flex-col items-center justify-center p-4 border rounded-lg 
                    hover:shadow-xl transition-all duration-300 cursor-pointer border-gray-200
                    hover:bg-slate-700 group ${
                      isMobile ? 'h-32' : 'w-32 md:w-40 h-32 md:h-40'
                    }`}
                >
                  <div className='mb-2 md:mb-4 text-slate-600 group-hover:text-white transition-colors'>
                    {React.cloneElement(brand.logo, { 
                      color: 'currentColor', 
                      className: 'text-slate-600 group-hover:text-white transition-colors' 
                    })}
                  </div>
                  <span className='text-xs md:text-sm font-medium text-slate-600 group-hover:text-white transition-colors text-center'>
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;