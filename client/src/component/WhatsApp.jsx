import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '6201204954'; // Your WhatsApp number
  const message = 'Hello Waqas Team, I need your services.';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Chat on WhatsApp
      </button>
    </a>
  );
};

export default  WhatsAppButton