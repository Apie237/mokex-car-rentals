import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FaGasPump, FaUserFriends, FaCar, FaSuitcase, FaPhone, FaWhatsapp, FaInfoCircle, FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import {all_cars} from "../assets/assets"

// Lazy Image Component with placeholder
const LazyImage = ({ src, alt, className, onClick, onLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of image is visible
        rootMargin: '50px' // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {/* Placeholder while loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      {inView && (
        <img
          src={imageError ? "default-image.png" : src}
          alt={alt}
          className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onClick={onClick}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
      )}
    </div>
  );
};

const CarTypesDisplay = () => {
  const navigate = useNavigate();
  
  // State to track current slide for each category
  const [categorySlides, setCategorySlides] = useState({});
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [screenSize, setScreenSize] = useState('large');
  
  // Check screen size and set appropriate breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile'); // Show 1 car
      } else if (width < 1024) {
        setScreenSize('tablet'); // Show 2 cars
      } else {
        setScreenSize('desktop'); // Show 3 cars
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const handleImageClick = (carName) => {
    navigate(`/cars/${encodeURIComponent(carName)}`);
  };

  const carCategories = {
    Luxury: all_cars.filter(car => car.type === "Luxury"),
    Convertible: all_cars.filter(car => car.type === "Convertible"),
    SUV: all_cars.filter(car => car.type === "SUV"),
  };

  // Get number of cars to show per slide based on screen size
  const getCarsPerSlide = () => {
    switch(screenSize) {
      case 'mobile': return 1;
      case 'tablet': return 2;
      case 'desktop': return 3;
      default: return 3;
    }
  };

  // Get slide width percentage
  const getSlideWidth = () => {
    switch(screenSize) {
      case 'mobile': return 100;
      case 'tablet': return 50;
      case 'desktop': return 33.33;
      default: return 33.33;
    }
  };
  
  // Preload critical images (first visible images)
  useEffect(() => {
    const preloadCriticalImages = () => {
      Object.values(carCategories).forEach(cars => {
        // Preload first few images of each category (initially visible)
        const carsToPreload = getCarsPerSlide();
        cars.slice(0, carsToPreload).forEach(car => {
          if (car?.carImage?.[0]) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = car.carImage[0];
            link.as = 'image';
            document.head.appendChild(link);
          }
        });
      });
    };

    preloadCriticalImages();
  }, [screenSize]);
  
  // Initialize slide state for each category
  useEffect(() => {
    const initialSlides = {};
    Object.keys(carCategories).forEach(category => {
      initialSlides[category] = 0;
    });
    setCategorySlides(initialSlides);
    
    // Set up automatic sliding
    const slideInterval = setInterval(() => {
      setCategorySlides(prevSlides => {
        const newSlides = { ...prevSlides };
        Object.keys(carCategories).forEach(category => {
          const totalCars = carCategories[category].length;
          const carsPerSlide = getCarsPerSlide();
          const maxSlide = Math.max(0, totalCars - carsPerSlide);
          if (maxSlide > 0) {
            newSlides[category] = (prevSlides[category] + 1) % (maxSlide + 1);
          }
        });
        return newSlides;
      });
    }, 4000);
    
    return () => clearInterval(slideInterval);
  }, [screenSize]);
  
  const handlePrevSlide = (category) => {
    setCategorySlides(prevSlides => {
      const totalCars = carCategories[category].length;
      const carsPerSlide = getCarsPerSlide();
      const maxSlide = Math.max(0, totalCars - carsPerSlide);
      return {
        ...prevSlides,
        [category]: prevSlides[category] === 0 ? maxSlide : prevSlides[category] - 1
      };
    });
  };
  
  const handleNextSlide = (category) => {
    setCategorySlides(prevSlides => {
      const totalCars = carCategories[category].length;
      const carsPerSlide = getCarsPerSlide();
      const maxSlide = Math.max(0, totalCars - carsPerSlide);
      return {
        ...prevSlides,
        [category]: (prevSlides[category] + 1) % (maxSlide + 1)
      };
    });
  };

  const viewAllCategory = (category) => {
    navigate(`/category/${encodeURIComponent(category.toLowerCase())}`);
  };

  const handleImageLoad = useCallback(() => {
    setImagesLoaded(prev => prev + 1);
  }, []);

  return (
    <div className="mx-0 w-full bg-white">
      {Object.entries(carCategories).map(([category, cars]) => {
        const carsPerSlide = getCarsPerSlide();
        const slideWidth = getSlideWidth();
        const totalCars = cars.length;
        const showNavButtons = totalCars > carsPerSlide;
        
        return (
          <div key={category} className="mb-16 px-4 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#9a4b3f] mb-2">{category}</h2>
                <p className="text-gray-600 text-sm md:text-base">Treat yourself to a once in a lifetime experience and take advantage of our elite weekly promotions today</p>
              </div>
              <button 
                onClick={() => viewAllCategory(category)}
                className="hidden md:flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded hover:bg-slate-700 flex-shrink-0"
              >
                Discover All {category} FLEET <FaArrowRight className="ml-2" />
              </button>
            </div>
            
            <div className="relative">
              {showNavButtons && (
                <>
                  <button 
                    onClick={() => handlePrevSlide(category)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 text-white p-2 md:p-3 rounded-none hover:bg-slate-700/80 transition-colors"
                  >
                    <FaChevronLeft className="text-sm md:text-base" />
                  </button>
                  <button 
                    onClick={() => handleNextSlide(category)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 text-white p-2 md:p-3 rounded-none hover:bg-slate-700/80 transition-colors"
                  >
                    <FaChevronRight className="text-sm md:text-base" />
                  </button>
                </>
              )}
              
              {/* Slider container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out" 
                  style={{ 
                    transform: `translateX(-${categorySlides[category] * slideWidth}%)` 
                  }}
                >
                  {cars.map((car, index) => (
                    <div 
                      key={car._id || `${car.name}-${car.features?.model}-${car.prices?.oneDayPrice}-${index}`}
                      className={`flex-shrink-0 px-2 ${
                        screenSize === 'mobile' ? 'w-full' : 
                        screenSize === 'tablet' ? 'w-1/2' : 'w-1/3'
                      }`}
                    >
                      <div className="overflow-hidden border rounded border-gray-300 shadow-lg bg-white h-full">
                        <div className="relative">
                          <LazyImage
                            src={car?.carImage?.[0] || "default-image.png"}
                            alt={car?.name || "Car image"}
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover transition-transform duration-200 ease-in-out hover:scale-105 hover:brightness-90 cursor-pointer"
                            onClick={() => handleImageClick(car.name)}
                            onLoad={handleImageLoad}
                          />
                          
                          {/* Tags styling */}
                          <div className="absolute top-2 left-2 flex flex-col gap-1 sm:flex-row sm:gap-2">
                            {car?.isNew && (
                              <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">NEW</span>
                            )}
                            {car?.isHighDemand && (
                              <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">HIGH DEMAND</span>
                            )}
                            {car?.isSpecialOffer && (
                              <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">SPECIAL OFFER</span>
                            )}
                          </div>
                        </div>
                        <div>
                          <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold bg-slate-600 text-white p-3 md:p-4 lg:p-6">
                            {car?.name || "Car Name"} - <span className="text-[#a85349]">{car?.features?.model || "Model Info"}</span>
                          </h2>
                          
                          {/* Pricing section */}
                          <div className="p-3 md:p-4 text-center">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-center text-xs items-center">
                              <div>
                                <div className="font-bold text-sm md:text-lg">{car?.prices?.hourlyPrice || "N/A"}</div>
                                <div className="text-xs">AED-HOUR</div>
                              </div>
                              <div>
                                <div className="font-bold text-sm md:text-lg">{car?.prices?.oneDayPrice || "N/A"}</div>
                                <div className="text-xs">AED-DAY</div>
                              </div>
                              <div>
                                <div className="font-bold text-sm md:text-lg">{car?.prices?.sevenDaysPrice || "N/A"}</div>
                                <div className="text-xs">AED-WEEK</div>
                              </div>
                              <div>
                                <div className="font-bold text-sm md:text-lg">{car?.prices?.thirtyDaysPrice || "N/A"}</div>
                                <div className="text-xs">AED-MONTH</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Color display section */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 px-3 md:px-4">
                            {/* Exterior Color */}
                            <div className="bg-gray-200 border p-2 text-center text-xs md:text-sm flex items-center justify-center gap-2">
                              <span className="hidden sm:inline">Exterior Color:</span>
                              <span className="sm:hidden">Exterior:</span>
                              {car?.features?.exteriorColor?.includes("&")
                                ? car.features.exteriorColor.split("&").map((color, colorIndex) => (
                                    <div
                                      key={colorIndex}
                                      className="w-4 h-4 md:w-6 md:h-6 rounded-full border border-gray-300"
                                      style={{ backgroundColor: color.trim() }}
                                    ></div>
                                  ))
                                : (
                                    <div
                                      className="w-4 h-4 md:w-6 md:h-6 rounded-full border border-gray-300"
                                      style={{ backgroundColor: car?.features?.exteriorColor }}
                                    ></div>
                                  )}
                            </div>

                            {/* Interior Color */}
                            <div className="bg-gray-200 border p-2 text-center text-xs md:text-sm flex items-center justify-center gap-2">
                              <span className="hidden sm:inline">Interior Color:</span>
                              <span className="sm:hidden">Interior:</span>
                              {car?.features?.interiorColor?.includes("&")
                                ? car.features.interiorColor.split("&").map((color, colorIndex) => (
                                    <div
                                      key={colorIndex}
                                      className="w-4 h-4 md:w-6 md:h-6 rounded-full border border-gray-300"
                                      style={{ backgroundColor: color.trim() }}
                                    ></div>
                                  ))
                                : (
                                    <div
                                      className="w-4 h-4 md:w-6 md:h-6 rounded-full border border-gray-300"
                                      style={{ backgroundColor: car?.features?.interiorColor }}
                                    ></div>
                                  )}
                            </div>
                          </div>
                          
                          {/* Car features section */}
                          <div className="flex justify-around text-xs md:text-sm mt-4 border-t pt-3 text-gray-700 px-3 md:px-4">
                            <div className="flex items-center gap-1">
                              <FaCar className="text-xs md:text-sm" /> <span className="hidden sm:inline">{car?.features?.transition || "N/A"}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaGasPump className="text-xs md:text-sm" /> <span className="hidden sm:inline">{car?.features?.fuel || "N/A"}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaUserFriends className="text-xs md:text-sm" /> <span className="hidden sm:inline">{car?.features?.seats || "N/A"}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaSuitcase className="text-xs md:text-sm" /> <span className="hidden sm:inline">{car?.features?.luggage || "N/A"}</span>
                            </div>
                          </div>
                          
                          {/* Action buttons */}
                          <div className="flex justify-between mt-4 gap-1 p-3 md:p-4 pt-0">
                            <button className="flex items-center justify-center gap-1 md:gap-2 text-white bg-slate-600 px-2 md:px-4 py-2 rounded w-1/3 hover:bg-[#a85349] transition-colors text-xs md:text-sm">
                              <FaWhatsapp className="text-xs md:text-sm" /> <span className="hidden sm:inline">WhatsApp</span>
                            </button>
                            <button className="flex items-center justify-center gap-1 md:gap-2 text-white bg-slate-600 px-2 md:px-4 py-2 rounded w-1/3 hover:bg-[#a85349] transition-colors text-xs md:text-sm">
                              <FaPhone className="transform rotate-180 text-xs md:text-sm" /> <span className="hidden sm:inline">Call</span>
                            </button>
                            <button className="flex items-center justify-center gap-1 md:gap-2 text-white bg-slate-600 px-2 md:px-4 py-2 rounded w-1/3 hover:bg-[#a85349] transition-colors text-xs md:text-sm">
                              <FaInfoCircle className="text-xs md:text-sm" /> <span className="hidden sm:inline">Details</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => viewAllCategory(category)}
              className="flex md:hidden items-center justify-center gap-2 bg-slate-800 text-white px-6 py-3 rounded w-full mt-6 hover:bg-slate-700 transition-colors"
            >
              Discover All {category} FLEET <FaArrowRight />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CarTypesDisplay;