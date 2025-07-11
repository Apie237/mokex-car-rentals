import React from "react";
import { FaGasPump, FaUserFriends, FaCar, FaSuitcase, FaPhone, FaWhatsapp, FaInfoCircle } from "react-icons/fa";
import { assets, all_cars } from "../assets/assets";
import { useNavigate } from "react-router-dom"; 

const CarList = ({ cars }) => {
    const navigate = useNavigate(); 

  const handleImageClick = (carName) => {
    // Navigate to the car details page
    navigate(`/cars/${encodeURIComponent(carName)}`);
  };
    return (
        <div className="mx-0 px-4 w-full bg-cover bg-center"
            style={{
                backgroundImage: `url(${assets.triangle_bg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {cars.map((car) => (
                    <div
                        key={car._id || `${car.name}-${car.features.model}-${car.prices.oneDayPrice}`}
                        className="overflow-hidden border rounded border-gray-300 shadow-lg bg-white"
                    >
                        <div className="relative">
                            <img
                                src={car?.carImage?.[0] || "default-image.png"}
                                alt={car?.name || "Car image"}
                                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-200 ease-in-out hover:scale-105 hover:brightness-90 cursor-pointer"
                                onClick={() => handleImageClick(car.name)} 
                            />
                            {car?.isNew && (
                                <div className="absolute top-2 left-2 flex gap-2">
                                    <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">NEW</span>
                                    <span className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded">HIGH DEMAND</span>
                                </div>
                            )}
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-extrabold bg-slate-600 text-white p-4 md:p-6">
                                {car?.name || "Car Name"} - <span className="text-[#a85349]">{car?.features?.model || "Model Info"}</span>
                            </h2>
                            <div className="p-4 text-center">
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs items-center">
                                    <div>
                                        <div className="font-bold text-lg">N/A</div>
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
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                {/* Exterior Color */}
                                <div className="bg-gray-200 border p-2 text-center text-sm flex items-center justify-center gap-2">
                                    Exterior Color:
                                    {car?.features?.exteriorColor.includes("&")
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
                                    {car?.features?.interiorColor.includes("&")
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
                ))}
            </div>
        </div>
    );
};

export default CarList;