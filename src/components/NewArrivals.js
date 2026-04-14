import React, { useRef } from 'react';
import './NewArrivals.css';

const products = [
  { id: 1, title: "Classic Peach Embroidery Work Anarkali Gown", price: "BUY 1 @ Rs.300", image: "/new/n1.webp" },
  { id: 2, title: "Classic Grey Floral Motif Embroidered Gown", price: "BUY 1 @ Rs.950", image: "/new/n2.webp" },
  { id: 3, title: "Purple Designer Gown With Heavy Embroidery Work - Clothsvilla", price: "BUY 1 @ Rs.310", image: "/new/n3.webp" },
  { id: 4, title: "Attractive Sequence Embroidery Work Gown", price: "BUY 1 @ Rs.650", image: "/new/n4.webp" },
  { id: 5, title: "Embroidery Work Gown", price: "BUY 25 @ Rs.150", image: "/new/n5.webp" },
  { id: 6, title: "Pale Mauve Pink Embroidered Net Evening Gown", price: "BUY 1 @ Rs.340", image: "/new/n6.webp" }
  
];

const NewArrivals = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= 250;
    } else {
      scrollRef.current.scrollLeft += 250;
    }
  };

  return (
    <div className="New-slider-section">
      <h2 className="section-title" >Gowns and embroidery works</h2>
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

export default NewArrivals;
