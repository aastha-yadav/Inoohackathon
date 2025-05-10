import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className=" text-black absolute top-0 left-0 z-50 w-full rounded-s shadow-md px-34 py-6 flex justify-between items-center ">
          <div className='flex  items-center justify-center gap-4'>
          <img src="/icon.png" alt="" />
          <h1 className="text-2xl font-bold text-black">MediScan</h1>
          </div>
         
      <ul className="hidden md:flex space-x-12 font-medium  ">
          <li><NavLink to="/" className="hover:text-gray-500">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:text-gray-500">About</NavLink></li>
          <li><NavLink to="/faq" className="hover:text-gray-500">FAQ</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-gray-500">Contact Us</NavLink></li>
     <NavLink to="/login" className="bg-[#196eaf] justify-center items-center max-md:text-[4px] text-sm hover:bg-[#44a4ed] text-white font-semibold py-3 px-11 max-md:py-1 max-md:px-2 border-blue-600 rounded-xl shadow ease-in duration-150"> SIGN UP / LOG IN</NavLink>
        </ul>
    </nav>
    
  )
}

export default Navbar