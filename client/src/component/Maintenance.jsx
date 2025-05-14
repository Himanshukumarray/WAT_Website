import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdCheck, MdArrowForward } from 'react-icons/md';
import { FaRegCalendarCheck, FaTools, FaWrench, FaPhone } from 'react-icons/fa';

const PackageCard = ({ title, price, features, callouts, buttonLabel, recommended }) => {
  const navigate = useNavigate();

  const handleEnquire = () => {
    navigate('/contact');
  };

  return (
    <>
      <Helmet>
        <title>24/7 Maintenance Services for Water & Refrigeration Systems | WAT Services UAE</title>
        <meta
          name="description"
          content="Professional maintenance services for water purification systems, refrigeration equipment & commercial kitchens. Preventive maintenance plans, emergency repairs & regular servicing across UAE."
        />
        <meta
          name="keywords"
          content="water purification maintenance UAE, refrigeration system servicing Dubai, commercial kitchen equipment repairs, preventive maintenance plans, emergency repair services UAE, water filter maintenance Dubai, refrigeration maintenance contracts, scheduled service plans, RO system maintenance UAE"
        />
        <meta property="og:title" content="Expert Maintenance Services for Water & Refrigeration Systems | WAT Services" />
        <meta
          property="og:description"
          content="Trust UAE's specialists for comprehensive maintenance of water purification systems, commercial refrigeration equipment and kitchen installations. 24/7 emergency support available."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.watservices.com/maintenance" />
        <meta property="og:image" content="https://www.watservices.com/assets/maintenance-services-image.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.watservices.com/maintenance" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="author" content="WAT Services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Maintenance for Water & Refrigeration Systems | WAT Services UAE" />
        <meta name="twitter:description" content="Specialized maintenance services for water purification, refrigeration systems & commercial kitchen equipment across UAE." />
        <meta name="twitter:image" content="https://www.watservices.com/assets/maintenance-services-image.jpg" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:site_name" content="WAT Services" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="rating" content="General" />
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "WAT Services Maintenance",
          "description": "Professional maintenance services for water purification systems, refrigeration equipment and commercial kitchen installations",
          "provider": {
            "@type": "Organization",
            "name": "WAT Services",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "addressCountry": "UAE"
            }
          },
          "serviceType": ["Water Purification Maintenance", "Refrigeration System Service", "Commercial Kitchen Equipment Maintenance"],
          "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "UAE"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Maintenance Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Preventive Maintenance Plans"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Emergency Repair Services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Annual Maintenance Contracts"
                }
              }
            ]
          }
        }
      `}
        </script>
      </Helmet>

      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className={`relative bg-white rounded-2xl overflow-hidden shadow-lg h-full w-full flex flex-col ${recommended ? 'border-2 border-blue-500' : 'border border-gray-200'
          }`}
      >
        {recommended && (
          <div className="absolute top-0 right-0">
            <div className="bg-blue-500 text-white text-xs font-bold py-1 px-3 transform rotate-45 translate-x-8 translate-y-3">
              BEST VALUE
            </div>
          </div>
        )}

        <div className={`px-6 py-8 ${recommended ? 'bg-blue-50' : 'bg-white'}`}>
          <div className="flex items-center mb-4">
            <FaRegCalendarCheck className={`text-2xl ${recommended ? 'text-blue-600' : 'text-blue-500'} mr-3`} />
            <h2 className={`text-2xl font-bold ${recommended ? 'text-blue-700' : 'text-blue-600'}`}>
              {title}
            </h2>
          </div>

          <div className="mb-6">
            <p className="text-gray-500 text-sm mb-1">Starting from</p>
            <p className="text-3xl font-bold text-gray-800">
              {price} <span className="text-sm font-normal text-gray-500">/year</span>
            </p>
          </div>
        </div>

        <div className="flex-grow p-6 pt-0">
          <div className="space-y-6">
            {/* Emergency Callouts */}
            <div>
              <div className="flex items-center mb-3">
                <FaPhone className="text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-700">Emergency Support</h3>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 flex items-center">
                <MdCheck className="text-green-500 flex-shrink-0" />
                <p className="ml-2 text-gray-700">24/7/365 Helpline Support</p>
              </div>
            </div>

            {/* Preventive Maintenance */}
            {features && features.length > 0 && (
              <div>
                <div className="flex items-center mb-3">
                  <FaTools className="text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-700">Preventive Maintenance</h3>
                </div>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <MdCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Callouts */}
            {callouts && callouts.length > 0 && (
              <div>
                <div className="flex items-center mb-3">
                  <FaWrench className="text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-700">Included Callouts</h3>
                </div>
                <ul className="space-y-2">
                  {callouts.map((callout, index) => (
                    <li key={index} className="flex items-start">
                      <MdCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{callout}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="px-6 pb-6">
          <motion.button
            onClick={handleEnquire}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold shadow-md transition-all ${recommended
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50'
              }`}
          >
            {buttonLabel}
            <MdArrowForward />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

