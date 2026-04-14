import React, { useState } from 'react';
import './EnquiryForm.css';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const whatsappMessage = `*Enquiry from VastraVibe*\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n📝 Message: ${message}`;
    
    const phoneNumber = '90XXXXXX90'; // WhatsApp format: country code + number
    const encodedMsg = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;

    window.open(whatsappURL, '_blank');

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="enquiry-form-section" id="form">
      <h2>Send Us an Enquiry</h2>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

       

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

       

        <button type="submit1">Submit Enquiry via WhatsApp</button>
      </form>
    </div>
  );
};

export default EnquiryForm;
