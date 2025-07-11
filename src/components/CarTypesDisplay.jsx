  import React, { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import { FaGasPump, FaUserFriends, FaCar, FaSuitcase, FaPhone, FaWhatsapp, FaInfoCircle, FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
  import { assets, all_cars } from "../assets/assets";

  const CarTypesDisplay = () => {
    const navigate = useNavigate();
    
    // State to track current slide for each category
    const [categorySlides, setCategorySlides] = useState({});
    
    const handleImageClick = (carName) => {
      navigate(`/cars/${encodeURIComponent(carName)}`);
    };

    const carCategories = {
      Luxury: all_cars.filter(car => car.type === "Luxury"),
      Convertible: all_cars.filter(car => car.type === "Convertible"),
      SUV: all_cars.filter(car => car.type === "SUV"),
    };
    
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
            const maxSlide = Math.max(0, totalCars - 3);
            newSlides[category] = (prevSlides[category] + 1) % (maxSlide + 1);
          });
          return newSlides;
        });
      }, 4000);
      
      return () => clearInterval(slideInterval);
    }, []);
    
    const handlePrevSlide = (category) => {
      setCategorySlides(prevSlides => {
        const totalCars = carCategories[category].length;
        const maxSlide = Math.max(0, totalCars - 3);
        return {
          ...prevSlides,
          [category]: prevSlides[category] === 0 ? maxSlide : prevSlides[category] - 1
        };
      });
    };
    
    const handleNextSlide = (category) => {
      setCategorySlides(prevSlides => {
        const totalCars = carCategories[category].length;
        const maxSlide = Math.max(0, totalCars - 3);
        return {
          ...prevSlides,
          [category]: (prevSlides[category] + 1) % (maxSlide + 1)
        };
      });
    };

    const viewAllCategory = (category) => {
      navigate(`/category/${encodeURIComponent(category.toLowerCase())}`);
    };

    return (
      <div className="mx-0 w-full bg-white">
        {Object.entries(carCategories).map(([category, cars]) => (
          <div key={category} className="mb-16 px-4 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div>
                {/* Keep original heading style */}
                <h2 className="text-5xl font-bold text-[#9a4b3f] mb-2">{category}</h2>
                <p className="text-gray-600">Treat yourself to a once in a lifetime experience and take advantage of our elite weekly promotions today</p>
              </div>
              {/* Keep original button styling */}
              <button 
                onClick={() => viewAllCategory(category)}
                className="hidden md:flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded hover:bg-slate-700"
              >
                Discover All {category} FLEET <FaArrowRight className="ml-2" />
              </button>
            </div>
            
            <div className="relative">
              {/* Keep original navigation arrows */}
              {cars.length > 3 && (
                <>
                  <button 
                    onClick={() => handlePrevSlide(category)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 text-white p-3 rounded-none"
                  >
                    <FaChevronLeft />
                  </button>
                  <button 
                    onClick={() => handleNextSlide(category)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 text-white p-3 rounded-none"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
              
              {/* Slider container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out" 
                  style={{ 
                    transform: `translateX(-${categorySlides[category] * 33.33}%)` 
                  }}
                >
                  {cars.map(car => (
                    <div 
                      key={car._id || `${car.name}-${car.features?.model}-${car.prices?.oneDayPrice}`}
                      className="min-w-full sm:min-w-[50%] lg:min-w-[33.33%] px-2"
                    >
                      {/* Updated car card to match CarList component style */}
                      <div className="overflow-hidden border rounded border-gray-300 shadow-lg bg-white h-full">
                        <div className="relative">
                          <img
                            src={car?.carImage?.[0] || "default-image.png"}
                            alt={car?.name || "Car image"}
                            className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-200 ease-in-out hover:scale-105 hover:brightness-90 cursor-pointer"
                            onClick={() => handleImageClick(car.name)}
                          />
                          {/* Tags styling from CarList */}
                          <div className="absolute top-2 left-2 flex gap-2">
                            {car?.isNew && (
                              <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">NEW</span>
                            )}
                            {car?.isHighDemand && (
                              <span className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded">HIGH DEMAND</span>
                            )}
                            {car?.isSpecialOffer && (
                              <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded">SPECIAL OFFER</span>
                            )}
                          </div>
                        </div>
                        <div>
                          {/* Header style from CarList */}
                          <h2 className="text-xl md:text-2xl font-extrabold bg-slate-600 text-white p-4 md:p-6">
                            {car?.name || "Car Name"} - <span className="text-[#a85349]">{car?.features?.model || "Model Info"}</span>
                          </h2>
                          
                          {/* Pricing section from CarList */}
                          <div className="p-4 text-center">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs items-center">
                              <div>
                                <div className="font-bold text-lg">{car?.prices?.hourlyPrice || "N/A"}</div>
                                <div>AED-HOUR</div>
                              </div>
                              <div>
                                <div className="font-bold text-lg">{car?.prices?.oneDayPrice || "N/A"}</div>
                                <div>AED-DAY</div>
                              </div>
                              <div>
                                <div className="font-bold text-lg">{car?.prices?.sevenDaysPrice || "N/A"}</div>
                                <div>AED-WEEK</div>
                              </div>
                              <div>
                                <div className="font-bold text-lg">{car?.prices?.thirtyDaysPrice || "N/A"}</div>
                                <div>AED-MONTH</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Color display section from CarList */}
                          <div className="grid grid-cols-2 gap-2 mt-4">
                            {/* Exterior Color */}
                            <div className="bg-gray-200 border p-2 text-center text-sm flex items-center justify-center gap-2">
                              Exterior Color:
                              {car?.features?.exteriorColor?.includes("&")
                                ? car.features.exteriorColor.split("&").map((color, index) => (
                                    <div
                                      key={index}
                                      className="w-6 h-6 rounded-full"
                                      style={{ backgroundColor: color.trim() }}
                                    ></div>
                                  ))
                                : (
                                    <div
                                      className="w-6 h-6 rounded-full"
                                      style={{ backgroundColor: car?.features?.exteriorColor }}
                                    ></div>
                                  )}
                            </div>

                            {/* Interior Color */}
                            <div className="bg-gray-200 border p-2 text-center text-sm flex items-center justify-center gap-2">
                              Interior Color:
                              {car?.features?.interiorColor?.includes("&")
                                ? car.features.interiorColor.split("&").map((color, index) => (
                                    <div
                                      key={index}
                                      className="w-6 h-6 rounded-full"
                                      style={{ backgroundColor: color.trim() }}
                                    ></div>
                                  ))
                                : (
                                    <div
                                      className="w-6 h-6 rounded-full"
                                      style={{ backgroundColor: car?.features?.interiorColor }}
                                    ></div>
                                  )}
                            </div>
                          </div>
                          
                          {/* Car features section from CarList */}
                          <div className="flex justify-around text-sm mt-4 border-t pt-3 text-gray-700">
                            <div className="flex items-center gap-1">
                              <FaCar /> {car?.features?.transition || "N/A"}
                            </div>
                            <div className="flex items-center gap-1">
                              <FaGasPump /> {car?.features?.fuel || "N/A"}
                            </div>
                            <div className="flex items-center gap-1">
                              <FaUserFriends /> {car?.features?.seats || "N/A"}
                            </div>
                            <div className="flex items-center gap-1">
                              <FaSuitcase /> {car?.features?.luggage || "N/A"}
                            </div>
                          </div>
                          
                          {/* Action buttons from CarList */}
                          <div className="flex justify-between mt-4 gap-1">
                            <button className="flex items-center gap-2 text-white bg-slate-600 px-4 py-2 rounded w-1/3 hover:bg-[#a85349]">
                              <FaWhatsapp /> WhatsApp
                            </button>
                            <button className="flex items-center gap-2 text-white bg-slate-600 px-4 py-2 rounded w-1/3 hover:bg-[#a85349]">
                              <FaPhone className="transform rotate-180" /> Call
                            </button>
                            <button className="flex items-center gap-2 text-white bg-slate-600 px-4 py-2 rounded w-1/3 hover:bg-[#a85349]">
                              <FaInfoCircle /> Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Keep original mobile button */}
            <button 
              onClick={() => viewAllCategory(category)}
              className="flex md:hidden items-center justify-center gap-2 bg-slate-800 text-white px-6 py-3 rounded w-full mt-6 hover:bg-slate-700"
            >
              Discover All {category} FLEET <FaArrowRight />
            </button>
          </div>
        ))}
        
      </div>
    );
  };

  export default CarTypesDisplay;