// src/components/WhatsAppButton.js
import React from 'react';
import './WhatsAppButton.css'; // External styles

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/90XXXXXX90"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
