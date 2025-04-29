import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiUser, FiCalendar, FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { GiScissors } from 'react-icons/gi'
import { MdOutlinePermPhoneMsg } from 'react-icons/md'
import logo from '../assets/Logos.png'

const Navbar = () => {
  const [navShadow, setNavShadow] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="fixed w-full z-50 bg-transparent transition-all duration-500">
      <div className={`bg-white backdrop-blur-2xl ${navShadow ? 'shadow-xl' : 'shadow-md'}`}>
        <nav className="border-b border-pink-400/20">
          <div className="container mx-auto px-4 md:px-6 md:py-0 py-4 flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex items-center m-0 p-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain m-0 p-0"
                />
              </Link>
            </div>


            {/* CENTER DESKTOP MENU */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6 lg:space-x-10">
              <Link
                to="/"
                className={`flex items-center cursor-pointer transition-all duration-300 relative group font-[poppins] font-medium text-base lg:text-lg ${pathname === '/'
                  ? 'text-pink-700'
                  : 'text-gray-800 hover:text-pink-700'
                  }`}
              >
                <FiHome className="mr-1 lg:mr-2" />
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                to="/about"
                className={`flex items-center cursor-pointer transition-all duration-300 relative group font-[poppins] font-medium text-base lg:text-lg ${pathname === '/about'
                  ? 'text-pink-700'
                  : 'text-gray-800 hover:text-pink-700'
                  }`}
              >
                <FiUser className="mr-1 lg:mr-2" />
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <div
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center cursor-pointer transition-all duration-300 relative group font-[poppins] font-medium text-base lg:text-lg ${pathname.startsWith('/services')
                    ? 'text-pink-700'
                    : 'text-gray-800 hover:text-pink-700'
                    }`}
                >
                  <GiScissors className="mr-1 lg:mr-2" />
                  Services
                  {isServicesOpen ? (
                    <FiChevronUp className="ml-1 lg:ml-2" />
                  ) : (
                    <FiChevronDown className="ml-1 lg:ml-2" />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
                </div>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md z-50">
                    <Link
                      to="/maintenance"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-2 text-gray-800 hover:bg-pink-100 hover:text-pink-700 transition-all font-[poppins]"
                    >
                      Maintenance
                    </Link>
                    <Link
                      to="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-2 text-gray-800 hover:bg-pink-100 hover:text-pink-700 transition-all font-[poppins]"
                    >
                      Services
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`flex items-center cursor-pointer transition-all duration-300 relative group font-[poppins] font-medium text-base lg:text-lg ${pathname === '/contact'
                  ? 'text-pink-700'
                  : 'text-gray-800 hover:text-pink-700'
                  }`}
              >
                <MdOutlinePermPhoneMsg className="mr-1 lg:mr-2" />
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-pink-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <Link
                  to="/contact"
                  className="flex items-center bg-pink-400 hover:bg-pink-600 text-white py-2 lg:px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer font-[Poppins] font-semibold border border-pink-300 text-sm lg:text-base"
                >
                  <FiCalendar className="mr-1 lg:mr-2" />
                  Book Now
                </Link>
              </div>

              {/* MOBILE TOGGLE */}
              <button
                className="md:hidden text-gray-800 hover:text-pink-700 transition-colors duration-300 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-start bg-pink-200/95 backdrop-blur-lg p-6 space-y-4 overflow-y-auto">
          <button
            className="self-end text-gray-800 hover:text-pink-700 transition-colors duration-300 p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiX size={28} />
          </button>

          <Link
            to="/"
            className="flex items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font-[poppins] text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiHome className="mr-2 text-2xl" /> Home
          </Link>

          <Link
            to="/about"
            className="flex items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font-[poppins] text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiUser className="mr-2 text-2xl" /> About Us
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="w-full">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full text-gray-800 hover:text-pink-700 transition-all duration-300 font-[poppins] text-xl"
            >
              <div className="flex items-center">
                <GiScissors className="mr-2 text-2xl" /> Services
              </div>
              {isServicesOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
            </button>
            {isServicesOpen && (
              <div className="mt-2 ml-6 flex flex-col space-y-2">
                <Link
                  to="/maintenance"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-800 hover:text-pink-700 transition-all font-[poppins]"
                >Maintenance</Link>
                <Link
                  to="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-800 hover:text-pink-700 transition-all font-[poppins]"
                >Services</Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="flex items-center text-gray-800 hover:text-pink-700 transition-all duration-300 font-[poppins] text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdOutlinePermPhoneMsg className="mr-2 text-2xl" /> Contact Us
          </Link>

          <Link
            to="/contact"
            className="flex items-center bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer font-[poppins] font-semibold text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiCalendar className="mr-2 text-2xl" /> Book Appointment
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar