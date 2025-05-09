import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className=" text-black  rounded-s shadow-md px-34 py-6 flex justify-between items-center ">
      <h1 className="text-2xl font-bold text-black">MediScan</h1>
      <ul className="hidden md:flex space-x-12 font-medium  ">
          <li><NavLink to="/" className="hover:text-gray-500">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:text-gray-500">About</NavLink></li>
          <li><NavLink to="/faq" className="hover:text-gray-500">FAQ</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-gray-500">Contact Us</NavLink></li>
          <li><NavLink to="/logout" className="hover:text-white bg-blue-700 px-5 py-4 rounded-3xl ">Log Out</NavLink></li>
        </ul>
    </nav>
    
  )
}

export default Navbar