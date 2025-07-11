import hero_image from './hero-image.webp'
import hero_image2 from './hero-image-2.webp'
import mokex_logo from './mokex-logo.svg'
import car1 from './gray-volkswagen-rp-2021-1.jpg'
import car2 from './gray-volkswagen-rp-2021-2.jpg'
import car3 from './gray-volkswagen-rp-2021-3.jpg'
import car4 from './gray-volkswagen-rp-2021-4.jpg'
import car5 from "./blue-ford-mustang-gt-premium-convertible-2024-1.jpg"
import car6 from "./blue-ford-mustang-gt-premium-convertible-2024-2.jpg"
import car7 from "./blue-ford-mustang-gt-premium-convertible-2024-3.jpg"
import car8 from "./blue-ford-mustang-gt-premium-convertible-2024-4.jpg"
import car9 from "./black&red-chevrolet-camaro-ss-vs8-2021-1.jpg"
import car10 from "./black&red-chevrolet-camaro-ss-vs8-2021-2.jpg"
import car11 from "./black&red-chevrolet-camaro-ss-vs8-2021-3.jpg"
import car12 from "./black&red-chevrolet-camaro-ss-vs8-2021-4.jpg"
import car13 from "./mercedes-g63-amg-2022-1.jpg"
import car14 from "./mercedes-g63-amg-2022-2.jpg"
import car15 from "./mercedes-g63-amg-2022-3.jpg"
import car16 from "./mercedes-g63-amg-2022-4.jpg"
import car17 from "./chevrolet-corvette-c8-2022-1.jpg"
import car18 from "./chevrolet-corvette-c8-2022-2.jpeg"
import car19 from "./chevrolet-corvette-c8-2022-3.jpg"
import car20 from "./chevrolet-corvette-c8-2022-4.jpeg"
import car21 from "./ferrari-portofino-2022-1.jpg"
import car22 from "./ferrari-portofino-2022-2.jpg"
import car23 from "./ferrari-portofino-2022-3.jpg"
import car24 from "./ferrari-portofino-2022-4.jpg"
import car25 from "./dark-gray-nissan-patrol-nismo-2022-1.jpeg"
import car26 from "./dark-gray-nissan-patrol-nismo-2022-2.jpeg"
import car27 from "./dark-gray-nissan-patrol-nismo-2022-3.jpeg"
import car28 from "./dark-gray-nissan-patrol-nismo-2022-4.jpeg"
import car29 from "./land-rover-defender-2022.jpeg"
import car30 from "./land-rover-defender-2022-2.jpeg"
import car31 from "./land-rover-defender-2022-3.jpeg"
import car32 from "./land-rover-defender-2022-4.jpeg"
import car33 from "./cadillac-escalade-600-1.jpeg"
import car34 from "./cadillac-escalade-600-2.jpeg"
import car35 from "./cadillac-escalade-600-3.jpeg"
import car36 from "./cadillac-escalade-600-4.jpeg"
import astonMartin1 from "./aston-martin-db-11-volante-1.jpeg"
import astonMartin2 from "./aston-martin-db-11-volante-2.jpeg"
import astonMartin3 from "./aston-martin-db-11-volante-3.jpeg"
import astonMartin4 from "./aston-martin-db-11-volante-4.jpeg"

import BMWZ4_1 from "./BMW-Z4-M40i-2023-1.jpeg"
import BMWZ4_2 from "./BMW-Z4-M40i-2023-2.jpeg"
import BMWZ4_3 from "./BMW-Z4-M40i-2023-3.jpeg"
import BMWZ4_4 from "./BMW-Z4-M40i-2023-4.jpeg"

import lamborghini1 from "./lamborghini-huracan-spyder-2023-1.jpeg"
import lamborghini2 from "./lamborghini-huracan-spyder-2023-2.jpeg"
import lamborghini3 from "./lamborghini-huracan-spyder-2023-3.jpeg"
import lamborghini4 from "./lamborghini-huracan-spyder-2023-4.jpeg"

