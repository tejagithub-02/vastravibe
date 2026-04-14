import React, { useRef } from 'react';
import './PopularProducts.css';

const products = [
  { id: 1, title: "Rangoli Prizam Print", price: "BUY 1 @ Rs.300", image: "/popular/p1.jpeg" },
  { id: 2, title: "Patola Silk Saree Collection", price: "BUY 1 @ Rs.950", image: "/popular/p2.jpeg" },
  { id: 3, title: "Cotton SLIK New Collection", price: "BUY 1 @ Rs.310", image: "/popular/p3.jpeg" },
  { id: 4, title: "Kerala Cotton South Silk Saree", price: "BUY 1 @ Rs.650", image: "/popular/p5.jpeg" },
  { id: 5, title: "Magents pink silk sarees", price: "BUY 25 @ Rs.150", image: "/popular/p4.jpeg" },
  { id: 6, title: "Yellow Colour Gajraj", price: "BUY 1 @ Rs.340", image: "/popular/p6.jpeg" }
];

const PopularProducts = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === 'left' ? -250 : 250;

    }
  };

  const openWhatsApp = (title) => {
    console.log(`WhatsApp button clicked for: ${title}`); // Debugging
    const message = encodeURIComponent(`Hi, I'm interested in "${title}". Please provide more details.`);
    window.open(`https://wa.me/+90XXXXXX90?text=${message}`, '_blank');
  };

  return (
    <div className="popular-slider-section1" id="product">
      <h2 className="section-title">Our Most Popular Products</h2>
      <div className="slider-wrapper1">
        <button className="scroll-btn left" onClick={() => scroll('left')}>❮</button>
        <div className="slider-container1" ref={scrollRef}>
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="price-badge">{product.price}</div>
              <div className="image-container">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="image-overlay"></div>
              </div>
              <p className="product-title">{product.title}</p>
              <button
                className="shop-now-btn"
                onClick={() => openWhatsApp(product.title)}
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>❯</button>
      </div>
    </div>
  );
};

export default PopularProducts;