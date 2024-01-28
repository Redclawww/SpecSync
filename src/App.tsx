// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { About } from './screens/About';
import { useEffect } from 'react';
import axios from 'axios';
function App() {



  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
