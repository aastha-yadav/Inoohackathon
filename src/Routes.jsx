import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Logout from './components/Logout';
import HomeAdarsh from './components/HomeAdarsh';
import Login from './components/Login';
import BreastCancerUpload from './components/Breast/UploadBreastCancer';





const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeAdarsh/>} />
      <Route path="/about" element={<About/>} />
      <Route path='/breast' element={<BreastCancerUpload/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
};

export default AllRoutes;
