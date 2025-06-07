import { useState } from 'react';
import { FiInstagram, FiFacebook, FiTwitter, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Footer = () => {
    const socialLinks = [
        { icon: FiInstagram, url: 'https://instagram.com/waqasalsyed', name: 'Instagram' },
        { icon: FiFacebook, url: 'https://facebook.com/waqasalsyed', name: 'Facebook' },
        { icon: FiTwitter, url: 'https://twitter.com/waqasalsyed', name: 'Twitter' },
    ];
    const [showImage, setShowImage] = useState(false);

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* BRAND SECTION */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h3 className="text-2xl font-bold text-amber-300 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:md:left-0 after:-translate-x-1/2 after:md:translate-x-0 after:w-16 after:h-1 after:bg-amber-300 after:mt-1 pb-2">
                            Waqas Alsyed Technical
                        </h3>
                        <p className="text-sm leading-relaxed text-center md:text-left">
                            Quick & reliable technical solutions for HVAC, plumbing, electrical, and more. Serving Dubai and surrounding areas with quality service since 2010.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            {socialLinks.map(({ icon: Icon, url, name }, idx) => (
                                <a
                                    key={idx}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-amber-300 transition-colors duration-300 transform hover:scale-110"
                                    aria-label={name}
                                >
                                    <Icon size={22} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* OPENING HOURS */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h4 className="text-2xl font-bold text-amber-300 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:md:left-0 after:-translate-x-1/2 after:md:translate-x-0 after:w-16 after:h-1 after:bg-amber-300 after:mt-1 pb-2">
                            Opening Hours
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center">
                                <FiClock className="mr-2 text-amber-300" />
                                <span>Mon–Fri: 9:00 AM–7:00 PM</span>
                            </li>
                            <li className="flex items-center">
                                <FiClock className="mr-2 text-amber-300" />
                                <span>Saturday: 10:00 AM–8:00 PM</span>
                            </li>
                            <li className="flex items-center">
                                <FiClock className="mr-2 text-amber-300" />
                                <span>Sunday: Closed</span>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <Link to="/contact" className="inline-flex items-center px-4 py-2 bg-amber-400 text-blue-900 font-medium rounded-md hover:bg-amber-500 transition-colors duration-300">
                                Book Service
                            </Link>
                        </div>
                    </div>

                    {/* GET IN TOUCH */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h4 className="text-2xl font-bold text-amber-300 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:md:left-0 after:-translate-x-1/2 after:md:translate-x-0 after:w-16 after:h-1 after:bg-amber-300 after:mt-1 pb-2">
                            Get in Touch
                        </h4>
                        <div className="flex flex-col items-center md:items-start  sm:flex-row sm:justify-between gap-6 w-full">
                            {/* First contact card */}
                            <div className="flex-1 space-y-3">
                                <p className="text-base font-semibold text-amber-300">Parwes Syed</p>
                                <a href="tel:+971523311205" className="flex items-center group text-sm sm:text-base">
                                    <FiPhone className="mr-2 group-hover:text-amber-300 text-lg" />
                                    <span className="group-hover:text-amber-300 transition-colors duration-300">+971 52 331 1205</span>
                                </a>
                                <div className="flex items-start text-sm sm:text-base">
                                    <FiMapPin className="mr-2 mt-1 flex-shrink-0 text-lg" />
                                    <span>Business Bay, Dubai, U.A.E.</span>
                                </div>
                            </div>

                            {/* Second contact card */}
                            <div className="flex-1 space-y-3">
                                <p className="text-base font-semibold text-amber-300">Vikash Kumar</p>
                                <a href="tel:+971522073520" className="flex items-center group text-sm sm:text-base">
                                    <FiPhone className="mr-2 group-hover:text-amber-300 text-lg" />
                                    <span className="group-hover:text-amber-300 transition-colors duration-300">+971 52 207 3520</span>
                                </a>
                                <div className="flex items-start text-sm sm:text-base">
                                    <FiMapPin className="mr-2 mt-1 flex-shrink-0 text-lg" />
                                    <span>Business Bay, Dubai, U.A.E.</span>
                                </div>
                            </div>
                        </div>

                        <a href="mailto:info@waqasalsyed.com" className="flex items-center mt-2 hover:text-amber-300 transition-colors duration-300">
                            <FiMail className="mr-2" />
                            <span>waqasalsyedtech@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="mt-12 pt-6 border-t border-blue-700">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div className="flex space-x-4 mb-4 sm:mb-0">
                            <Link to="/" className="hover:text-amber-300 transition-colors duration-300 text-sm">Home</Link>
                            <Link to="/about" className="hover:text-amber-300 transition-colors duration-300 text-sm">About</Link>
                            <Link to="/services" className="hover:text-amber-300 transition-colors duration-300 text-sm">Services</Link>
                            <Link to="/contact" className="hover:text-amber-300 transition-colors duration-300 text-sm">Contact</Link>
                        </div>

                        <div className="text-white text-center">
                            <p className="text-lg font-semibold tracking-wide">
                                Developed by{' '}
                                <Link
                                    to="/detail"
                                    className="italic font-light underline hover:text-blue-400"
                                >
                                    himanshu
                                </Link>
                            </p>
                        </div>

                        <div className="text-sm text-center sm:text-right">
                            <p>&copy; {currentYear} All rights reserved by WAT.</p>
                            <div className="flex justify-center sm:justify-end space-x-4 mt-2">
                                <Link to="/privacy-policy" className="hover:text-amber-300 transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                                <Link to="/terms" className="hover:text-amber-300 transition-colors duration-300">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;