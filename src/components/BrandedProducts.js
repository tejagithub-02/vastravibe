import React, { useRef } from 'react';
import './BrandedProducts.css';

const products = [
  { id: 1, title: "Jilmil Girls shoulder straps pink navratri dress", price: "BUY 1 @ Rs.300", image: "/branded/b1.webp" },
  { id: 2, title: "Girl's Floral Embellished Bodice Frock", price: "BUY 1 @ Rs.950", image: "/branded/b2.webp" },
  { id: 3, title: "Jilmil Girls' One Shoulder Navratri Dress", price: "BUY 1 @ Rs.310", image: "/branded/b3.webp" },
  { id: 4, title: "Saree kuchu krosha", price: "BUY 1 @ Rs.650", image: "/branded/p4.jpg" },
  { id: 5, title: "Silk thread design", price: "BUY 25 @ Rs.150", image: "/branded/p5.jpeg" },
  { id: 6, title: "Handmade Tassels", price: "BUY 1 @ Rs.340", image: "/branded/p6.jpeg" },
 
];

const BrandedProducts = () => {
  const scrollRef = useRef();
  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= 250;
    } else {
      scrollRef.current.scrollLeft += 250;
    }
  };
  return (
    <div className="Branded-slider-section">
      <h2 className="section-title">Kuchu and Children dresse's</h2>
      <div className="slider-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>&#10094;</button>
        
        <div className="slider-container" ref={scrollRef}>
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="price-badge">{product.price}</div>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll('right')}>&#10095;</button>
      </div>
    </div>
  );
};

export default BrandedProducts;
