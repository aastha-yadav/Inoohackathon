import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact.jsx';
import FAQ from './components/FAQ.jsx';
import Logout from './components/Logout.jsx';



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default AllRoutes;
