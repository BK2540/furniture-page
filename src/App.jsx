import React from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Collections from './components/Collections/Collections'
import Beautify from './components/Beautify/Beautify'
import Browse from './components/Browse/Browse'
import How from './components/How-it-work/How'
import Email from './components/email/email'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Collections/>
      <Beautify/>
      <Browse/>
      <How/>
      <Email/>
      <Footer/>
    </>
  )
}

export default App