import porsche911_1 from "./porsche-911-cabriolet-2023-1.jpeg"
import porsche911_2 from "./porsche-911-cabriolet-2023-2.png"
import porsche911_3 from "./porsche-911-cabriolet-2023-3.jpeg"
import porsche911_4 from "./porsche-911-cabriolet-2023-4.jpeg"
import porsche_panamera_1 from "./2024 Porsche Panamera-1.png"
import porsche_panamera_2 from "./2024 Porsche Panamera-2.png"
import porsche_panamera_3 from "./2024 Porsche Panamera-3.png"
import porsche_panamera_4 from "./2024 Porsche Panamera-4.png"
import Lexus_L_1 from "./2024 Lexus L-1.png"
import Lexus_L_2 from "./2024 Lexus L-2.png"
import Lexus_L_3 from "./2024 Lexus L-3.png"
import Lexus_L_4 from "./2024 Lexus L-4.png"
import Mercedes_Maybach_S_Class_1 from "./2024 Mercedes-Maybach S-Class-1.png"
import Mercedes_Maybach_S_Class_2 from "./2024 Mercedes-Maybach S-Class-2.png"
import Mercedes_Maybach_S_Class_3 from "./2024 Mercedes-Maybach S-Class-3.png"
import Mercedes_Maybach_S_Class_4 from "./2024 Mercedes-Maybach S-Class-4.png"
import Bentley_ContinentalGT_1 from "./2024BentleyContinentalGT-1.png"
import Bentley_ContinentalGT_2 from "./2024BentleyContinentalGT-2.png"
import Bentley_ContinentalGT_3 from "./2024BentleyContinentalGT-3.png"
import Bentley_ContinentalGT_4 from "./2024BentleyContinentalGT-4.png"

export const assets = {
  hero_image,
  hero_image2,
  mokex_logo,

}

