import React, { useEffect, useState } from 'react';
import { FiUser, FiHeart, FiCheckCircle, FiClock, FiTool, FiShield, FiThumbsUp, FiUsers, FiSmile } from 'react-icons/fi';
import imgabout from '../assets/Banner.png'
import { Helmet } from 'react-helmet';

const About = () => {

    const text = ["Since our founding, we’ve completed hundreds of projects across residential towers, commercial buildings, retail fit‑outs and industrial facilities throughout Dubai and beyond."]
    const features = [
        // {
        //     icon: <FiScissors className="w-8 h-8" />,
        //     title: "Expert Stylists",
        //     desc: "Certified professionals with artistic vision"
        // },
        // {
        //     icon: <GiLipstick className="w-8 h-8" />,
        //     title: "Premium Products",
        //     desc: "Luxury brands for ultimate beauty experience"
        // },
        {
            icon: <FiUser className="w-8 h-8" />,
            title: "Custom Care",
            desc: "We are always available for you",
            mail_us: " waqasalsyedtech@gmail.com"
        },
        {
            icon: <FiHeart className="w-8 h-8" />,
            title: "Passionate Team",
            desc: "Dedicated to enhancing your Product"
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [key, setKey] = useState(0);

    const experience = [
        {
            icon: <FiCheckCircle className="w-6 h-6 text-rose-500" />,
            title: '20+ Years in the UAE',
            desc: 'Completed hundreds of residential, commercial, and industrial projects.'
        },
        {
            icon: <FiCheckCircle className="w-6 h-6 text-rose-500" />,
            title: 'Multidisciplinary Expertise',
            desc: 'From chilled‑water plants to precision plumbing, we cover every trade.'
        },
        {
            icon: <FiCheckCircle className="w-6 h-6 text-rose-500" />,
            title: 'Certified & Insured Pros',
            desc: 'Technicians with UAE‑approved certifications and global safety standards.'
        },
        {
            icon: <FiCheckCircle className="w-6 h-6 text-rose-500" />,
            title: 'Proven Track Record',
            desc: '98% client‑satisfaction rate and enduring partnerships.'
        }
    ];

    const reasons = [
        {
            icon: <FiClock className="w-6 h-6 text-rose-500" />,
            title: '24/7 Rapid Response',
            desc: 'Emergency breakdown? We’re on call day and night to get you back up and running.'
        },
        {
            icon: <FiTool className="w-6 h-6 text-rose-500" />,
            title: 'Tailored Solutions',
            desc: 'Every project is unique—our experts craft a plan that fits your exact needs and budget.'
        },
        {
            icon: <FiShield className="w-6 h-6 text-rose-500" />,
            title: 'Quality Assurance',
            desc: 'We use only OEM parts and industry‑approved materials, backed by workmanship warranties.'
        },
        {
            icon: <FiUsers className="w-6 h-6 text-rose-500" />,
            title: 'Experienced Team',
            desc: 'Our certified technicians bring decades of combined expertise to every job.'
        },
        {
            icon: <FiThumbsUp className="w-6 h-6 text-rose-500" />,
            title: 'Proven Trust',
            desc: 'A 98% client‑satisfaction rate speaks to our reliability and long‑term partnerships.'
        },
        {
            icon: <FiSmile className="w-6 h-6 text-rose-500" />,
            title: 'Client Satisfaction',
            desc: 'We prioritize your feedback and continuously improve to exceed your expectations.'
        }
    ];


    useEffect(() => {
        const totalAnimationTime = text.length * 50 + 11000; // letter-by-letter + 5s pause
        const interval = setInterval(() => {
            setKey(prev => prev + 1); // re-render to replay animation
            setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, totalAnimationTime + 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Helmet>
                {/* Primary SEO Tags */}
                <title>Waqas Alsyed Technical Services Co. L.L.C – UAE’s Trusted Maintenance Experts</title>
                <meta
                    name="description"
                    content="WAQAS ALSYED TECHNICAL SERVICES Co. L.L.C offers reliable technical and maintenance solutions across residential, commercial, and industrial sectors in the UAE. Contact us for electrical, plumbing, HVAC, painting, carpentry, and general maintenance services."
                />
                <meta
                    name="keywords"
                    content="technical services UAE, maintenance services Dubai, electrical contractor UAE, plumbing services UAE, HVAC maintenance, Waqas Alsyed, general maintenance Dubai"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Waqas Alsyed Technical Services Co. L.L.C – UAE’s Trusted Maintenance Experts" />
                <meta
                    property="og:description"
                    content="Discover over 20 years of expertise in residential, commercial, and industrial maintenance with WAQAS ALSYED. Serving the UAE with certified technicians and guaranteed workmanship."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://waqasalsyed.ae" />
                <meta property="og:image" content="https://waqasalsyed.ae/assets/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Waqas Alsyed Technical Services Co. L.L.C – UAE’s Trusted Maintenance Experts" />
                <meta
                    name="twitter:description"
                    content="Offering top-quality electrical, plumbing, HVAC, and general maintenance services across the UAE. Reach out for 24/7 rapid response and tailored solutions."
                />
                <meta name="twitter:image" content="https://waqasalsyed.ae/assets/og-image.jpg" />
            </Helmet>



            <section className="py-24 bg-gradient-to-b from-rose-200 to-pink-100">

                <div className="container mx-auto px-4 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* IMG SECTION */}
                        <div className="relative group">

                            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-all duration-300" />

                            <div className="relative bg-pink-100 rounded-3xl p-8 transform">

                                <div className="relative bg-rose-100 rounded-3xl p-4 md:p-8 transform hover:scale-105 transition-all duration-300">

                                    <div className="aspect-square rounded-2xl overflow-hidden">
                                        <img src={imgabout} alt="About img" className="w-full h-full object-cover object-center" />
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/*CONTENT SECTION */}

                        <div className='space-y-8'>
                            {/* <div className='inline-block'>
                            <div className='flex items-center space-x-3 bg-rose-100 px-4 py-2 rounded-full'>
                                <FiAward className='text-rose-400' />
                                <span className='text-sm font-semibold text-rose-600'>
                                    Award Winning Salon
                                </span>

                            </div>

                        </div> */}
                            <h2 className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                                About Us
                            </h2>

                            <p className='text-lg text-gray-600 leading-relaxed'>
                                WAQAS ALSYED TECHNICAL SERVICES CO. L.L.C is a trusted provider of high-quality technical and maintenance services across residential, commercial, and industrial sectors in the UAE. With a commitment to excellence and a customer-first approach, we deliver reliable solutions tailored to meet the unique needs of our clients.

                                Backed by a team of skilled professionals, we specialize in a wide range of services including electrical works, plumbing, HVAC, painting, carpentry, and general maintenance. At WAQAS ALSYED, we believe in combining technical expertise with integrity, efficiency, and safety—ensuring every project is completed to the highest standards.

                                Driven by innovation and guided by strong ethical values, our mission is to build long-term relationships with our clients by consistently exceeding expectations and delivering unmatched service quality.                        </p>

                            {/* FEATURE GRID */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                {features.map((features, index) => (
                                    <div key={index} className='p-6 bg-white rounded-xl shadow-sm hover-shadow-lg transition-all duration-300 group'>
                                        <div className='flex items-center space-x-4 '>
                                            <div className='p-3 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors'>
                                                <span className='text-rose-500'>
                                                    {features.icon}
                                                </span>

                                            </div>

                                            <div>
                                                <h3 className='text-lg font-semibold text-gray-800'>
                                                    {features.title}

                                                </h3>
                                                <p className='text-sm text-gray-500'>
                                                    {features.desc}
                                                </p>
                                                <p className='text-sm text-gray-500'>
                                                    {features.mail_us}
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                ))}

                            </div>


                        </div>
                        <div className="mt-16">
                            <h2 className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                                Our Experience
                            </h2>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                {experience.map((exp, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="mt-1 transform group-hover:scale-110 transition-transform duration-300">
                                            {exp.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                                            <p className="mt-1 text-gray-600">{exp.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div>
                            <h1
                                key={key}
                                className="text-1xl sm:text-2xl md:text-2xl font-bold mb-4 md:mb-6 font-[Great+Vibes]  "
                            >
                                {
                                    text[currentIndex].split("").map((char, index) => (
                                        <span
                                            key={index}
                                            className="fade-letter"
                                            style={{ animationDelay: `${index * 0.05}s` }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))
                                }
                            </h1>
                        </div>

                    </div>
                    <section
                        id="why-us"
                        className="w-full py-24 bg-gradient-to-b from-pink-100 to-rose-200 mt-15">
                        <div className="w-full px-4 lg:px-8">
                            <h2 className="text-4xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent text-center">
                                Why Choose Us
                            </h2>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
                                {reasons.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex flex-col items-start space-y-4 p-6 bg-white rounded-xl shadow-sm transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="transform hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>



                </div>
            </section>
        </>
    )

}

export default About


