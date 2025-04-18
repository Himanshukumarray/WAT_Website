import React, { useEffect, useState } from 'react';
import BannerImage from '../assets/Banner.png'
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";



const Banner = () => {

    const [key, setKey] = useState(0);
    const text = ["WAQAS ALSYED TECHNICAL SERVICES CO. L.L.C","شركة وقاص السيد للخدمات الفنية ذ.م.م"];
    const [currentIndex, setCurrentIndex] = useState(0);

   

    useEffect(() => {
        const totalAnimationTime = text.length * 50 + 3000; // letter-by-letter + 5s pause
        const interval = setInterval(() => {
            setKey(prev => prev + 1); // re-render to replay animation
            setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, totalAnimationTime+1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id='home' className='min-h-[80vh] md:min-h-[100vh] flex items-center justify-center text-center px-4 relative overflow-hidden'

            style={{
                background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${BannerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>

            <div className='max-w-6xl min-w-3 text-white z-10 relative px-4'>
                <div  className='flex gap-12 flex-col'
                // className='absolute -bottom-12 -right-12 md:-bottom-8 md:-right-8 text-4xl md:text-5xl text-amber-300/20 rotate-12 '
                >
               
                <span className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md-mb-6 font-[Great + Vibes] bg-gradient-to-r from-amber-300 via-rose-300 to-rose-500 bg-clip-text text-transparent drop-shadow-2xl animte-fade-in gap-10'>Welcome To Our</span>
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
    )
}

export default Banner
