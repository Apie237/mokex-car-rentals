import React from 'react';
import { Users, CreditCard, MapPin, Layers } from 'lucide-react';

const RentalRequirements = () => {
  const requirements = [
    {
      icon: <Users className="w-8 h-8 text-gray-600" />,
      title: 'Age',
      description: 'Driver must be over 21 year old to drive normal cars & 23 for sports cars'
    },
    {
      icon: <MapPin className="w-8 h-8 text-gray-600" />,
      title: 'Valid driving license',
      description: 'Your valid driving license is needed on the day of car rental with a photo of your passport if you are not a resident.'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-gray-600" />,
      title: 'Deposit',
      description: 'We accept different payment methods such as credit cards and online payments.'
    },
    {
      icon: <Layers className="w-8 h-8 text-gray-600 " />,
      title: 'Passport',
      description: 'We require a photo of your passport to rent your preferred car model from Mirage.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#a85349] mb-10">REQUIREMENT</h2>
      <p className="text-center text-gray-600 mb-10">
        Treat yourself to a once-in-a-lifetime experience, and take advantage of our elite weekly promotions today
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {requirements.map((req, index) => (
          <div 
            key={index} 
            className=" shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4 ">
              {req.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{req.title}</h3>
            <p className="text-gray-600">{req.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalRequirements;