import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { assets, all_cars } from "../assets/assets";
import CarList from "../components/CarList";


const Fleets = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="w-full h-64 sm:h-80 lg:h-96 bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${assets.hero_image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            Our Premium Fleet
          </h1>

          {/* Breadcrumb with Link */}
          <p className="text-sm sm:text-base lg:text-lg">
            <Link to="/" className=" hover:text-[#a85349]">Home</Link> \ Fleets
          </p>
        </div>
      </div>

      {/* Car List Section */}
      <div className="mx-auto px-6 py-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Choose Your Ride
        </h2>
        <CarList cars={all_cars} />
      </div>
    </div>
  );
};

export default Fleets;