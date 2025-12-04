import React from "react";

const products = [
  { id: 1, img: "/images/hero1.png" },
  { id: 2, img: "/images/hero2.png" },
  { id: 3, img: "/images/hero3.png" },
  { id: 4, img: "/images/hero4.png" },
  { id: 5, img: "/images/hero5.png" },
  { id: 6, img: "/images/hero6.png" },
];

const HotSale = () => {
  return (
    <div className="hot-container">
      <div className="hot-header">
        Hot Sale Deals | Up to 60% Off
      </div>

      <div className="hot-grid">
        {products.map((item) => (
          <div className="hot-card" key={item.id}>
            <img src={item.img} alt="" className="hot-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotSale;
