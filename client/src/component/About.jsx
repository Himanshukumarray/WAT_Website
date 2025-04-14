import React from 'react';
import { FiScissors, FiUser, FiHeart, FiAward } from 'react-icons/fi';
import imgabout from '../assets/Banner.png'

const About = () => {

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
            desc: "We are always available for you"
        },
        {
            icon: <FiHeart className="w-8 h-8" />,
            title: "Passionate Team",
            desc: "Dedicated to enhancing your Product"
        }
    ];

    return (
        <section id="about" className="py-24 bg-gradient-to-b from-rose-200 to-pink-100">

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
                                        </div>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About


