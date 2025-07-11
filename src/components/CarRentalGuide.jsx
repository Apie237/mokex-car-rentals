import React from 'react';
import { Info, Car, DollarSign, Shield } from 'lucide-react';

const CarRentalGuide = () => {
  return (
    <div className="bg-slate-800 text-white py-[60px] px-4 mx-auto">
      <div className="text-left mb-8">
        <h1 className="text-5xl font-bold text-white">
          <span className="text-[#a85349]">Smooth</span> Journey Starts Here
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          Unlock the freedom of the road with our hassle-free rental experience and unbeatable weekly specials!
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-6 pb-2">
          Smart Moves for Renting in the Emirates
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Info className="mr-4 mt-1" size={24} />
            <span>Research rental companies with convenient locations or reliable delivery services that match your travel needs</span>
          </li>
          <li className="flex items-start">
            <Car className="mr-4 mt-1" size={24} />
            <span>Conduct a thorough pre-rental inspection. Document any existing wear and tear through photos or videos to protect yourself from unexpected charges</span>
          </li>
          <li className="flex items-start">
            <Shield className="mr-4 mt-1" size={24} />
            <span>Opt for credit card pre-authorization for your security deposit, which provides a secure and convenient payment method</span>
          </li>
          <li className="flex items-start">
            <Info className="mr-4 mt-1" size={24} />
            <span>Carefully review and understand all rental agreement terms before signing to avoid future complications</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-6 pb-2">
          Unlocking the Best Rental Deals
        </h2>
        <div className="space-y-4">
          <p className="flex items-start">
            <DollarSign className="mr-4 mt-1" size={24} />
            <span>Digital platforms offer the most competitive rates. Always distinguish between direct suppliers and intermediary agents to ensure you're getting the most transparent pricing</span>
          </p>
          <p className="flex items-start">
            <Info className="mr-4 mt-1" size={24} />
            <span>Leverage comparison platforms to explore multiple rental options, giving you the power to choose the most cost-effective and convenient solution for your travel</span>
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-6 pb-2">
          Why Rent with a Professional Driver?
        </h2>
        <p className="text-lg">
          Discover the unparalleled convenience and luxury of hiring a car with a professional driver in the UAE.
        </p>
      </div>

      <div className="fixed bottom-4 right-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-green-600 transition-colors">
          <span className="mr-2">Chat with us</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarRentalGuide;