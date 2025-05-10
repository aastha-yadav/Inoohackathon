import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-white  py-8 px-4 h-[70vh]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1: Logo and About Us */}
        <div>
          <img className="h-[70px] pb-4" src="/logo.jpg" alt="" />
          {/* <h2 className="text-2xl font-bold text-gray-800">Your Logo</h2> */}
          <p className="text-lg text-gray-600 mb-4">Where Collaboration Meets Opportunity</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">About Us</h3>
          <p className="text-base text-gray-600">
            We want to help bring talented students and unique startups together.
          </p>
          <div className="mt-4">
            <h4 className="text-base font-medium text-gray-800">Contact Us</h4>
            <p className="text-sm text-gray-600 flex items-center mt-1">
              📞 +91 9999 999 999
            </p>
            <p className="text-sm text-gray-600 flex items-center mt-1">
              📧 youremailid@gmail.com
            </p>
          </div>
        </div>

        {/* Section 2: Information Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Information</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-indigo-600">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">More Search</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">Testimonials</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">Events</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Helpful Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Helpful Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-indigo-600">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">Supports</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Section 4: Subscription */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Subscribe For More</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-300 flex flex-col items-center justify-center gap-3 pt-6 text-center">
        <div className="mt-4  flex justify-center space-x-4">

          <a href="#" className="text-gray-600 flex flex-col gap-2 items-center justify-center  hover:text-gray-800">
           <img className="h-[3vh]" src="/fbk.png" alt="" />
            Facebook
          </a>
          <a href="#" className="text-gray-600 flex flex-col gap-2 items-center justify-center hover:text-gray-800">
          
           <img className="h-[3vh]" src="/google.png" alt="" />
            
             Google
          </a>
          <a href="#" className="text-gray-600 flex flex-col gap-2 items-center justify-center hover:text-gray-800">
          <img className="h-[3vh]" src="/twitter.png" alt="" />
          Twitter
          </a>
          <a href="#" className="text-gray-600 flex flex-col gap-2 items-center justify-center hover:text-gray-800">
          <img className="h-[3vh]" src="/insta.png" alt="" />
           
            Instagram
          </a>
        </div>
        <p className="text-sm text-gray-600">2024 © company.ltd - All Rights Reserved</p>

      </div>
    </footer>
    </>
  )
}

export default Footer