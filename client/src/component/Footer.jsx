import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    const socialLinks = [
        { icon: FiInstagram, url: 'https://instagram.com/waqasalsyed' },
        { icon: FiFacebook, url: 'https://facebook.com/waqasalsyed' },
        { icon: FiTwitter, url: 'https://twitter.com/waqasalsyed' },
    ];

    return (
        <footer className="bg-blue-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Use 3 columns on large, 2 on medium, 1 on small */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">

                    {/* BRAND SECTION */}
                    <div className="text-center space-y-2 max-w-xs mx-auto">
                        <h3 className="text-2xl font-bold mb-4 text-amber-300">
                            Waqas Alsyed Technical Services
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Quick & reliable technical solutions for HVAC, plumbing, electrical, and more.
                        </p>
                    </div>

                    {/* OPENING HOURS */}
                    <div className="text-center space-y-2">
                        <h4 className="text-2xl font-bold mb-4 text-amber-300">
                            Opening Hours
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>Mon–Fri: 9:00 AM–7:00 PM</li>
                            <li>Saturday: 10:00 AM–8:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>

                    {/* GET IN TOUCH */}
                    <div>
                        <h4 className="text-2xl font-bold mb-4 text-amber-300 text-center">
                            Get in Touch
                        </h4>
                        <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-6 sm:space-y-0">
                            <div className="text-center space-y-2">
                                <p className="text-sm sm:text-base font-semibold">
                                    Parwes Syed
                                </p>
                                <p className="text-sm sm:text-base">📞 +971 52 331 1205</p>
                                <p className="text-sm sm:text-base">
                                    Business Bay, Dubai, U.A.E.
                                </p>
                            </div>
                            
                            <div className="text-center space-y-2">
                                <p className="text-sm sm:text-base font-semibold">
                                    Vikash Kumar
                                </p>
                                <p className="text-sm sm:text-base">📞 +971 52 207 3520</p>
                                <p className="text-sm sm:text-base">
                                    Business Bay, Dubai, U.A.E.
                                </p>

                            </div>
                        </div>
                        {/* <div className="flex justify-center mt-6 space-x-4">
              {socialLinks.map(({ icon: Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div> */}
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="border-t border-blue-700 mt-8 pt-6 text-center text-sm space-y-2">

                    <span>
                        <p>&copy; {new Date().getFullYear()} All rights reserved by WAT.</p>

                        <Link to="/privacy-policy" className="hover:text-amber-300 transition">
                            Privacy Policy
                        </Link>
                    </span>
                    {/* <p>Developed by Himanshu Kumar Ray</p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;