const Packages = () => {
  const [selectedTab, setSelectedTab] = useState('home');

  // Package data
  const homePackages = [
    {
      id: 'basic',
      title: "Basic Home Maintenance",
      price: "AED 2,000",
      features: [
        "1× A/C System: Check-up, servicing, greasing, and filter cleaning",
        "2× Free callouts for joinery and carpentry work",
        "1× FCU general check-up, servicing, greasing, filter & CDP cleaning",
        "1× Plumbing and sanitary check-up and flushing",
        "1× Water pump servicing and general check-up",
        "1× Electrical DB inspection and cleaning",
      ],
      callouts: [
        "Unlimited – MEP complaints",
      ],
      buttonLabel: "Enquire Now",
      recommended: false
    },
    {
      id: 'premium',
      title: "Premium Home Maintenance",
      price: "AED 6,000",
      features: [
        "3× A/C System: Check-up, servicing, greasing, and filter cleaning",
        "3× CDP flushing and drip tray cleaning",
        "3× Domestic water pump: Inspection, servicing, and greasing",
        "3× Water supply fixtures checkup (faucets, showers, W/Cs, etc.)",
        "3× Electrical DB inspection and cleaning",
        "3× Lights, sockets, and switches inspection and cleaning",
        "3× Plumbing and drainage check-up and flushing",
        "2× Free handyman/carpentry callouts (up to 2 hrs each)",
        "Minor paint touch-ups (up to 3 sqm — 3 visits)",
        "3× Joinery and carpentry servicing and maintenance",
      ],
      callouts: [
        "Unlimited MEP complaint callouts",
      ],
      buttonLabel: "Enquire Now",
      recommended: true
    }
  ];

  const commercialPackages = [
    {
      id: 'basic-commercial',
      title: "Basic Commercial Plan",
      price: "AED 7,500",
      features: [
        "2× A/C System: Professional servicing and maintenance",
        "2× Electrical systems inspection and maintenance",
        "2× Plumbing systems check-up and maintenance",
        "1× Fire safety systems inspection",
        "24/7 emergency support for critical systems",
      ],
      callouts: [
        "5 free commercial callouts per year",
        "Priority response for business continuity issues"
      ],
      buttonLabel: "Enquire Now",
      recommended: false
    },
    {
      id: 'comprehensive-commercial',
      title: "Comprehensive Commercial",
      price: "AED 15,000",
      features: [
        "4× A/C System: Complete professional servicing",
        "4× Electrical systems full inspection and maintenance",
        "4× Plumbing and water systems comprehensive service",
        "2× Fire safety systems complete inspection",
        "2× Building management systems check and optimization",
        "Light fixtures maintenance and replacement",
        "Access control systems maintenance",
      ],
      callouts: [
        "Unlimited MEP complaint callouts",
        "4-hour response guarantee for critical systems",
        "Dedicated account manager"
      ],
      buttonLabel: "Enquire Now",
      recommended: true
    }
  ];

  // Display packages based on selected tab
  const packagesToDisplay = selectedTab === 'home' ? homePackages : commercialPackages;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-800 mb-4">
            Annual Maintenance Packages
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Choose the right maintenance package for your needs and enjoy peace of mind with our professional services.
          </p>
        </motion.div>

        {/* Package Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-blue-50 rounded-lg shadow-md">
            <button
              onClick={() => setSelectedTab('home')}
              className={`px-6 py-2.5 text-sm md:text-base font-medium rounded-md transition-all ${selectedTab === 'home'
                ? 'bg-blue-600 text-white shadow'
                : 'text-blue-600 hover:bg-blue-100'
                }`}
            >
              Home Maintenance
            </button>
            <button
              onClick={() => setSelectedTab('commercial')}
              className={`px-6 py-2.5 text-sm md:text-base font-medium rounded-md transition-all ${selectedTab === 'commercial'
                ? 'bg-blue-600 text-white shadow'
                : 'text-blue-600 hover:bg-blue-100'
                }`}
            >
              Commercial Maintenance
            </button>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedTab} // Re-render animation when tab changes
        >
          {packagesToDisplay.map((pkg) => (
            <motion.div key={pkg.id} variants={itemVariants}>
              <PackageCard {...pkg} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-16 bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Need a Customized Maintenance Solution?</h3>
          <p className="text-gray-600 mb-6">
            We can create tailored maintenance packages to meet your specific requirements.
            Contact our team to discuss your needs.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-md transition-all"
          >
            Request Custom Quote
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Packages;