import React from 'react';
import { motion } from 'framer-motion';

const PackageCard = ({ title, price, features, callouts, buttonLabel }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col justify-between h-full w-full"
  >
    <div>
      <h2 className="text-2xl font-bold text-blue-700 mb-2">{title}</h2>
      <p className="text-lg font-semibold text-gray-800 mb-4">
        Starting from <span className="text-green-600">{price}</span>
      </p>

      <h3 className="text-xl font-semibold text-gray-700 mb-2">Emergency Callouts:</h3>
      <p className="mb-4">24/7/365 Helpline Support</p>

      {features && (
        <>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Preventive Maintenance Services:</h3>
          <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </>
      )}

      {callouts && (
        <>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Callouts:</h3>
          <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
            {callouts.map((callout, index) => (
              <li key={index}>{callout}</li>
            ))}
          </ul>
        </>
      )}
    </div>

    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-colors duration-300">
      {buttonLabel}
    </button>
  </motion.div>
);

const Packages = () => (
  <div className="max-w-7xl mx-auto min-h-screen bg-gray-50 pt-28 px-4 lg:px-6">
    <motion.h1
      className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      BOOK ANNUAL MAINTENANCE PACKAGE
    </motion.h1>

    <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 mb-10">
      {/* Premium Package */}
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <PackageCard
          title="Premium Home Maintenance Package"
          price="AED 6,800"
          features={[
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
            "Unlimited MEP complaint callouts",
            "5× Joinery and carpentry inspections for villa assets",
            "Minor paint touch-ups (up to 3 sqm — 10 visits)",
            "4× Free handyman/carpentry callouts (up to 2 hrs each)",
            "2× General pest control visits",
            "1× Glass cleaning visit",
            "1× Water tank cleaning visit",
          ]}
          buttonLabel="👉 Enquire Now"
        />
      </div>

      {/* Basic Package */}
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <PackageCard
          title="Basic Home Maintenance Package"
          price="AED 1,599"
          features={[
            "1× A/C System: Check-up, servicing, greasing, and filter cleaning",
            "2× Free callouts for joinery and carpentry work",
            "1× FCU general check-up, servicing, greasing, filter & CDP cleaning",
            "1× Plumbing and sanitary check-up and flushing",
            "1× Water pump servicing and general check-up",
            "1× Electrical DB inspection and cleaning",
          ]}
          callouts={[
            "Unlimited – A/C failure",
            "Unlimited – Total/partial loss of power",
            "Unlimited – Water flooding/leakage",
            "Unlimited – Water supply failure",
          ]}
          buttonLabel="👉 Enquire Now"
        />
      </div>
    </div>
  </div>
);

export default Packages;
