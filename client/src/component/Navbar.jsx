import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUser, FiCalendar, FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { GiScissors } from 'react-icons/gi';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion'; // Added for consistent animations with banner
import companyLogo from '../assets/Logos.png'; // Assuming you have a logo image

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { pathname } = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isServicesOpen && !event.target.closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  return (
    <div 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className={`${scrolled ? 'py-2' : 'py-3 md:py-4'} transition-all duration-300`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center z-10"
          >
            <Link to="/" className="flex items-center">
              <img
                src={companyLogo}
                alt="Company Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
              <span className={`ml-2 font-bold text-lg md:text-xl ${scrolled || isMenuOpen ? 'text-blue-900' : 'text-white'} hidden sm:block`}>
                WAQAS ALSYED
              </span>
            </Link>
          </motion.div>

          {/* CENTER DESKTOP MENU */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-1 lg:space-x-6"
          >
            <NavLink to="/" active={pathname === '/'} scrolled={scrolled}>
              <FiHome className="mr-1.5" />
              <span>Home</span>
            </NavLink>

            <NavLink to="/about" active={pathname === '/about'} scrolled={scrolled}>
              <FiUser className="mr-1.5" />
              <span>About Us</span>
            </NavLink>

            {/* Services Dropdown */}
            <div className="services-dropdown relative">
              <div
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center cursor-pointer transition-all duration-300 relative group px-3 py-2 rounded-lg font-medium text-sm lg:text-base ${
                  pathname.startsWith('/services') 
                    ? 'text-blue-700'
                    : scrolled 
                      ? 'text-gray-800 hover:text-blue-700' 
                      : 'text-white hover:text-blue-300'
                }`}
              >
                <GiScissors className="mr-1.5" />
                <span>Services</span>
                {isServicesOpen ? (
                  <FiChevronUp className="ml-1.5 text-xs" />
                ) : (
                  <FiChevronDown className="ml-1.5 text-xs" />
                )}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${scrolled ? 'bg-blue-700' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
              </div>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50"
                  >
                    <Link
                      to="/maintenance"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-2.5 text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-all text-sm font-medium border-b border-gray-100"
                    >
                      Maintenance
                    </Link>
                    <Link
                      to="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-4 py-2.5 text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-all text-sm font-medium"
                    >
                      All Services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact" active={pathname === '/contact'} scrolled={scrolled}>
              <MdOutlinePermPhoneMsg className="mr-1.5" />
              <span>Contact</span>
            </NavLink>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-2 z-10"
          >
            <div className="hidden md:block">
              <Link
                to="/contact"
                className={`flex items-center ${
                  scrolled 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-blue-700'
                } hover:bg-blue-700 hover:text-white py-2 px-4 lg:px-6 rounded-full text-sm lg:text-base font-medium hover:shadow-lg transition-all duration-300`}
              >
                <FiCalendar className="mr-1.5" />
                Book Now
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className={`md:hidden p-2 rounded-full ${
                scrolled || isMenuOpen
                  ? 'text-blue-700 hover:bg-blue-50' 
                  : 'text-white hover:bg-white/20'
              } transition-colors duration-300`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX size={24} />
              ) : (
                <FiMenu size={24} />
              )}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-white shadow-xl overflow-y-auto"
            style={{ top: '60px' }}
          >
            <div className="flex flex-col px-6 py-8 space-y-6 h-full">
              <div className="space-y-6 flex flex-col">
                <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                  <FiHome className="text-blue-600 text-xl mr-3" /> 
                  Home
                </MobileNavLink>

                <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                  <FiUser className="text-blue-600 text-xl mr-3" /> 
                  About Us
                </MobileNavLink>

                {/* Mobile Services Dropdown */}
                <div className="w-full">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-800 hover:text-blue-700 py-2 transition-all duration-300 font-medium text-lg"
                  >
                    <div className="flex items-center">
                      <GiScissors className="text-blue-600 text-xl mr-3" /> 
                      Services
                    </div>
                    {isServicesOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 ml-8 flex flex-col space-y-4 border-l-2 border-blue-100 pl-4"
                      >
                        <Link
                          to="/maintenance"
                          onClick={() => setIsMenuOpen(false)}
                          className="py-2 text-gray-600 hover:text-blue-700 transition-all text-base"
                        >
                          Maintenance
                        </Link>
                        <Link
                          to="/services"
                          onClick={() => setIsMenuOpen(false)}
                          className="py-2 text-gray-600 hover:text-blue-700 transition-all text-base"
                        >
                          All Services
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <MdOutlinePermPhoneMsg className="text-blue-600 text-xl mr-3" /> 
                  Contact Us
                </MobileNavLink>
              </div>

              <div className="mt-auto">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl shadow-lg transition-all duration-300 text-lg font-medium"
                >
                  <FiCalendar className="mr-2" /> 
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ to, children, active, scrolled }) => (
  <Link
    to={to}
    className={`flex items-center transition-all duration-300 relative group px-3 py-2 rounded-lg font-medium text-sm lg:text-base ${
      active 
        ? 'text-blue-700' 
        : scrolled 
          ? 'text-gray-800 hover:text-blue-700'
          : 'text-white hover:text-blue-300'
    }`}
  >
    {children}
    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${active ? 'w-full' : 'w-0'} ${scrolled ? 'bg-blue-700' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
  </Link>
);

// Reusable NavLink component for mobile
const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center text-gray-800 hover:text-blue-700 py-2 transition-all duration-300 font-medium text-lg"
  >
    {children}
  </Link>
);

export default Navbar;