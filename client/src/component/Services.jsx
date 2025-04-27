import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
    GiFlowerTwirl,
    GiLipstick,
    GiMirrorMirror,
    GiSpray,
} from "react-icons/gi";
import { FaSpa, FaSmile } from "react-icons/fa";
import { MdFace, MdOutlineSelfImprovement } from "react-icons/md";
import Acinstall from '../assets/Acinstall.jpg'
import Maintainance from '../assets/Ac-Repair2.webp';
import Satisfaction from '../assets/air-conditioning-repair.jpg';
import BridalMakeup from '../assets/electrical1.jpg';
import Manicure from '../assets/electrical3.jpg';
import LaserHairRemoval from '../assets/electrical2.avif'
import Microblading from '../assets/plumbing3.jpg'
import BodyScrub from '../assets/plumbing2.jpg'
import plumbing3 from '../assets/plumbing1.jpg'

const Services = () => {
    const [showAll, setShowAll] = useState(false);
    const services = [
        {
            id: 1,
            title: "New AC Installation Services",
            price: "$450",
            image: Acinstall,
            tags: ["AC installation", "AC setup service"],
            description: "Our skilled technicians ensure your air conditioning systems run smoothly and efficiently, even in the toughest conditions.",
            icon: <MdFace className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 2,
            title: "AC Maintenance & Repair",
            price: "$150",
            image: Maintainance,
            tags: ["AC repair", "HVAC maintenance"],
            description: "Our certified technicians diagnose and fix issues efficiently, ensuring peak performance, energy efficiency, and longer lifespan for your air conditioning systems.",
            icon: <GiMirrorMirror className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 3,
            title: "Satisfaction Guaranteed",
            price: "$250",
            image: Satisfaction,
            tags: ["Reliable technicians", "Customer happiness"],
            description: "We believe great service begins and ends with satisfied customers.Your comfort and trust drive everything we do.",
            icon: <FaSpa className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 4,
            title: "Expert Electrical Solutions ",
            price: "$300",
            image: BridalMakeup,
            tags: ["SmartElectricalWork", "SafeElectricalServices"],
            description: "Delivering safe, efficient, and reliable electrical services you can trust.",
            icon: <GiLipstick className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 5,
            title: "Certified Electricians ",
            price: "$100",
            image: Manicure,
            tags: ["ReliableElectricians", "Care"],
            description: "From installations to emergency repairs — we’ve got your circuits covered.",
            icon: <GiFlowerTwirl className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 6,
            title: "Smart, Safe, and Seamless Electrical Work",
            price: "$200",
            image: LaserHairRemoval,
            tags: ["ElectricalSafety", "PowerNeeds"],
            description: "Modern electrical solutions designed to power your space with confidence.",
            icon: <GiSpray className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 7,
            title: "Plumbing Installation",
            price: "$400",
            image: Microblading,
            tags: ["PipeInstallation", "ReliablePlumbing"],
            description: "Natural-looking eyebrow enhancement with micro-pigmentation",
            icon: <MdOutlineSelfImprovement className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 8,
            title: "Maintenance Solutions",
            price: "$400",
            image: BodyScrub,
            tags: ["PlumbingCare", "Maintenance"],
            description: "Keep your plumbing system in top condition with regular maintenance.",
            icon: <FaSmile className="w-8 h-8 text-amber-600" />,
        },
        {
            id: 9,
            title: "Repairs and Upgrades",
            price: "$400",
            image: plumbing3,
            tags: ["LeakRepairs", "FixtureUpgrades"],
            description: "Quick repairs and upgrades by expert plumbers to enhance your plumbing system's functionality and efficiency.",
            icon: <FaSmile className="w-8 h-8 text-amber-600" />,
        },
    ];

    const toggleServices = () => {
        setShowAll(!showAll);
        if (!showAll) {
            scroll.scrollMore(500, { smooth: true })
        }
    }

    return (
        <section id="services" className="py-20 bg-gradient-to-b from-[#fceedd] to-[#f9eab8]">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-[Dancing_Script] mb-4 bg-gradient-to-r from-[#f7e7ce] to-[#ffe5b4] bg-clip-text">
                        Our Services
                    </h2>
                    <p className="text-amber-800 max-w-2xl mx-auto text-xl font-medium font-[Dancing_Script]">
                        Seamless service, superior quality — whether it’s AC repair, plumbing, electrical, or painting, we handle it all with precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {(showAll ? services : services.slice(0, 6)).map((service) => (
                        <div key={service.id} className="group relative bg-[#fff9e6] rounded-2xl shadow-xl border-2 border-amber-100 overflow-hidden transition-all duration-300 hover:border-amber-200 hover:shadow-2xl hover:-translate-y-2">

                            <div className="relative h-72 overflow-hidden">
                                {/* <div className="absolute top-4 right-4 z-10 bg-white/30 backdrop:blur-sm p-2 rounded-full">
                                    {service.icon}
                                </div> */}
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" loading="lazy" />

                                {/* <div className="absolute bottom-0 left-8 right-8 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-lg">
                                    PLACEHOLDER FOR PRICE
                                    <span className="bg-amber-500/90 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                                        {service.price}
                                    </span>
                                </div> */}
                            </div>

                            <div className="p-6">
                                {/* Tags Section */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {service.tags.map((tag) => (
                                        <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium border border-amber-200 hover:bg-amber-100 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-[Dancing_Script] mb-2 text-amber-800">
                                    {service.title}
                                </h3>
                                <p className="text-amber-600 leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/*TOGGLE */}
                <div className="flex justify-center mt-12">
                    <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-200 font-bold flex items-center gap-2" onClick={toggleServices}>
                        {showAll ? "Show Less" : "Explore More"}
                        <GiFlowerTwirl className="w-5 h-5 animate-pulse" />

                    </button>

                </div>
            </div>

        </section>
    )
}

export default Services
