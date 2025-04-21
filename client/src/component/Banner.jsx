import React, { useEffect, useState } from 'react';
import BannerImage from '../assets/Banner.png'
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";



const Banner = () => {

    const [key, setKey] = useState(0);
    const text = ["WAQAS ALSYED TECHNICAL SERVICES CO. L.L.C", "شركة وقاص السيد للخدمات الفنية ذ.م.م"];
    const [currentIndex, setCurrentIndex] = useState(0);



    useEffect(() => {
        const totalAnimationTime = text.length * 50 + 3000; // letter-by-letter + 5s pause
        const interval = setInterval(() => {
            setKey(prev => prev + 1); // re-render to replay animation
            setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, totalAnimationTime + 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div id='home' className='min-h-[80vh] md:min-h-[100vh] flex items-center justify-center text-center px-4 relative overflow-hidden'

                style={{
                    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${BannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>

                <div className='max-w-6xl min-w-3 text-white z-10 relative px-4'>
                    <div className='flex gap-12 flex-col'
                    // className='absolute -bottom-12 -right-12 md:-bottom-8 md:-right-8 text-4xl md:text-5xl text-amber-300/20 rotate-12 '
                    >

                        <span className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md-mb-6 font-[Great + Vibes] bg-gradient-to-r from-amber-300 via-rose-300 to-rose-500 bg-clip-text text-transparent drop-shadow-2xl animte-fade-in gap-10'>Welcome To</span>
                        {/* HEADING */}
                        <h1
                            key={key}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 font-[Great+Vibes]  "
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


                    {/* DECORATIVE DEVIDER */}
                    <div className='w-48 md:w-64 h-1 bg-gradient-to-r from-transparent via-lime-300 to-transparent mx-auto my-6 md:my-8 rounded-full' />
                    { /* TAGLINE */}
                    <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">

                        {/* Button */}
                        <div className="bg-gradient-to-r from-rose-600 to-amber-500 max-w-150 min-w-70 px-6 py-4 md:px-10 md:py-5 rounded-full transition-transform duration-300 text-white uppercase font-bold tracking-widest 
                            hover:scale-105 hover:shadow-2xl flex items-center gap-2 md:gap-3 mx-auto border-2 border-amber-200 hover:border-rose-200 group text-sm md:text-base">

                            <FaCalendarAlt className="text-xl md:text-2xl animate-pulse group-hover:animate-none" />
                            <Link to='contact' smooth={true}>Book Your Royal Experience</Link>

                        </div>

                    </div>


                </div>

            </div>
            <div className="font-sans text-gray-800 bg-gray-50">
                {/* Hero Section */}
                <header className="bg-blue-800 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Keeping Dubai Comfortable, One System at a Time
                        </h1>
                        <p className="text-md sm:text-lg md:text-xl mb-8">
                            Delivering 20+ years of excellence in HVAC, plumbing, electrical, and more.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link to="/contact">
                                <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold">
                                    Request a Quote
                                </button>
                            </Link>
                            <Link to="/about">
                            <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-blue-800 py-3 px-6 rounded-lg font-semibold">
                                Learn More
                            </button>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Services Section */}
                <section id="services" className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">What We Do</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'HVAC & Chilled Water',
                                    items: [
                                        'Air‑handling units & FAHU',
                                        'Chilled‑water pumps & pipes',
                                        'Heat‑exchanger servicing',
                                    ],
                                },
                                {
                                    title: 'Electrical & Lighting',
                                    items: [
                                        'Full rewiring & panel upgrades',
                                        'Emergency backup generators',
                                        'LED retrofit packages',
                                    ],
                                },
                                {
                                    title: 'Plumbing & Drainage',
                                    items: [
                                        'Leak detection & repair',
                                        'Sanitary ware installation',
                                        'Water‑saving fixtures',
                                    ],
                                },
                            ].map((service) => (
                                <div key={service.title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-3">{service.title}</h3>
                                    <ul className="space-y-1 list-disc list-inside text-sm sm:text-base">
                                        {service.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: '✔',
                                    title: '20+ Years in UAE',
                                    desc: 'Proven track record with residential, commercial, and industrial clients.',
                                },
                                {
                                    icon: '✔',
                                    title: 'Rapid Turnaround',
                                    desc: '24/7 support and emergency call‑outs—minimizing downtime.',
                                },
                                {
                                    icon: '✔',
                                    title: 'Certified Experts',
                                    desc: 'Trained, insured, and equipped with the latest diagnostic tools.',
                                },
                                {
                                    icon: '✔',
                                    title: 'Sustainability Focus',
                                    desc: 'Energy‑efficient upgrades to lower your utility bills and carbon footprint.',
                                },
                            ].map((benefit, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105"
                                >
                                    <span className="text-2xl mr-4 text-orange-500 flex-shrink-0">{benefit.icon}</span>
                                    <div>
                                        <p className="font-semibold">{benefit.title}</p>
                                        <p className="text-sm sm:text-base">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Process Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-10">Our Process</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { step: '1', title: 'Assess', desc: 'On‑site evaluation by our senior engineer.' },
                                { step: '2', title: 'Plan', desc: 'Customized solution & cost estimate within 12 hours.' },
                                { step: '3', title: 'Execute', desc: 'Professional installation, repair, or maintenance.' },
                                { step: '4', title: 'Maintain', desc: 'Service contracts for preventive checks & priority support.' },
                            ].map((phase) => (
                                <div key={phase.step} className="space-y-4">
                                    <div className="text-3xl sm:text-4xl text-blue-800 font-bold">{phase.step}</div>
                                    <h4 className="text-lg sm:text-xl font-semibold">{phase.title}</h4>
                                    <p className="text-sm sm:text-base">{phase.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                {/* <footer id="contact" className="bg-blue-800 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Get in Touch</h2>
                        <p className="text-sm sm:text-base">Vikash Kumar</p>
                        <p className="text-sm sm:text-base">📞 +971 52 207 3520</p>
                        <p className="text-sm sm:text-base">Business Bay, Dubai, U.A.E.</p>
                        <button className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold">
                            Scan QR to Chat on WhatsApp
                        </button>
                    </div>
                </footer> */}
            </div>
        </>

    )
}

export default Banner
