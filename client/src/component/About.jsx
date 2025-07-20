import React, { useEffect, useRef } from 'react';
import sideimg from '../assets/Banner.webp';
import vikashimg from '../assets/vikasmama.jpg';
import { Helmet } from 'react-helmet';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiClock, FiTool, FiShield, FiUsers, FiThumbsUp, FiSmile, FiCheck, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const About = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8
            }
        }
    };


    const mapRef = useRef(null);

    useEffect(() => {
        // Initialize map only if the element exists and Leaflet is available from CDN
        let map = null;

        // Create and add Leaflet CSS
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
        document.head.appendChild(linkElement);

        // Load Leaflet script
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
        script.async = true;

        script.onload = () => {
            if (mapRef.current && window.L) {
                // Initialize the map
                const L = window.L;

                // Make sure any previous map instance is removed
                if (map) {
                    map.remove();
                }

                // Create new map centered on Dubai, UAE with attributionControl set to false
                map = L.map(mapRef.current, {
                    center: [25.276987, 55.296249],
                    zoom: 10,
                    zoomControl: true,
                    attributionControl: false  // Disable attribution control
                });

                // Add OpenStreetMap tiles without attribution
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '',  // Empty attribution
                    maxZoom: 18
                }).addTo(map);

                // Add Dubai marker
                L.marker([25.276987, 55.296249]).addTo(map)
                    .bindPopup('Dubai, UAE').openPopup();

                // Add some nearby locations
                L.marker([25.197197, 55.274376]).addTo(map)
                    .bindPopup('Burj Khalifa, Dubai');

                L.marker([25.141304, 55.185984]).addTo(map)
                    .bindPopup('Palm Jumeirah, Dubai');

                L.marker([25.113757, 55.139455]).addTo(map)
                    .bindPopup('Dubai Marina');

                // Force a resize event after map is created to ensure it fills the container
                setTimeout(() => {
                    map.invalidateSize();
                }, 100);
            }
        };

        document.body.appendChild(script);

        // Cleanup function
        return () => {
            if (map) {
                map.remove();
            }
            if (document.head.contains(linkElement)) {
                document.head.removeChild(linkElement);
            }
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);


    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Team members data
    const teamMembers = [
        {

            name: "Vikash Kumar",
            role: "Managing Director",
            image: vikashimg, // ✅ pass as a variable, not an object
            phone: "+971 52 207 3520",
            email: "waqasalsyedtech@gmail.com"

        },
        {
            name: "Parwes Syed",
            role: "Technical Director",
            image: "/api/placeholder/300/300",
            phone: "+971 52 331 1205",
            email: "ahmed@waqasalsyed.ae"
        },
    ];

    // Experience facts
    const experience = [
        {
            icon: <FiCheck className="w-6 h-6 text-blue-600" />,
            title: '20+ Years in the UAE',
            desc: 'Completed hundreds of residential, commercial, and industrial projects across Dubai and beyond.'
        },
        {
            icon: <FiCheck className="w-6 h-6 text-blue-600" />,
            title: 'Multidisciplinary Expertise',
            desc: 'From chilled‑water plants to precision plumbing, we cover every technical aspect of your facility.'
        },
        {
            icon: <FiCheck className="w-6 h-6 text-blue-600" />,
            title: 'Certified & Insured Pros',
            desc: 'Our technicians hold UAE‑approved certifications and adhere to global safety standards.'
        },
        {
            icon: <FiCheck className="w-6 h-6 text-blue-600" />,
            title: 'Proven Track Record',
            desc: 'We maintain a 98% client‑satisfaction rate and build long-lasting partnerships with our clients.'
        }
    ];

    // Why choose us reasons
    const reasons = [
        {
            icon: <FiClock className="w-6 h-6 text-blue-600" />,
            title: '24/7 Rapid Response',
            desc: "Emergency breakdown? We're on call day and night to get you back up and running."
        },
        {
            icon: <FiTool className="w-6 h-6 text-blue-600" />,
            title: 'Tailored Solutions',
            desc: 'Every project is unique—our experts craft a plan that fits your exact needs and budget.'
        },
        {
            icon: <FiShield className="w-6 h-6 text-blue-600" />,
            title: 'Quality Assurance',
            desc: 'We use only OEM parts and industry‑approved materials, backed by workmanship warranties.'
        },
        {
            icon: <FiUsers className="w-6 h-6 text-blue-600" />,
            title: 'Experienced Team',
            desc: 'Our certified technicians bring decades of combined expertise to every job.'
        },
        {
            icon: <FiThumbsUp className="w-6 h-6 text-blue-600" />,
            title: 'Proven Trust',
            desc: 'A 98% client‑satisfaction rate speaks to our reliability and long‑term partnerships.'
        },
        {
            icon: <FiSmile className="w-6 h-6 text-blue-600" />,
            title: 'Client Satisfaction',
            desc: 'We prioritize your feedback and continuously improve to exceed your expectations.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>MEP Specialist, HVAC, Electrical and Plumbing Services | WAT Services</title>
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
                <meta property="og:image" content="/assets/AC-Repair.jpg"/>
                <meta property="og:image" content="/assets/electrical1.jpg" />
            </Helmet>
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-b from-blue-900 to-blue-800  overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-1/2 -left-24 w-64 h-64 bg-blue-500 rounded-full"></div>
                    <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-blue-600 rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
                        >
                            About <span className="text-blue-300">Us</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-blue-100 leading-relaxed"
                        >
                            Over 20 years of excellence in technical and maintenance services across the UAE
                        </motion.p>
                    </div>
                </div>

                {/* Wave divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="relative block w-full h-12 sm:h-16 md:h-20 lg:h-24"
                        fill="white"
                    >
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" />
                    </svg>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:mt-20">
                                <img
                                    src={sideimg}
                                    alt="About Waqas Alsyed Technical Services"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                                    <span className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full">
                                        Since 2024
                                    </span>
                                </div>
                            </div>

                            {/* Floating stat card */}
                            <div className="absolute -right-4 lg:-right-12 bottom-1/4 bg-white rounded-lg shadow-xl p-4 md:p-6 hidden md:block">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <FiThumbsUp className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900">98%</h4>
                                        <p className="text-sm text-gray-600">Client Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                A Legacy of <span className="text-blue-600">Excellence</span> in Technical Services
                            </h2>
                            <p className="text-gray-700 mb-6">
                                Established in 2024, Waqas Alsyed Technical Services has grown from a small maintenance team into one of the UAE's most trusted technical service providers. Our journey began with a simple mission: to deliver honest, reliable, and high-quality technical solutions to every client.
                            </p>
                            <p className="text-gray-700 mb-8">
                                Today, we're proud to serve a diverse portfolio of clients across residential, commercial, and industrial sectors throughout Dubai and the wider UAE. Our comprehensive range of services includes HVAC maintenance, electrical work, plumbing, civil works, and specialized facility management solutions.
                            </p>

                            {/* Experience facts */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {experience.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="mt-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                            >
                                Our Vision & Mission
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="w-20 h-1 bg-blue-600 mx-auto mb-6"
                            ></motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Vision */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-700">
                                    To be the UAE's most trusted technical services partner, known for exceptional reliability, innovation, and customer care that keeps facilities running at peak performance.
                                </p>
                            </motion.div>

                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-white rounded-xl shadow-lg p-6 md:p-8"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-700">
                                    To deliver superior technical solutions that enhance facility safety, efficiency, and longevity through expert service, competitive pricing, and a commitment to customer satisfaction.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 lg:py-24" ref={ref}>
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Why Choose <span className="text-blue-600">Us</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="max-w-2xl mx-auto text-gray-600"
                        >
                            From emergency responses to planned maintenance, we deliver technical excellence that keeps your facilities operating at peak performance.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600"
                            >
                                <div className="p-4 bg-blue-50 rounded-full inline-block mb-6">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                                <p className="text-gray-600">{reason.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Meet Our <span className="text-blue-600">Leadership</span> Team
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="max-w-2xl mx-auto text-gray-600"
                        >
                            Experts with decades of combined experience in technical services and facility management across the UAE.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols- gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg group"
                            >
                                <div className="relative aspect-[4/3]">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                        <p className="text-blue-200">{member.role}</p>
                                    </div>
                                </div>
                                <div className="p-6 space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <FiPhone className="text-blue-600" />
                                        <span className="text-gray-700">{member.phone}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <FiMail className="text-blue-600" />
                                        <span className="text-gray-700">{member.email}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Counter Stats Section */}
            <section className="py-16 lg:py-24 bg-blue-700 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-blue-600"></div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-800 rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                        {/* Projects Completed */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">2,500+</h3>
                            <p className="text-blue-200 text-sm md:text-base">Projects Completed</p>
                        </motion.div>

                        {/* Clients Served */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center"
                        >
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">500+</h3>
                            <p className="text-blue-200 text-sm md:text-base">Clients Served</p>
                        </motion.div>

                        {/* Team Members */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center"
                        >
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">50+</h3>
                            <p className="text-blue-200 text-sm md:text-base">Team Members</p>
                        </motion.div>

                        {/* Years of Experience */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-center"
                        >
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">20+</h3>
                            <p className="text-blue-200 text-sm md:text-base">Years of Experience</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Our <span className="text-blue-600">Location</span>
                            </h2>
                            <p className="text-gray-700 mb-8">
                                Strategically located in Dubai, our central office allows us to rapidly respond to service requests across the UAE. With a fleet of service vehicles and mobile teams, we're ready to deploy technical expertise wherever and whenever you need it.
                            </p>

                            <div className="flex items-start space-x-4 mb-6">
                                <div className="mt-1">
                                    <FiMapPin className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Head Office</h4>
                                    <p className="text-gray-600">The Binary By Omniyat<br />Business Bay, Dubai, UAE</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 mb-6">
                                <div className="mt-1">
                                    <FiPhone className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Phone</h4>
                                    <p className="text-gray-600">+971 52 331 1205</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="mt-1">
                                    <FiMail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Email</h4>
                                    <p className="text-gray-600">waqasalsyedtech@gmail.com</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-96 md:h-[450px] rounded-xl overflow-hidden shadow-xl"
                        >
                            <div className="w-full h-full flex items-center justify-center bg-gray-200" style={{ position: 'relative' }}>
                                <div
                                    ref={mapRef}
                                    className="w-full h-full"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        minHeight: '400px'
                                    }}
                                />
                                {/* This span will only show if the map fails to load */}
                                <span className="text-gray-500 absolute">Loading map...</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
                        >
                            Ready to Experience Next-Level Technical Services?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-blue-100 mb-8"
                        >
                            Whether you need routine maintenance or emergency repairs, our team is ready to help.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                        >
                            <a
                                href="/contact"
                                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
                            >
                                Contact Us
                            </a>
                            <a
                                href="/services"
                                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
                            >
                                Browse Services
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Our <span className="text-blue-600">Certifications</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="max-w-2xl mx-auto text-gray-600"
                        >
                            We maintain the highest standards of quality and safety through industry-recognized certifications.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Certification Items */}
                        {[1, 2, 3, 4].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                    <img
                                        src="/api/placeholder/100/100"
                                        alt={`Certification ${item}`}
                                        className="w-16 h-16 md:w-20 md:h-20 object-contain"
                                    />
                                </div>
                                <h4 className="text-center font-medium text-gray-900">Certification {item}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                        >
                            What Our <span className="text-blue-600">Clients</span> Say
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
                        ></motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">
                                "Waqas Alsyed Technical Services has been maintaining our office building for over 5 years. Their response time is excellent, and their technicians are knowledgeable and professional. Highly recommended!"
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img
                                        src="/api/placeholder/100/100"
                                        alt="Client"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Mohammed Al-Qasemi</h4>
                                    <p className="text-sm text-gray-600">Facility Manager, Prime Tower</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">
                                "The team at Waqas Alsyed responded to our emergency AC breakdown on a Friday evening and had our systems up and running within hours. Their 24/7 service is truly reliable."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img
                                        src="/api/placeholder/100/100"
                                        alt="Client"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                                    <p className="text-sm text-gray-600">Hotel Manager, Luxury Suites</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6">
                                "We've been working with Waqas Alsyed for our factory maintenance for the past decade. Their preventive maintenance program has significantly reduced our downtime and saved us money."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                    <img
                                        src="/api/placeholder/100/100"
                                        alt="Client"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Raj Patel</h4>
                                    <p className="text-sm text-gray-600">Operations Director, UAE Manufacturing</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="text-center mt-12">
                        <a
                            href="/testimonials"
                            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                        >
                            View More Testimonials
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;