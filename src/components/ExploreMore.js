import React, { useRef } from 'react';
import './ExploreMore.css';

const products = [
  { id: 1, title: "Patchwork Saree & Blouse", price: "BUY 1 @ Rs.300", image: "/explore/p1.webp" },
  { id: 2, title: "Beige Cotton Patchwork Saree", price: "BUY 1 @ Rs.950", image: "/explore/p2.webp" },
  { id: 3, title: "Yellow Patchwork Pure Munga Silk Saree", price: "BUY 1 @ Rs.310", image: "/explore/p3.webp" },
  { id: 4, title: "Cotton Patchwork Saree", price: "BUY 1 @ Rs.650", image: "/explore/p4.webp" },
  { id: 5, title: "JISB Cotton Back Embroidered Collar Blouse", price: "BUY 25 @ Rs.150", image: "/explore/p5.webp" },
  { id: 6, title: "Creaft Women's Round Neck Blouse", price: "BUY 1 @ Rs.340", image: "/explore/p6.webp" },
  { id: 7, title: "Gold Satin Shimmer U Neck Brocade Detailing Blouse", price: "BUY 1 @ Rs.499", image: "/explore/p7.webp" }

];

const ExploreMore = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= 250;
    } else {
      scrollRef.current.scrollLeft += 250;
    }
  };

  return (
    <div className="Explore-slider-section" style={{ padding: '60px 30px' }}>
      <h2 className="section-title">Patch Works and Back neck Design's</h2>
      <div className="slider-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>&#10094;</button>
        
        <div className="slider-container" ref={scrollRef}>
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="price-badge">{product.price}</div>
              <div className="image-container">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <p className="product-title">{product.title}</p>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll('right')}>&#10095;</button>
      </div>
    </div>
  );
};

export default ExploreMore;