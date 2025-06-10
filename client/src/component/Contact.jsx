import React, { useState, useCallback, useMemo } from "react";
import { Check, X, User, Phone, MapPin, Calendar, Clock, CheckCircle, AlertCircle, Send, Loader } from "lucide-react";
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    selectedServices: []
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [step, setStep] = useState(1); // 1: Personal Info, 2: Services, 3: Schedule

  const { name, phone, date, time, address, selectedServices } = formData;

  const services = useMemo(() => [
    "HVAC & Air Flow Systems",
    "Chilled Water Systems",
    "Heat Exchanger Maintenance",
    "Cooling Tower Service",
    "Chilled Water Pump Repair",
    "Smart Thermostat Installation",
    "Smart Chilled Water Control",
    "Air Conditioning Units (FAHU/FCU)",
    "Plumbing Services",
    "Electrical Services",
    "Carpentry & Joinery",
    "Civil Work & Painting",
    "Gypsum Installation",
    "Tiling & Light Services",
    "Specialist Consultation",
    "Other Services"
  ], []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value
    }));
  };

  const toggleService = useCallback((service) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
  }, []);

  const validateStep = (stepNumber) => {
    const newErrors = {};

    if (stepNumber === 1) {
      if (!name.trim()) newErrors.name = 'Name is required';
      if (!phone.trim()) newErrors.phone = 'Phone number is required';
      else if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone number must be exactly 10 digits';
      if (!address.trim()) newErrors.address = 'Address is required';
    } else if (stepNumber === 2) {
      if (selectedServices.length === 0) newErrors.services = 'Please select at least one service';
    } else if (stepNumber === 3) {
      if (!date) newErrors.date = 'Date is required';
      if (!time) newErrors.time = 'Time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = useCallback((e) => {
    if (e) e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    const message = `Name: ${name}
    Phone: ${phone}
    Services: ${selectedServices.join(', ')}
    Address: ${address}
    Date: ${date}
    Time: ${time}`;

    const encodedMessage = encodeURIComponent(message);

    setTimeout(() => {
      window.open(`https://wa.me/+971522073520?text=${encodedMessage}`, '_blank');
      setShowSuccess(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          date: '',
          time: '',
          address: '',
          selectedServices: []
        });
        setStep(1);
        setShowSuccess(false);
      }, 3000);
    }, 1500);
  }, [name, phone, selectedServices, address, date, time]);


  // Progress indicator
  const ProgressBar = () => (
    <div className="flex justify-between items-center mb-8 px-4">
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex flex-col items-center relative">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${step >= item
              ? 'bg-blue-600 border-blue-700 text-white'
              : 'bg-white border-gray-200 text-gray-400'
              }`}
          >
            {step > item ? (
              <CheckCircle className="w-6 h-6" />
            ) : (
              <span className="text-lg font-bold">{item}</span>
            )}
          </div>
          <span className={`text-sm mt-2 font-medium ${step >= item ? 'text-blue-700' : 'text-gray-400'}`}>
            {item === 1 ? 'Personal Info' : item === 2 ? 'Services' : 'Schedule'}
          </span>

          {item < 3 && (
            <div className={`absolute top-6 left-full w-16 md:w-24 h-0.5 -ml-2 ${step > item ? 'bg-blue-600' : 'bg-gray-200'
              }`} style={{ width: 'calc(100% - 3rem)' }} />
          )}
        </div>
      ))}
    </div>
  );

  // Success message component
  const SuccessMessage = () => (
    <div className="text-center py-12 px-4 rounded-xl bg-green-50 border-2 border-green-100 shadow-lg">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-green-800 mb-2">Booking Confirmed!</h3>
      <p className="text-green-700">
        Your service has been scheduled successfully. We've opened WhatsApp for you to complete the process.
      </p>
    </div>
  );

  // Form step 1: Personal Information
  const renderPersonalInfoStep = () => (
    <>
      <h3 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h3>
      <div className="space-y-4">
        <div className="relative group">
          <div className="absolute left-4 top-4 text-blue-500">
            <User className="w-5 h-5" />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={name}
            onChange={handleChange}
            className={`w-full pl-12 pr-4 py-4 rounded-lg border-2 ${errors.name ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-blue-400'
              } focus:ring-2 focus:ring-blue-100 transition-all duration-300 placeholder-gray-400 text-gray-800 font-medium`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 ml-2 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.name}
            </p>
          )}
        </div>

        <div className="relative group">
          <div className="absolute left-4 top-4 text-blue-500">
            <Phone className="w-5 h-5" />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={handleChange}
            className={`w-full pl-12 pr-4 py-4 rounded-lg border-2 ${errors.phone ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-blue-400'
              } focus:ring-2 focus:ring-blue-100 transition-all duration-300 placeholder-gray-400 text-gray-800 font-medium`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1 ml-2 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.phone}
            </p>
          )}
        </div>

        <div className="relative group">
          <div className="absolute left-4 top-4 text-blue-500">
            <MapPin className="w-5 h-5" />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={address}
            onChange={handleChange}
            className={`w-full pl-12 pr-4 py-4 rounded-lg border-2 ${errors.address ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-blue-400'
              } focus:ring-2 focus:ring-blue-100 transition-all duration-300 placeholder-gray-400 text-gray-800 font-medium`}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1 ml-2 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.address}
            </p>
          )}
        </div>
      </div>
    </>
  );

  // Form step 2: Services Selection
  const renderServicesStep = () => (
    <>
      <h3 className="text-xl font-bold text-gray-800 mb-6">Select Services</h3>

      {/* Selected Services Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {selectedServices.length > 0 ? (
          selectedServices.map(service => (
            <div key={service} className="flex items-center bg-blue-50 rounded-full px-4 py-2 text-sm text-blue-700
              font-medium transition-all hover:bg-blue-100">
              <span>{service}</span>
              <button type="button" onClick={() => toggleService(service)}
                className="ml-2 hover:text-red-500">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))
        ) : (
          <div className="w-full text-center py-3 bg-gray-50 rounded-lg text-gray-500 text-sm">
            No services selected yet. Please choose from the options below.
          </div>
        )}
      </div>

      {/* Service Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service) => (
          <div key={service} onClick={() => toggleService(service)}
            className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${selectedServices.includes(service)
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`}>
            <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center ${selectedServices.includes(service) ? 'bg-white text-blue-600' : 'bg-gray-200 text-transparent'
              }`}>
              <Check className="w-4 h-4" />
            </div>
            <span className="ml-3 text-sm font-medium">
              {service}
            </span>
          </div>
        ))}
      </div>

      {errors.services && (
        <p className="text-red-500 text-sm mt-4 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" /> {errors.services}
        </p>
      )}
    </>
  );

  // Form step 3: Schedule
  const renderScheduleStep = () => (
    <>
      <h3 className="text-xl font-bold text-gray-800 mb-6">Schedule Your Appointment</h3>

      <div className="space-y-4">
        <div className="relative">
          <label className="block text-gray-700 text-sm font-medium mb-2">Preferred Date</label>
          <div className="relative">
            <div className="absolute left-4 top-4 text-blue-500">
              <Calendar className="w-5 h-5" />
            </div>
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className={`w-full pl-12 pr-4 py-4 rounded-lg border-2 ${errors.date ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-blue-400'
                } focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-gray-800 font-medium`}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1 ml-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" /> {errors.date}
              </p>
            )}
          </div>
        </div>

        <div className="relative">
          <label className="block text-gray-700 text-sm font-medium mb-2">Preferred Time</label>
          <div className="relative">
            <div className="absolute left-4 top-4 text-blue-500">
              <Clock className="w-5 h-5" />
            </div>
            <input
              type="time"
              name="time"
              value={time}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-4 rounded-lg border-2 ${errors.time ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-blue-400'
                } focus:ring-2 focus:ring-blue-100 transition-all duration-300 text-gray-800 font-medium`}
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1 ml-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" /> {errors.time}
              </p>
            )}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4 shadow-sm">
          <h4 className="text-gray-800 font-medium flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-blue-600" /> Booking Summary
          </h4>
          <ul className="text-gray-700 text-sm space-y-2">
            <li><span className="font-medium">Name:</span> {name}</li>
            <li><span className="font-medium">Phone:</span> {phone}</li>
            <li><span className="font-medium">Address:</span> {address}</li>
            <li><span className="font-medium">Services:</span> {selectedServices.join(', ')}</li>
            <li><span className="font-medium">Date & Time:</span> {date} at {time}</li>
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Helmet>
        <title>Contact WAT Services | 24/7 Water & Refrigeration Support UAE</title>
        <meta
          name="description"
          content="Reach our water purification and refrigeration experts for immediate assistance across Dubai, Abu Dhabi & Sharjah. 24/7 emergency service available."
        />
        {/* <!-- Other meta tags specific to contact page --> */}
      </Helmet>

      <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-sans text-gray-900">
              Book Your <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Professional solutions for your business needs
            </p>
          </div>

          {showSuccess ? (
            <SuccessMessage />
          ) : (
            <div className="bg-white rounded-xl shadow-xl p-5 sm:p-8 border border-gray-100">
              <ProgressBar />

              <div>
                {step === 1 && renderPersonalInfoStep()}
                {step === 2 && renderServicesStep()}
                {step === 3 && renderScheduleStep()}

                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                      Back
                    </button>
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-bold shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="ml-auto flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Confirm Booking
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Need assistance? Contact our customer support team at <span className="font-semibold">waqasalsyedtech@gmail.com</span></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;