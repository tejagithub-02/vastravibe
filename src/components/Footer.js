import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo1.png';
import { FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer" id="policies">
      <div className="footer-top">
        <div className="footer-logo-section">
          <a href="/" className="footer-logo-link">
            <div className="logo-with-text">
              <img src={logo} alt="Company Logo" className="footer-logo" />
              <span className="company-name">Vastra Vibe</span>
            </div>
          </a>
        </div>

        <div className="footer-columns">
          <div>
            <h4>Quick Links</h4>
            <ul>
            <li><a href="/">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#product">Products</a></li>
              <li><a href="#form">Enquiry</a></li>
            </ul>
          </div>
          <div>
            <h4>Policies</h4>
            {/* <ul>
              <li><Link to="/terms#top">Terms & Conditions</Link></li>
              <li><Link to="/privacy#top">Privacy Policy</Link></li>
              <li><Link to="/copyright#top">Copyright</Link></li>
              <li><Link to="/patents#top">Patents & Trademarks</Link></li>
            </ul> */}
             <ul>
              <li><Link >Terms & Conditions</Link></li>
              <li><Link>Privacy Policy</Link></li>
              <li><Link>Copyright</Link></li>
              <li><Link >Patents & Trademarks</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
  <h4>Contact</h4>
  <p>
    VastraVibe india<br />
    <span className="footer-email">✉️ <a href="">vastravibe00@gmail.com</a></span>
    <span className="footer-phone">📞 <a href="tel:90XXXXXX90">90XXXXXX90</a></span><br />
  </p>
</div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
         
          <p>
            Designed by{' '}
            <a href="https://www.linkedin.com/in/maruthi-teja-thamba" target="_blank" rel="noopener noreferrer">
              Maruthi Teja
            </a>
          </p>
        </div>
        <div className="footer-right">
          <div className="social">
          
          <a href="https://www.instagram.com/pretty_collections_mysore?igsh=azh1eDkzYXZhN3Az" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>

         
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
