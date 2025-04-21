import React from 'react'
import { FiInstagram, FiFacebook, FiTwitter, FiHeart } from "react-icons/fi";


const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* BRAND SECTION */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-amber-300">
                            Waqas Alsyed Technical Services
                        </h3>
                        <p className="text-sm max-w-xs leading-relaxed">
                            Quick & reliable technical solutions for HVAC, plumbing, electrical, and more.
                        </p>
                    </div>

                    {/* TIMING SECTION */}
                    <div>
                        <h4 className="text-2xl font-bold mb-4 text-amber-300">
                            Opening Hours
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>Mon – Fri: 9:00 AM – 7:00 PM</li>
                            <li>Saturday: 10:00 AM – 8:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>

                    {/* QUICK LINK */}
                    <div>
                        <h4 className="text-2xl font-bold mb-4 text-amber-300">
                            Explore
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {['Home', 'About', 'Services', 'Book Appointment'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-amber-300 transition">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div>
                        {/* <h4 className="text-lg font-semibold text-amber-300 mb-4">
                            Connect With Us
                        </h4> */}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                            <h2 className="text-2xl font-bold mb-4 text-amber-300">Get in Touch</h2>
                            <p className="text-sm sm:text-base">Vikash Kumar</p>
                            <p className="text-sm sm:text-base">📞 +971 52 207 3520</p>
                            <p className="text-sm sm:text-base">Business Bay, Dubai, U.A.E.</p>
                            {/* <button className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold">
                            Scan QR to Chat on WhatsApp
                        </button> */}

                            <div className="flex space-x-4">
                                {[FiInstagram, FiFacebook, FiTwitter].map((Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="text-white hover:text-amber-300 transition"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT SECTION */}
                <div className="border-t border-blue-700 mt-8 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} All The Rights are Reserved by WAT</p>
                    <p className="mt-2">
                        <a href="/privacy-policy" className="hover:text-amber-300 transition">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </footer>

        //  <footer className="bg-white border-t border-gray-100">
        //     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

        //             {/* BRAND SECTION */}
        //             <div className="text-center md:text-left lg:text-center xl:text-left">
        //                 <div className="flex justify-center md:justify-start lg:justify-center xl:justify-start items-center mb-4">
        //                     <div className="relative">
        //                         <div className="absolute -inset-2 bg-amber-200 rounded-full blur opacity-30" />
        //                         <h3 className='text-2xl lg:text-1xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent relative'>
        //                         Waqas Alsyed Technical Services
        //                         </h3>
        //                     </div>
        //                 </div>
        //                 <p className='text-amber-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 lg:mx-auto xl:mx-0 font-medium'>
        //                     WAQAS ALSYED TECHNICAL SERVICES CO. L.L.C welcomes you to connect with us for quick and reliable issue resolution
        //                 </p>
        //             </div>
        //             {/* TIMING SECTION */}
        //             <div className="text-center md:text-left lg:bottom-1 lg:pl-8 border-gray-100">
        //                 <h4 className="text-lg font-semibold text-amber-800 mb-4 font-[Poppins]">
        //                     Opening Hours
        //                 </h4>

        //                 <ul className="space-y-2 text-center md:text-left">
        //                     <li className="text-gray-600 text-sm">
        //                         <span className="font-medium">Monday-Friday:</span> 9AM-7PM
        //                     </li>
        //                     <li className="text-gray-600 text-sm">
        //                         <span className="font-medium">Saturday:</span> 10AM-8PM
        //                     </li>
        //                     <li className="text-gray-600 text-sm">
        //                     </li>
        //                 </ul>
        //             </div>

        //             {/*QUICK LINK */}

        //             <div className="text-center md:text-left">
        //                 <h4 className="text-lg font-semibold text-amber-800 mb-4 font-[Poppins]">
        //                     Explore
        //                 </h4>

        //                 <ul className="space-y-3">
        //                     {['Home', 'About', 'Services', 'Book Appointment'].map((link) => (
        //                         <li key={link}>
        //                             <a href="#" className="text-amber-600 hover:text-amber-800 transition-all flex items-center justify-center md:justify-start group text-sm font-medium">
        //                                 <span className="bg-amber-200 group-hover:bg-amber-300 w-1.5 h-1.5 rounded-full mr-2 transition-colors" />
        //                                 {link}
        //                             </a>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>
        //             {/*SOCIAL MEDIA */}
        //             <div className="text-center md:text-left">
        //                 <h4 className="text-lg font-semibold text-amber-800 mb-4 font-[Poppins]">
        //                     Connect With Us
        //                 </h4>

        //                 <div className="flex justify-center md:justify-start space-x-4 lg:space-x-5">
        //                     {[
        //                         { icon: <FiInstagram className="w-5 h-5" />, link: "#" },
        //                         { icon: <FiFacebook className="w-5 h-5" />, link: "#" },
        //                         { icon: <FiTwitter className="w-5 h-5" />, link: "#" }
        //                     ].map((social, index) => (
        //                         <a key={index} href={social.link} className="text-amber-600 hover:text-amber-800 transition-all">
        //                             {social.icon}
        //                         </a>
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>


        //         {/*COPYRIGHT DIVIDER */}
        //         <div className="border-t border-amber-100 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
        //             <p className="text-sm text-amber-600 font-medium mb-2">
        //                 &copy; {new Date().getFullYear()} All The Rights Are Reserved by WAT
        //             </p>
        //             <a href="/privacy-policy" target='_blank' rel='noopener noreference'
        //                 className="inline-block hover:text-purple-700 text-sm font-[Poppins] bg-gradient-to-r from-amber-500 to-amber-600
        //                   bg-clip-text text-transparent hover:scale-105 text-transform hover:underline ">
        //                 Privacy Policy
        //             </a>
        //         </div>
        //     </div>
        // </footer>
    );
};

export default Footer;

