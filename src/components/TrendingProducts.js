// TrendingProducts.jsx
import React, { useRef } from 'react';
import './TrendingProducts.css';

const products = [
  { id: 1, title: "Premium Ready made Designer Gowns", price: "BUY 1 @ Rs.300", image: "/trending/g1.webp" },

  { id: 3, title: "Family Hallowen", price: "BUY 1 @ Rs.310", image: "/trending/p4.jpeg" },
  { id: 4, title: "Best Halloween", price: "BUY 1 @ Rs.650", image: "/trending/p5.jpg" },
  { id: 5, title: "Premium Sky Blue readymade Designer Gown", price: "BUY 25 @ Rs.150", image: "/trending/g4.webp" },
  { id: 6, title: "Easter BunnyMascot Costume", price: "BUY 1 @ Rs.340", image: "/trending/g5.webp" },
  { id: 7, title: "Champagne Embellished Gown", price: "BUY 1 @ Rs.499", image: "/trending/p6.jpeg" },
  
];

const TrendingProducts = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= 250;
    } else {
      scrollRef.current.scrollLeft += 250;
    }
  };

  return (
    <div className="Trending-slider-section">
      <h2 className="section-title">Rented Gowns and Happy Costumes</h2>
      <div className="slider-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>❮</button>
        
        <div className="slider-container" ref={scrollRef}>
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="price-badge">{product.price}</div>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll('right')}>❯</button>
      </div>
    </div>
  );
};

export default TrendingProducts;