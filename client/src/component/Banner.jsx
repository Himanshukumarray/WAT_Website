import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const companyName = "WAQAS ALSYED TECHNICAL SERVICES CO. L.L.C";

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <>

            <Helmet>
                <title>Water Purification & Refrigeration Services in UAE | WAT Services</title>
                <meta
                    name="description"
                    content="UAE's top-rated water purification, refrigeration & commercial kitchen equipment specialists. 15+ years delivering premium solutions across Dubai, Abu Dhabi & Sharjah. 24/7 maintenance services."
                />
                <meta
                    name="keywords"
                    content="water purification systems UAE, refrigeration services Dubai, commercial kitchen equipment maintenance, industrial water filters UAE, RO water systems Dubai, refrigeration repair Abu Dhabi, water treatment solutions UAE, commercial freezer maintenance, kitchen equipment servicing"
                />
                <meta property="og:title" content="Water Purification & Refrigeration Experts in UAE | WAT Services" />
                <meta
                    property="og:description"
                    content="Trust UAE's leading specialists in water purification systems, refrigeration services, and commercial kitchen equipment. Serving businesses across Dubai, Abu Dhabi & Sharjah with 24/7 support."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.watservices.com/about" />
                <meta property="og:image" content="https://www.watservices.com/assets/about-og-image.jpg" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.watservices.com/about" />
                <meta name="geo.region" content="AE" />
                <meta name="geo.placename" content="Dubai" />
                <meta name="author" content="WAT Services" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Water Purification & Refrigeration Experts in UAE | WAT Services" />
                <meta name="twitter:description" content="UAE's premier water purification, refrigeration & kitchen equipment specialists with 15+ years of excellence." />
                <meta name="twitter:image" content="https://www.watservices.com/assets/about-og-image.jpg" />
                <meta property="og:locale" content="en_AE" />
                <meta property="og:site_name" content="WAT Services" />
            </Helmet>

            {/* Hero Banner with Animation */}
            <div
                id='home'
                className='min-h-screen flex flex-wrap items-center justify-center text-center relative overflow-hidden px-4 sm:px-6 lg:px-8'
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.8))`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Background video */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        className="absolute h-full w-full object-cover object-center"
                        poster="/api/placeholder/1920/1080"
                    >
                        <source src="/api/placeholder/video" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/80"></div>
                </div>

                {/* Hero content */}
                <motion.div
                    className='max-w-6xl w-full z-10 relative px-4 sm:px-6'
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    <motion.span
                        variants={itemVariants}
                        className='inline-block text-lg md:text-xl font-medium mb-2 sm:mb-4 text-blue-300 tracking-widest uppercase'
                    >
                        Welcome To
                    </motion.span>

                    <motion.div variants={itemVariants} className="relative mx-auto overflow-hidden">
                        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-8 text-white tracking-tight leading-tight break-words text-balance">
                            {companyName.split(" ").map((word, i) => (
                                <span key={i} className="inline-block mr-2 mb-2 relative">
                                    <span className="relative z-10 drop-shadow-xl">
                                        {word}
                                    </span>
                                    {i === 0 && (
                                        <span className="absolute -bottom-1 left-0 w-full h-2 sm:h-4 bg-blue-600/70 -skew-y-2 z-0"></span>
                                    )}
                                </span>
                            ))}
                        </h1>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed"
                    >
                        Your trusted partner for HVAC, electrical, and plumbing solutions in Dubai.
                        With over 20 years of experience, we deliver excellence in every project.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 md:gap-6 text-center"
                    >
                        <Link to='contact'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-blue-700/30 transition-all duration-300 text-sm sm:text-base"
                            >
                                <FaPhone className="text-lg sm:text-xl" />
                                <span className="tracking-wide">Book A Service</span>
                            </motion.button>
                        </Link>

                        <Link to='services'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto bg-transparent border-2 border-white/70 hover:border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 sm:gap-3 mt-3 sm:mt-0 text-sm sm:text-base"
                            >
                                <span className="tracking-wide">Explore Services</span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Curved shape divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="relative block w-full h-[3rem] sm:h-[4rem] md:h-[6rem] lg:h-[8rem]"
                        fill="rgb(243 244 246)"
                    >
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" />
                    </svg>
                </div>
            </div>

            {/* Main Content */}
            <div className="font-sans text-gray-800 bg-gray-50">
                {/* Services Section */}
                <section id="services" className="py-16 sm:py-20 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-blue-900 inline-block relative">
                                Our Services
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600/70"></span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 sm:mt-6 px-4">
                                Comprehensive technical solutions for all your needs, delivered by experts with decades of experience
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
                            {[
                                {
                                    icon: "❄️",
                                    title: 'HVAC & Chiller Systems',
                                    description: 'Complete installation, maintenance, and repair of all HVAC systems including AHU, FAHU, FCU, and chilled water solutions.',
                                    items: [
                                        'Compressor Replacement',
                                        'Smart Thermostat Installation',
                                        'Chilled Water Pumps & Pipes',
                                        'Heat Exchanger Servicing',
                                        'Troubleshooting & Maintenance',
                                    ],
                                },
                                {
                                    icon: "⚡",
                                    title: 'Electrical & Lighting',
                                    description: 'Professional electrical services from rewiring to smart home automation and energy-efficient lighting solutions.',
                                    items: [
                                        'Full Rewiring & Panel Upgrade',
                                        'Home Automation Systems',
                                        'LED Retrofit Packages',
                                        'Electrical Troubleshooting',
                                        'Emergency Electrical Repairs',
                                    ],
                                },
                                {
                                    icon: "🚿",
                                    title: 'Plumbing & Drainage',
                                    description: 'Expert plumbing services including leak detection, fixture installation, and water conservation solutions.',
                                    items: [
                                        'Leak Detection & Repair',
                                        'Sanitary Ware Installation',
                                        'Water-Saving Fixtures',
                                        'Drainage System Maintenance',
                                        'Emergency Plumbing Repairs',
                                    ],
                                },
                            ].map((service, idx) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                                    className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                                >
                                    <div className="h-2 bg-blue-600"></div>
                                    <div className="p-4 sm:p-6 md:p-8">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 text-2xl sm:text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-blue-900">{service.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-1 sm:space-y-2">
                                            {service.items.map((item, i) => (
                                                <li key={i} className="flex items-center text-sm sm:text-base text-gray-700">
                                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-blue-900 inline-block relative">
                                Why Choose Us?
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600/70"></span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 sm:mt-6">
                                Our commitment to quality, reliability, and customer satisfaction sets us apart
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                            {[
                                {
                                    icon: '🏆',
                                    title: '20+ Years in UAE',
                                    desc: 'Proven track record with residential, commercial, and industrial clients throughout Dubai and beyond.',
                                },
                                {
                                    icon: '⚡',
                                    title: 'Rapid Turnaround',
                                    desc: '24/7 support and emergency call‑outs—minimizing downtime and ensuring your comfort and safety.',
                                },
                                {
                                    icon: '🔖',
                                    title: 'Certified Experts',
                                    desc: 'Our team consists of highly trained professionals with UAE-approved certifications and adherence to global safety standards.',
                                },
                                {
                                    icon: '🌱',
                                    title: 'Sustainability Focus',
                                    desc: 'We provide energy‑efficient upgrades to lower your utility bills and reduce your environmental footprint.',
                                },
                            ].map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="flex items-start p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-lg transform transition duration-300 hover:shadow-xl border-l-4 border-blue-600"
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 mr-4 sm:mr-6">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-1 sm:mb-2">{benefit.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-600">{benefit.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 sm:py-20 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-10 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-blue-900 inline-block relative">
                                Our Process
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600/70"></span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 sm:mt-6">
                                A streamlined approach to deliver exceptional results on every project
                            </p>
                        </div>

                        <div className="relative">
                            {/* Connecting line */}
                            <div className="absolute top-24 left-0 w-full h-1 bg-blue-200 hidden md:block"></div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                                {[
                                    { step: '1', title: 'Assess', desc: 'Thorough on‑site evaluation by our senior engineer to understand your specific requirements.' },
                                    { step: '2', title: 'Plan', desc: 'Development of a customized solution with detailed cost estimate within 12 hours.' },
                                    { step: '3', title: 'Execute', desc: 'Professional installation, repair, or maintenance with minimal disruption to your operations.' },
                                    { step: '4', title: 'Maintain', desc: 'Comprehensive service contracts for preventive maintenance checks and priority support.' },
                                ].map((phase, idx) => (
                                    <motion.div
                                        key={phase.step}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.2, duration: 0.5 }}
                                        className="relative bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6 mx-auto relative z-10">
                                            {phase.step}
                                        </div>
                                        <h4 className="text-lg sm:text-xl font-bold text-center text-blue-900 mb-2 sm:mb-4">{phase.title}</h4>
                                        <p className="text-sm sm:text-base text-gray-600 text-center">{phase.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 sm:py-16 md:py-20 bg-blue-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="pattern" width="4" height="4" patternUnits="userSpaceOnUse">
                                    <circle cx="1" cy="1" r="1" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#pattern)" />
                        </svg>
                    </div>

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">Ready to Get Started?</h2>
                            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-10 max-w-2xl mx-auto">
                                Contact us today for a free consultation and quote. Our team is standing by to help with all your technical service needs.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full sm:w-auto bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg transition-all duration-300 text-sm sm:text-base"
                                    >
                                        Contact Us Now
                                    </motion.button>
                                </Link>
                                <a href="tel:+971522073520">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-0 text-sm sm:text-base"
                                    >
                                        <FaPhone />
                                        <span>+971 52 207 3520</span>
                                    </motion.button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Banner;