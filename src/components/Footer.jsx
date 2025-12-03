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
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
          </div>
        </div>

        {/* Middle Column */}
        <div className="footer-col">
          <h4 className="footer-sub">Most Popular Categories</h4>
          <ul>
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetables & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Dairy & Bakery</li>
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
        © 2022 All rights reserved. Reliance Retail Ltd.
      </div>
    </footer>
  );
};

export default Footer;
