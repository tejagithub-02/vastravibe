import React, { useEffect, useState } from 'react';
import './Banner.css';
import banner1 from '../assets/b-1.jpg'; // Replace with your real image
import banner2 from '../assets/banner2.jpg'; // Replace with your real image

const Banner = () => {
  const images = [banner1, banner2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5s

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner-carousel">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index + 1}`}
          className={`banner-img ${index === current ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Banner;
