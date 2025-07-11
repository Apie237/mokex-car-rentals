import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Fleets from './pages/Fleets'
import About from './pages/About'
import Contact from './pages/Contact'
import CarDetails from './pages/CarDetails'
import CarRentalGuide from './components/CarRentalGuide'
import RentalRequirements from './components/RentalRequirements'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQ from './components/FAQ'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:carName" element={<CarDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/fleets" element={<Fleets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CarRentalGuide />
      <FAQ/>
      <RentalRequirements />
      <Footer/>
    </div>
  )
}

export default App