import React, { useState, useRef, useEffect } from "react";
import {
  FaUserCircle, FaShoppingCart, FaHeart, FaBox, FaChevronDown,
  FaBars, FaTimes, FaGift, FaClock, FaMobileAlt, FaTv,
  FaLaptop, FaTshirt, FaHome, FaBath, FaShoppingBag, FaUtensils
} from "react-icons/fa";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => {
    setDrawerOpen(false);
    setHelpOpen(false);
    setAccountOpen(false);
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        closeDrawer();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [drawerOpen]);

  const toggleHelp = () => { setHelpOpen(!helpOpen); setAccountOpen(false); };
  const toggleAccount = () => { setAccountOpen(!accountOpen); setHelpOpen(false); };

  return (
    <header className="header">
      <div className="header-left">
        <div className="hamburger" onClick={toggleDrawer}>
          {drawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <img src="/images/logo.png" alt="logo" className="header-logo" />
      </div>

      <div className="header-center">
        <input
          type="text"
          className="search-input"
          placeholder="Search products, brands, and categories"
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="header-right">
        <div className="desktop-nav">
          <div className="nav-item" onClick={toggleAccount}>
            Account <FaChevronDown className="dropdown-icon" />
            {accountOpen && (
              <div className="dropdown">
                <button className="signin-btn">Sign In</button>
                <div className="dropdown-item"><FaUserCircle /> My Account</div>
                <div className="dropdown-item"><FaBox /> Orders</div>
                <div className="dropdown-item"><FaHeart /> Wishlist</div>
              </div>
            )}
          </div>

          <div className="nav-item" onClick={toggleHelp}>
            Help <FaChevronDown className="dropdown-icon" />
            {helpOpen && (
              <div className="dropdown">
                <div className="dropdown-item">Help Center</div>
                <div className="dropdown-item">Place an Order</div>
                <div className="dropdown-item">Payment Option</div>
                <div className="dropdown-item">Track an Order</div>
                <div className="dropdown-item">Cancel an Order</div>
                <button className="livechat-btn">Live Chat</button>
              </div>
            )}
          </div>

          <div className="nav-item cart-nav">
            <FaShoppingCart className="icon cart-icon" />
            <span className="nav-link">Cart</span>
          </div>
        </div>

        <div className="mobile-icons">
          <FaUserCircle size={22} onClick={() => { setDrawerOpen(true); setAccountOpen(true); }} />
          <FaShoppingCart size={22} />
        </div>
      </div>

      {drawerOpen && <div className="drawer-overlay"></div>}

      <div ref={drawerRef} className={`side-drawer ${drawerOpen ? "open" : ""}`}>
        {/* Help */}
        <div className="drawer-item" onClick={toggleHelp}>
          <FaChevronDown /> Help
        </div>
        {helpOpen && (
          <div className="drawer-dropdown">
            <div>Help Center</div>
            <div>Place an Order</div>
            <div>Payment Option</div>
            <div>Track an Order</div>
            <div>Cancel an Order</div>
            <button className="livechat-btn">Live Chat</button>
          </div>
        )}

        {/* Account */}
        <div className="drawer-item" onClick={toggleAccount}>
          <FaUserCircle /> Account
        </div>
        {accountOpen && (
          <div className="drawer-dropdown">
            <button className="signin-btn">Sign In</button>
            <div><FaUserCircle /> My Account</div>
            <div><FaGift /> Orders</div>
            <div><FaClock /> Pending Review</div>
            <div><FaHeart /> Wishlist</div>
          </div>
        )}

        {/* Our Categories - always visible */}
        <div className="drawer-item-heading">
          <strong>Our Categories</strong>
        </div>
        <div className="categories-list">
          <div className="category-item"><FaMobileAlt /> Phones & Tablets</div>
          <div className="category-item"><FaTv /> Electronics</div>
          <div className="category-item"><FaTshirt /> Fashion</div>
          <div className="category-item"><FaHome /> Home & Kitchen</div>
          <div className="category-item"><FaBath /> Beauty & Personal Care</div>
          <div className="category-item"><FaShoppingBag /> Groceries</div>
          <div className="category-item"><FaGift /> Accessories</div>
          <div className="category-item"><FaLaptop /> Laptops</div>
          <div className="category-item"><FaTv /> TVs</div>
          <div className="category-item"><FaUtensils /> Appliances</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
