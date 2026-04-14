import React, { useEffect } from 'react';
import './AboutUs.css';

import sareeImg from '../assets/saree.jpeg';
import blouseImg from '../assets/blouse.jpeg';
import gownImg from '../assets/gown.jpeg';
import kidswearImg from '../assets/kidswear.jpeg';
import patchworkImg from '../assets/patchwork.jpeg';

const cards = [
  {
    img: sareeImg,
    title: 'Saree Collections',
    shortDesc: 'Explore silk, designer, cotton, bridal – draped perfection.',
    fullDesc: 'Our saree collection features over 200+ designs from traditional Kanjeevarams to modern georgettes. Each piece is handpicked for quality and craftsmanship. Special bridal collections available with custom blouse stitching services.',
    features: ['Silk & Cotton varieties', 'Bridal collections', 'Custom blouse stitching', 'Free draping guide'],
    delay: 0.1
  },
  {
    img: blouseImg,
    title: 'Custom Blouses',
    shortDesc: 'Stitched elegance with handcrafted patchwork and embroidery.',
    fullDesc: 'Get perfectly tailored blouses with our expert measurements. Choose from 50+ embroidery designs or create your own. Our patchwork blouses are unique pieces of wearable art that complement any saree.',
    features: ['Perfect fit guarantee', '50+ embroidery designs', 'Patchwork specialists', '15-day delivery'],
    delay: 0.2
  },
  {
    img: gownImg,
    title: 'Designer Gowns',
    shortDesc: 'Rental & custom gowns for shoots, birthdays, weddings.',
    fullDesc: 'From cocktail dresses to full-length ball gowns, our designer collection suits all occasions. Rental options available for one-time events. Custom gowns are made-to-measure with 3 fitting sessions included.',
    features: ['Rental options', 'Custom designs', '3 fitting sessions', 'Bridal collections'],
    delay: 0.3
  },
  {
    img: kidswearImg,
    title: 'Kids Traditional',
    shortDesc: 'Ethnic and trendy wear for childrens special occasions.',
    fullDesc: 'Adorable traditional outfits for kids that combine comfort with style. Our collections include festival wear, birthday outfits, and flower girl dresses. All fabrics are hypoallergenic and skin-friendly.',
    features: ['Age 1-12 years', 'Hypoallergenic fabrics', 'Festival collections', 'Matching family sets'],
    delay: 0.4
  },
  {
    img: patchworkImg,
    title: 'Patchwork Craft',
    shortDesc: 'Detailed patch designs that transform basic to bold.',
    fullDesc: 'Our artisans create stunning patchwork designs using traditional techniques. Each piece tells a story through its patterns. Custom patchwork available for sarees, dupattas, and home decor items.',
    features: ['Handcrafted pieces', 'Custom designs', 'Sarees & dupattas', 'Home decor options'],
    delay: 0.5
  }
];
const AboutUs = () => {
  useEffect(() => {
    document.title = "About VastraVibe | Ethnic Fashion Boutique";
  }, []);

  return (
    <div className="aboutus-page" id="about-us">
      <div className="logo-bg" />
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>

      <section className="intro-section">
        <div className="intro-content">
          <h2>
            <span className="title-word title-word-1">About</span>
            <span className="title-word title-word-2">Pretty</span>
            <span className="title-word title-word-3">Collections</span>
          </h2>
          <p className="intro-text">
            Welcome to <strong>VastraVibe</strong> – your one-stop destination for elegant ethnic fashion.
            From stunning sarees to custom patchwork blouses, kidswear, and bridal gowns, we're proud to celebrate timeless craftsmanship and modern charm in every stitch.
          </p>
        </div>
      </section>

      <section className="cards-section">
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="info-card"
              style={{ '--delay': card.delay }}
            >
              <div className="card-image-container">
                <img src={card.img} alt={card.title} className="card-img" />
                <div className="image-overlay"></div>
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p className="short-desc">{card.shortDesc}</p>
                <div className="full-content">
                  <p className="full-desc">{card.fullDesc}</p>
                  <ul className="features-list">
                    {card.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-icon">→</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;