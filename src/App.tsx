// import { useState } from 'react'
// import { useEffect } from 'react';
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { About } from './screens/About';
import { Login } from './screens/Login';
import { History } from './screens/History';

import { RecoilRoot } from 'recoil';

function App() {

  return (
    <RecoilRoot>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
