import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo1.png';
import {
  FiMenu,
  FiHome,
  FiInfo,
  FiPackage,
  FiMessageCircle,
  FiFileText,
} from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const offers = [
    
    "🚚 Free Delivery on Orders Above ₹499",
    "🎨 Custom Blouses at 30% Off",
    "📦 20% Off on First Order",
    "💼 Office Supplies Discounted Today!",
    "📢 Bulk Order? Get Special Discounts!",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="header">
        {/* Left: Logo */}
        <div className="left-section">
          <Link to="/" className="logo-block" onClick={scrollToTop}>
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="site-title">Vastra Vibe</span>
          </Link>
        </div>

        {/* Right: Nav or Toggle */}
        <div className="right-section">
          <div className="nav-links large-only">
            <Link to="/" className="icon-label" onClick={scrollToTop}>
              <FiHome className="icon" />
              <span className="label">Home</span>
            </Link>
            <a href="#about-us" className="icon-label">
              <FiInfo className="icon" />
              <span className="label">About Us</span>
            </a>
            <a href="#product" className="icon-label">
              <FiPackage className="icon" />
              <span className="label">Products</span>
            </a>
            <a href="#form" className="icon-label">
              <FiMessageCircle className="icon" />
              <span className="label">Enquiry</span>
            </a>
            <a href="#policies" className="icon-label">
              <FiFileText className="icon" />
              <span className="label">Policies</span>
            </a>
          </div>

          <div className="menu-toggle small-only" onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu />
          </div>
        </div>

        {/* Side Menu */}
        {menuOpen && (
          <div className="side-menu-overlay" onClick={() => setMenuOpen(false)}>
            <div className="side-menu slide-in" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setMenuOpen(false)}>
                &times;
              </button>
              <Link to="/" onClick={() => { setMenuOpen(false); scrollToTop(); }}>
                <FiHome className="icon" /> Home
              </Link>
              <a href="#about-us" onClick={() => setMenuOpen(false)}>
                <FiInfo className="icon" /> About Us
              </a>
              <a href="#product" onClick={() => setMenuOpen(false)}>
                <FiPackage className="icon" /> Products
              </a>
              <a href="#form" onClick={() => setMenuOpen(false)}>
                <FiMessageCircle className="icon" /> Enquiry
              </a>
              <a href="#policies" onClick={() => setMenuOpen(false)}>
                <FiFileText className="icon" /> Policies
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Offer Slider Always Visible */}
      <div className="offer-slider">
        <div className="offer-track">
          {offers.map((offer, index) => (
            <div className="offer-card" key={index}>
              {offer}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
