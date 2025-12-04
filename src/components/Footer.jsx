import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Left Column */}
        <div className="footer-col">
          <h2 className="footer-title">MegaMart</h2>

          <h4 className="footer-sub">Contact Us</h4>

          <div className="contact-row">
            <FaWhatsapp />
            <span>+1 202-918-2132</span>
          </div>

          <div className="contact-row">
            <FaPhone />
            <span>+1 202-918-2132</span>
          </div>

          <h4 className="footer-sub">Download App</h4>

          <div className="store-buttons">
            <img src="/images/apple-logo.png" alt="App Store" className="store-img"/>
            <img src="/images/googleplay-logo.png" alt="App Store" className="store-img"/>
          </div>
        </div>

        {/* Middle Column */}
        <div className="footer-col">
          <h4 className="footer-sub">Most Popular Categories</h4>
          <ul>
            <li>Phone</li>
            <li>Electronics</li>
            <li>Laptop</li>
            <li>Personal Care</li>
            <li>Home & Kitchen</li>
            <li>Fashion </li>
            <li>TVs</li>
            <li>Furniture</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-col">
          <h4 className="footer-sub">Customer Services</h4>
          <ul>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 All rights reserved. Redstore Ltd.
      </div>
    </footer>
  );
};

export default Footer;
