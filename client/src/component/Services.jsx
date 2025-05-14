import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import {
  GiFlowerTwirl,
  GiLipstick,
  GiMirrorMirror,
  GiSpray,
} from "react-icons/gi";
import { FaSpa, FaSmile, FaToolbox, FaWrench } from "react-icons/fa";
import { MdFace, MdOutlineSelfImprovement, MdElectricalServices, MdPlumbing, MdAir } from "react-icons/md";

// Note: Import paths kept the same as original
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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const categories = [
    { id: "all", name: "All Services", icon: <FaToolbox /> },
    { id: "ac", name: "AC Services", icon: <MdAir /> },
    { id: "electrical", name: "Electrical", icon: <MdElectricalServices /> },
    { id: "plumbing", name: "Plumbing", icon: <MdPlumbing /> },
  ];

  const services = [
    {
      id: 1,
      title: "New AC Installation Services",
      price: "$450",
      image: Acinstall,
      tags: ["AC installation", "AC setup service"],
      category: "ac",
      description: "Our skilled technicians ensure your air conditioning systems run smoothly and efficiently, even in the toughest conditions.",
      icon: <MdAir className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 2,
      title: "AC Maintenance & Repair",
      price: "$150",
      image: Maintainance,
      tags: ["AC repair", "HVAC maintenance"],
      category: "ac",
      description: "Our certified technicians diagnose and fix issues efficiently, ensuring peak performance, energy efficiency, and longer lifespan for your air conditioning systems.",
      icon: <FaWrench className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 3,
      title: "Satisfaction Guaranteed",
      price: "$250",
      image: Satisfaction,
      tags: ["Reliable technicians", "Customer happiness"],
      category: "ac",
      description: "We believe great service begins and ends with satisfied customers. Your comfort and trust drive everything we do.",
      icon: <FaSmile className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 4,
      title: "Expert Electrical Solutions",
      price: "$300",
      image: BridalMakeup,
      tags: ["SmartElectricalWork", "SafeElectricalServices"],
      category: "electrical",
      description: "Delivering safe, efficient, and reliable electrical services you can trust.",
      icon: <MdElectricalServices className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 5,
      title: "Certified Electricians",
      price: "$100",
      image: Manicure,
      tags: ["ReliableElectricians", "Care"],
      category: "electrical",
      description: "From installations to emergency repairs — we've got your circuits covered.",
      icon: <GiFlowerTwirl className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 6,
      title: "Smart, Safe, and Seamless Electrical Work",
      price: "$200",
      image: LaserHairRemoval,
      tags: ["ElectricalSafety", "PowerNeeds"],
      category: "electrical",
      description: "Modern electrical solutions designed to power your space with confidence.",
      icon: <GiSpray className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 7,
      title: "Plumbing Installation",
      price: "$400",
      image: Microblading,
      tags: ["PipeInstallation", "ReliablePlumbing"],
      category: "plumbing",
      description: "Professional installation of plumbing systems, fixtures, and appliances.",
      icon: <MdPlumbing className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 8,
      title: "Maintenance Solutions",
      price: "$400",
      image: BodyScrub,
      tags: ["PlumbingCare", "Maintenance"],
      category: "plumbing",
      description: "Keep your plumbing system in top condition with regular maintenance.",
      icon: <FaWrench className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 9,
      title: "Repairs and Upgrades",
      price: "$400",
      image: plumbing3,
      tags: ["LeakRepairs", "FixtureUpgrades"],
      category: "plumbing",
      description: "Quick repairs and upgrades by expert plumbers to enhance your plumbing system's functionality and efficiency.",
      icon: <FaSmile className="w-8 h-8 text-blue-600" />,
    },
  ];

  const filteredServices = selectedCategory === "all"
    ? services
    : services.filter(service => service.category === selectedCategory);

  const displayedServices = showAll ? filteredServices : filteredServices.slice(0, 6);

  const toggleServices = () => {
    setShowAll(!showAll);
    if (!showAll) {
      scroll.scrollMore(500, { smooth: true })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Water Purification & Refrigeration Services | WAT Services UAE</title>
        <meta
          name="description"
          content="Comprehensive water filtration systems, refrigeration solutions, and kitchen equipment maintenance services for commercial and industrial clients across UAE."
        />
        {/* <!-- Other meta tags specific to services page --> */}
      </Helmet>

      <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Seamless service, superior quality — whether it's AC repair, plumbing, electrical, or painting, we handle it all with precision.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
          >
            {displayedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 right-4 z-10 bg-white p-2.5 rounded-full shadow-md">
                    {service.icon}
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-100 hover:bg-blue-100 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="text-blue-600 font-medium flex items-center text-sm hover:text-blue-800 transition-colors">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* "Show More" Button */}
          {filteredServices.length > 6 && (
            <div className="flex justify-center mt-12">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-200 font-medium"
                onClick={toggleServices}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {showAll ? "Show Less" : "Explore More"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Services;