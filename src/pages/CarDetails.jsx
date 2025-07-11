import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    FaCarSide, FaDoorOpen, FaUsers, FaSuitcase, FaGasPump,
    FaCalendarAlt, FaClock, FaRoad, FaInfoCircle,
    FaWhatsapp, FaPhone, FaEnvelope
} from 'react-icons/fa';
import { assets, all_cars } from '../assets/assets';
import { Link } from 'react-router-dom'; // Import Link
import BrandLogo from '../components/BrandLogo';

const CarDetails = () => {
    const { carName } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [rentalPeriod, setRentalPeriod] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Find the car by name
    const car = all_cars.find(car => car.name === decodeURIComponent(carName));

    if (!car) {
        return (
            <div className="flex justify-center items-center h-screen text-2xl">
                Car not found
            </div>
        );
    }

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % car.carImage.length
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? car.carImage.length - 1 : prevIndex - 1
        );
    };

    const rentalPeriods = [
        { period: '0-1 Day', originalPrice: 700, discountedPrice: 555 },
        { period: '2 Days', originalPrice: 670, discountedPrice: 525 },
        { period: '3-6 Days', originalPrice: 650, discountedPrice: 500 },
        { period: '7-14 Days', originalPrice: 600, discountedPrice: 450 },
        { period: '15-29 Days', originalPrice: 550, discountedPrice: 400 },
        { period: '30-365 Days', originalPrice: 500, discountedPrice: 350 },
    ];

    const additionalServices = [
        { name: 'Extra 50 Km', price: 100, included: false },
        { name: 'Full Fuel Tank', price: 200, included: false },
        { name: 'Additional Driver', price: 50, included: false },
        { name: 'GPS Navigation', price: 30, included: false },
        { name: 'Child Seat', price: 25, included: false },
    ];

    const rentalTerms = [
        'Minimum age: 21 years',
        'Valid driving license required',
        'Security deposit may be required',
        'Insurance included',
        'Unlimited mileage for long-term rentals',
        'Free cancellation up to 24 hours before pickup'
    ];

    return (
        <div className="w-full bg-gray-50">
            {/* Hero Section */}
            <div
                className="w-full h-64 sm:h-80 lg:h-80 bg-cover bg-center flex items-center justify-center text-white relative"
                style={{
                    backgroundImage: `url(${car.carImage[1]})`,
                    backgroundSize: '',
                    backgroundPosition: 'center'
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Hero Content */}
                <div className="relative z-10 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                        {car.name}
                    </h1>

                    {/* Breadcrumb with Link */}
                    <p className="text-sm sm:text-base lg:text-lg ">
                        <Link to="/" className="hover:text-[#a85349]">Home</Link> \
                        <Link to="/fleets" className="hover:text-[#a85349] ml-2">Fleets</Link> \
                        {car.name}
                    </p>
                </div>
            </div>

            <div className="container mx-auto mt-20 px-4 py-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Image Gallery and Car Details */}
                    <div>
                        <div className="relative mb-4">
                            <img
                                src={car.carImage[currentImageIndex]}
                                alt={`${car.name} - Image ${currentImageIndex + 1}`}
                                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                            />
                            {car.carImage.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                                    >
                                        &#10094;
                                    </button>
                                    <button
                                        onClick={handleNextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                                    >
                                        &#10095;
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="flex space-x-1 overflow-x-auto mb-6">
                            {car.carImage.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`size-40 object-cover rounded cursor-pointer ${index === currentImageIndex ? 'border-2 border-[#a85349]' : ''
                                        }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>

                        {/* Car Features */}
                        <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-100 p-4 rounded-lg">
                            {[
                                { icon: FaCarSide, label: 'Model', value: car.features.model },
                                { icon: FaDoorOpen, label: 'Doors', value: car.features.doors },
                                { icon: FaUsers, label: 'Seats', value: car.features.seats },
                                { icon: FaSuitcase, label: 'Luggage', value: car.features.luggage },
                                { icon: FaGasPump, label: 'Fuel', value: car.features.fuel },
                                { icon: FaClock, label: 'Transmission', value: car.features.transition }
                            ].map(({ icon: Icon, label, value }, index) => (
                                <div key={index} className="text-center">
                                    <Icon className="mx-auto mb-2 text-2xl text-slate-600" />
                                    <p className="text-sm text-gray-600">{label}</p>
                                    <p className="font-bold">{value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Colors */}
                        <div className="mb-6 bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-bold text-xl mb-4">Car Colors</h3>
                            <div className="flex justify-between items-center mb-2">
                                <span className="mr-2 font-bold">Exterior Color:</span>
                                <div
                                    className="w-10 h-10 rounded-full border"
                                    style={{
                                        backgroundColor: car.features.exteriorColor.includes('&')
                                            ? car.features.exteriorColor.split('&')[0].trim()
                                            : car.features.exteriorColor
                                    }}
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="mr-2 font-bold">Interior Color:</span>
                                <div
                                    className="w-10 h-10 rounded-full border"
                                    style={{
                                        backgroundColor: car.features.interiorColor.includes('&')
                                            ? car.features.interiorColor.split('&')[0].trim()
                                            : car.features.interiorColor
                                    }}
                                />
                            </div>
                        </div>

                        <div className="mb-6 bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-4xl font-extrabold mb-4 text-[#a85349]">Why Rent the {car.name}?</h2>
                            <p className="text-gray-700 mb-4">
                                The {car.name} is the perfect choice for travelers seeking a blend of comfort, style, and performance.
                                Whether you're exploring city streets or embarking on a scenic road trip, this {car.type} offers an
                                exceptional driving experience that caters to both leisure and business travelers.
                            </p>
                            <p className="text-gray-700 mb-4">
                                With its {car.features.seats} seats and {car.features.luggage} luggage capacity, the {car.name} provides
                                ample space for passengers and belongings. The {car.features.fuel} engine ensures excellent fuel efficiency,
                                making it an economical choice for your journey.
                            </p>
                            <p className="text-gray-700">
                                Featuring a {car.features.transition} transmission and available in a sleek {car.features.exteriorColor}
                                exterior, this car combines practicality with sophistication. Whether you're traveling for business or
                                pleasure, the {car.name} promises a comfortable and memorable ride.
                            </p>
                        </div>
                        <div className="md:col-span-1">
                            <BrandLogo />
                        </div>
                    </div>

                    {/* Right Column - Car Details and Booking */}
                    <div>
                        {/* Car Title and Price */}
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-3xl font-bold">{car.name}</h1>
                                <p className="text-gray-600">{car.brand} - {car.type}</p>
                            </div>
                            <div className="text-2xl font-bold text-slate-600">
                                AED {car.prices.oneDayPrice}/Day
                            </div>
                        </div>

                        {/* Car Description */}
                        <div className="mb-6">
                            <h3 className="font-bold text-xl mb-2">About This Car</h3>
                            <p className="text-gray-700">{car.description}</p>
                        </div>

                        {/* Booking Section */}
                        <div className="mb-6 bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-bold text-xl mb-4 flex items-center">
                                <FaCalendarAlt className="mr-2 text-slate-600" /> Booking Details
                            </h3>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Start Date</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">End Date</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Rental Period</label>
                                <select
                                    value={rentalPeriod}
                                    onChange={(e) => setRentalPeriod(e.target.value)}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Select Rental Period</option>
                                    <option value="0-1">0-1 Day</option>
                                    <option value="2">2 Days</option>
                                    <option value="3-6">3-6 Days</option>
                                    <option value="7-14">7-14 Days</option>
                                    <option value="15-29">15-29 Days</option>
                                    <option value="30-365">30-365 Days</option>
                                </select>
                            </div>
                        </div>

                        {/* Rental Pricing */}
                        <div className="mb-6">
                            <h3 className="font-bold text-xl mb-2">Rental Pricing</h3>
                            <table className="w-full border-collapse">
                                <tbody>
                                    {rentalPeriods.map((period, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="py-2">{period.period}</td>
                                            <td className="py-2 text-right">
                                                <span className="line-through text-gray-400 mr-2">AED {period.originalPrice}</span>
                                                <span className="font-bold text-slate-600">AED {period.discountedPrice}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mileage Limits */}
                        <div className="mb-6 bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-bold mb-2 flex items-center">
                                <FaRoad className="mr-2 text-slate-600" /> Mileage Limits
                            </h3>
                            <ul className="list-disc list-inside">
                                <li>1-6 Days: 300 KM/Day</li>
                                <li>7-29 Days: 250 KM/Day</li>
                                <li>30+ Days: 200 KM/Day</li>
                            </ul>
                            <p className="mt-2 text-sm text-gray-600">
                                <FaInfoCircle className="inline mr-1" /> Additional kilometers can be purchased
                            </p>
                        </div>

                        {/* Additional Services */}
                        <div className="mb-6">
                            <h3 className="font-bold text-xl mb-2">Additional Services</h3>
                            <div className="grid md:grid-cols-2 gap-2">
                                {additionalServices.map((service, index) => (
                                    <div key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                                        <span>{service.name}</span>
                                        <span className="font-bold">AED {service.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Rental Terms */}
                        <div className="mb-6">
                            <h3 className="font-bold text-xl mb-2">Rental Terms</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {rentalTerms.map((term, index) => (
                                    <li key={index}>{term}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="mb-6 bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-bold text-xl mb-4">Contact for Booking</h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-2 border rounded"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-2 border rounded"
                                />
                                <textarea
                                    placeholder="Additional Notes"
                                    className="w-full p-2 border rounded h-24"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-[#a84949] text-white py-2 rounded hover:bg-[#a84949da] flex items-center justify-center"
                                >
                                    <FaEnvelope className="mr-2" /> Send Inquiry
                                </button>
                            </form>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600 flex items-center justify-center">
                                <FaWhatsapp className="mr-2" /> WhatsApp
                            </button>
                            <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 flex items-center justify-center">
                                <FaPhone className="mr-2" /> Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;