export const all_cars = [
  {
    _id: 1,
    name: "Volkswagen R P1",
    brand: "Volkswagen",
    type: "Compatible",
    prices: {
      oneDayPrice: 375,
      threeDaysPrice: 1000,
      sevenDaysPrice: 2000,
      thirtyDaysPrice: 6000,
    },
    carImage: [car1, car2, car3, car4],
    description:
      "The Volkswagen R P1-2021 is a compact car that comes with a 2.0L turbocharged engine, 4MOTION all-wheel drive, and a 7-speed DSG transmission. It is a perfect car for city driving and long road trips.",
    features: {
      model: 2021,
      exteriorColor: "Gray",
      interiorColor: "Black",
      transition: "Automatic",
      seats: 5,
      doors: 4,
      fuel: "Gasoline",
      luggage: 2,
    },
  },
  {
    _id: 2,
    name: "Ford Mustang GT",
    brand: "Ford",
    type: "Sports Car",
    prices: {
      oneDayPrice: 400,
      threeDaysPrice: 1100,
      sevenDaysPrice: 2200,
      thirtyDaysPrice: 6500,
    },
    carImage: [car5, car6, car7, car8],
    description:
      "The Ford Mustang GT-2024 is a sports car that comes with a 5.0L V8 engine, 10-speed automatic transmission, and rear-wheel drive. It is a perfect car for those who love speed and performance.",
    features: {
      model: 2024,
      exteriorColor: "Blue",
      interiorColor: "Black",
      transition: "Automatic",
      seats: 2,
      doors: 2,
      fuel: "Gasoline",
      luggage: 2,
    },
  },
  {
    _id: 3,
    name: "Chevrolet Camaro SS VS8",
    brand: "Chevrolet",
    type: "Muscle Car",
    prices: {
      oneDayPrice: 425,
      threeDaysPrice: 1150,
      sevenDaysPrice: 2300,
      thirtyDaysPrice: 6800,
    },
    carImage: [car9, car10, car11, car12],
    description:
      "The Chevrolet Camaro SS VS8-2023 is a muscle car that comes with a 6.2L V8 engine, 10-speed automatic transmission, and rear-wheel drive. It is a perfect car for those who love power and performance.",
    features: {
      model: 2023,
      exteriorColor: "Black & Red",
      interiorColor: "White",
      transition: "Automatic",
      seats: 2,
      doors: 2,
      fuel: "Gasoline",
      luggage: 2,
    },
  },
  {
    _id: 4,
    name: "Mercedes G63 AMG",
    brand: "Mercedes",
    type: "SUV",
    prices: {
      oneDayPrice: 450,
      threeDaysPrice: 1200,
      sevenDaysPrice: 2400,
      thirtyDaysPrice: 7000,
    },
    carImage: [car13, car14, car15, car16],
    description:
      "The Mercedes G63 AMG-2022 is a luxury SUV that comes with a 4.0L V8 engine, 9-speed automatic transmission, and all-wheel drive. It is a perfect car for those who love luxury and comfort.",
    features: {
      model: 2022,
      exteriorColor: "Black",
      interiorColor: "Black",
      transition: "Automatic",
      seats: 5,
      doors: 4,
      fuel: "Gasoline",
      luggage: 3,
    },
  },
  {
    _id: 5,
    name: "Chevrolet Corvette c8",
    brand: "Chevrolet",
    type: "Convertible",
    prices: {
      oneDayPrice: 500,
      threeDaysPrice: 1300,
      sevenDaysPrice: 2600,
      thirtyDaysPrice: 8000,
    },
    carImage: [car17, car18, car19, car20],
    description:
      "The Chevrolet Corvette c8-2022 is a convertible sports car that comes with a 6.2L V8 engine, 8-speed dual-clutch transmission, and rear-wheel drive. It is a perfect car for those who love open-air driving.",
    features: {
      model: 2022,
      exteriorColor: "Yellow",
      interiorColor: "Red&Black",
      transition: "Automatic",
      seats: 2,
      doors: 2,
      fuel: "Gasoline",
      luggage: 2,
    },
  },
  {
    _id: 6,
    name: "Ferrari Portofino",
    brand: "Ferrari",
    type: "Convertible",
    prices: {
      oneDayPrice: 600,
      threeDaysPrice: 1600,
      sevenDaysPrice: 3200,
      thirtyDaysPrice: 9600,
    },
    carImage: [car21, car22, car23, car24],
    description:
      "The Ferrari Portofino-2022 is a luxury convertible sports car that comes with a 3.9L V8 engine, 7-speed dual-clutch transmission, and rear-wheel drive. It is a perfect car for those who love luxury and performance.",
    features: {
      model: 2022,
      exteriorColor: "Black",
      interiorColor: "Brown",
      transition: "Automatic",
      seats: 2,
      doors: 2,
      fuel: "Gasoline",
      luggage: 2,
    },
  },
  {
    _id: 7,
    name: "Nissan Patrol Nismo",
    brand: "Nissan",
    type: "SUV",
    prices: {
      oneDayPrice: 500,
      threeDaysPrice: 1300,
      sevenDaysPrice: 2600,
      thirtyDaysPrice: 8000,
    },
    carImage: [car25, car26, car27, car28],
    description:
      "The Nissan Patrol Nismo-2022 is a luxury SUV that comes with a 5.6L V8 engine, 7-speed automatic transmission, and all-wheel drive. It is a perfect car for those who love luxury and off-road driving.",
    features: {
      model: 2022,
      exteriorColor: "Gray",
      interiorColor: "Black",
      transition: "Automatic",
      seats: 5,
      doors: 4,
      fuel: "Gasoline",
      luggage: 3,
    },
  },
  {
    _id: 8,
    name: "Landrover Defender",
    brand: "Landrover",
    type: "SUV",
    prices: {
      oneDayPrice: 500,
      threeDaysPrice: 1300,
      sevenDaysPrice: 2600,
      thirtyDaysPrice: 8000,
    },
    carImage: [car29, car30, car31, car32],
    description:
      "The Landrover Defender-2022 is a luxury SUV that comes with a 3.0L I6 engine, 8-speed automatic transmission, and all-wheel drive. It is a perfect car for those who love luxury and off-road driving.",
    features: {
      model: 2022,
      exteriorColor: "White",
      interiorColor: "Black&White",
      transition: "Automatic",
      seats: 5,
      doors: 4,
      fuel: "Gasoline",
      luggage: 3,
    },
  },
  {
    _id: 9,
    name: "Cadillac Escalade",
    brand: "Cadillac",
    type: "SUV",
    prices: {
      oneDayPrice: 600,
      threeDaysPrice: 1600,
      sevenDaysPrice: 3200,
      thirtyDaysPrice: 9600,
    },
    carImage: [car33, car34, car35, car36],
    description:
      "The Cadillac Escalade-2022 is a luxury SUV that comes with a 6.2L V8 engine, 10-speed automatic transmission, and all-wheel drive. It is a perfect car for those who love luxury and comfort.",
    features: {
      model: 2022,
      exteriorColor: "Black",
      interiorColor: "Brown",
      transition: "Automatic",
      seats: 5,
      doors: 4,
      fuel: "Gasoline",
      luggage: 3,
    },
  },
  {
    _id: 10,
    name: "Aston Martin DB11 Volante",
    brand: "Aston Martin",
    type: "Convertible",
    prices: {
      oneDayPrice: 650,
      threeDaysPrice: 1800,
      sevenDaysPrice: 3700,
      thirtyDaysPrice: 11000,
    },
    carImage: [astonMartin1, astonMartin2, astonMartin3, astonMartin4],
    description:
      "The Aston Martin DB11 Volante-2023 is a luxury convertible grand tourer with a 4.0L twin-turbo V8 engine, 8-speed automatic transmission, and rear-wheel drive. It offers a blend of performance, elegance, and open-top driving pleasure.",
    features: {
      model: 2023,
      exteriorColor: "Gray",
      interiorColor: "Black",
      transmission: "Automatic",
      seats: 4,
      doors: 2,
      fuel: "Gasoline",
      luggage: 2,
    },
  },
  {
    _id: 11,
    name: "BMW Z4 M40i",
    brand: "BMW",
    type: "Convertible",
    prices: {
      oneDayPrice: 500,
      threeDaysPrice: 1400,
      sevenDaysPrice: 2800,
      thirtyDaysPrice: 8500,
    },
    carImage: [BMWZ4_1, BMWZ4_2, BMWZ4_3, BMWZ4_4],
    description:
      "The BMW Z4 M40i-2023 is a stylish roadster equipped with a 3.0L turbocharged inline-6 engine, an 8-speed automatic transmission, and rear-wheel drive. It's an excellent blend of sporty performance and driving comfort.",
    features: {
      model: 2023,
      exteriorColor: "Blue",
      interiorColor: "Black",
      transmission: "Automatic",
      seats: 2,
      doors: 2,
      fuel: "Gasoline",
      luggage: 1,
    },
  },
  {
    _id: 12,
    name: "Lamborghini Huracán Spyder",
    brand: "Lamborghini",
    type: "Convertible",
    prices: {
      oneDayPrice: 1200,
      threeDaysPrice: 3300,
      sevenDaysPrice: 7200,
      thirtyDaysPrice: 21000,
    },
    carImage: [lamborghini1, lamborghini2, lamborghini3, lamborghini4],
    description:
      "The Lamborghini Huracán Spyder-2023 is a high-performance convertible supercar featuring a 5.2L V10 engine, 7-speed dual-clutch transmission, and all-wheel drive. It delivers breathtaking speed and an iconic open-top experience.",
    features: {
      model: 2023,
      exteriorColor: "Green",
      interiorColor: "Black",
      transmission: "Automatic",
      seats: 2,
      doors: 2,
      fuel: "Gasoline",
      luggage: 1,
    },
  },
  {
    _id: 13,
    name: "Porsche 911 Cabriolet",
    brand: "Porsche",
    type: "Convertible",
    prices: {
      oneDayPrice: 900,
      threeDaysPrice: 2500,
      sevenDaysPrice: 5500,
      thirtyDaysPrice: 16000,
    },
    carImage: [porsche911_1, porsche911_2, porsche911_3, porsche911_4],
    description:
      "The Porsche 911 Cabriolet-2023 is a timeless convertible sports car with a 3.0L twin-turbo flat-6 engine, 8-speed PDK transmission, and rear-wheel drive. It offers a balance of precision handling, power, and top-down luxury.",
    features: {
      model: 2023,
      exteriorColor: "Gray",
      interiorColor: "Red",
      transmission: "Automatic",
      seats: 2,
      doors: 2,
      fuel: "Gasoline",
      luggage: 2,
    },
  },
  {
    _id: 14,
    name: "Porsche Panamera",
    brand: "Porsche",
    type: "Luxury",
    prices: {
      oneDayPrice: 800,
      threeDaysPrice: 2200,
      sevenDaysPrice: 4800,
      thirtyDaysPrice: 14000,
    },
    carImage: [porsche_panamera_1, porsche_panamera_2, porsche_panamera_3, porsche_panamera_4],
    description:
      "The 2024 Porsche Panamera is a luxury performance sedan featuring a powerful engine range, sophisticated suspension, and premium interior. It combines sports car driving dynamics with executive comfort for four passengers.",
    features: {
      model: 2024,
      exteriorColor: "Orange",
      interiorColor: "Orange&Black",
      transition: "Automatic",
      seats: 4,
      doors: 4,
      fuel: "Gasoline",
      luggage: 3,
    },
  },
  {
    _id: 15,
    name: "Lexus L",
    brand: "Lexus",
    type: "Luxury",
    prices: {
      oneDayPrice: 550,
      threeDaysPrice: 1500,
      sevenDaysPrice: 3000,
      thirtyDaysPrice: 9000,
    },
    carImage: [Lexus_L_1, Lexus_L_2, Lexus_L_3, Lexus_L_4],
    description:
      "The 2024 Lexus L is a premium luxury sedan offering exceptional comfort, sophisticated technology, and a refined driving experience. It features the brand's signature quality and reliability in an elegant package.",
    features: {
      model: 2024,
      exteriorColor: "Blue",
      interiorColor: "Black",
      transition: "Automatic",
      seats: 5,
      doors: 4,
      fuel: "Hybrid",
      luggage: 3,
    },
  },
  {
    _id: 16,
    name: "Mercedes-Maybach S-Class",
    brand: "Mercedes-Benz",
    type: "Luxury",
    prices: {
      oneDayPrice: 1100,
      threeDaysPrice: 3000,
      sevenDaysPrice: 6500,
      thirtyDaysPrice: 19000,
    },
    carImage: [Mercedes_Maybach_S_Class_1, Mercedes_Maybach_S_Class_2, Mercedes_Maybach_S_Class_3, Mercedes_Maybach_S_Class_4],
    description:
      "The 2024 Mercedes-Maybach S-Class is the pinnacle of luxury motoring, featuring extended wheelbase, executive rear seating, and unparalleled comfort. It represents the ultimate combination of Mercedes-Benz engineering and Maybach exclusivity.",
    features: {
      model: 2024,
      exteriorColor: "White",
      interiorColor: "White&black",
      transition: "Automatic",
      seats: 4,
      doors: 4,
      fuel: "Gasoline",
      luggage: 3,
    },
  },
  {
    _id: 17,
    name: "Bentley Continental GT",
    brand: "Bentley",
    type: "Luxury",
    prices: {
      oneDayPrice: 1300,
      threeDaysPrice: 3600,
      sevenDaysPrice: 7800,
      thirtyDaysPrice: 23000,
    },
    carImage: [Bentley_ContinentalGT_1, Bentley_ContinentalGT_2, Bentley_ContinentalGT_3, Bentley_ContinentalGT_4],
    description:
      "The 2024 Bentley Continental GT is a handcrafted luxury grand tourer that combines breathtaking performance with exquisite craftsmanship. Its W12 or V8 engine options deliver effortless power while passengers enjoy supreme comfort and the finest materials.",
    features: {
      model: 2024,
      exteriorColor: "Black",
      interiorColor: "Black&Brown",
      transition: "Automatic",
      seats: 4,
      doors: 2,
      fuel: "Gasoline",
      luggage: 2,
    },
  }

];