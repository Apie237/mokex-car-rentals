import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import BrandLogos from '../components/BrandLogos'
import CarTypesDisplay from '../components/CarTypesDisplay'

const Home = () => {
  return (
    <div>
        <Hero/>
        <BrandLogos/>
        <CarTypesDisplay/>
    </div>
  )
}

export default Home