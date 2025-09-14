import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Section3 from './Components/Section3/Section3'
import Section4 from './Components/Section4/Section4'
import Footer from './Components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Section3/>
      <Section4/>
      <Footer/>
    </>
  )
}
