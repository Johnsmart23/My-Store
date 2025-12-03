import React from "react";

const products = [
  { id: 1, name: "Oraimo Rover 12W FM Wireless Speaker", price: "₦ 38,267", oldPrice: "₦ 80,000", discount: "-52%", img: "/images/p1.png" },
  { id: 2, name: "NIVEA Watimagbo Pack", price: "₦ 11,455", oldPrice: "₦ 14,695", discount: "-22%", img: "/images/p2.png" },
  { id: 3, name: "XIAOMI Redmi 15C", price: "₦ 125,143", oldPrice: "₦ 144,253", discount: "-13%", img: "/images/phone.png" },
  { id: 4, name: "Aeon 5Kg Twin Tub Washing Machine", price: "₦ 131,000", oldPrice: "₦ 151,960", discount: "-14%", img: "/images/p4.png" },
  { id: 5, name: "iTel A100 6.75'' 90Hz", price: "₦ 103,000", oldPrice: "₦ 111,280", discount: "-7%", img: "/images/p5.png" },
  { id: 6, name: "Mi 32'' Inches Digital LED TV", price: "₦ 89,999", oldPrice: "₦ 107,133", discount: "-16%", img: "/images/p6.png" },
  { id: 7, name: "Poco C7 Smartphone", price: "₦ 78,999", oldPrice: "₦ 85,000", discount: "-12%", img: "/images/p7.png" },
  { id: 8, name: "Oraimo Smartwatch", price: "₦ 23,000", oldPrice: "₦ 32,000", discount: "-29%", img: "/images/p8.png" },
  { id: 9, name: "Fashion Top – Female", price: "₦ 12,500", oldPrice: "₦ 27,000", discount: "-54%", img: "/images/p9.png" },
  { id: 10, name: "Refurbished Dell Laptop", price: "₦ 145,000", oldPrice: "₦ 180,000", discount: "-18%", img: "/images/p10.png" },
  { id: 11, name: "Smirnoff Vodka", price: "₦ 6,700", oldPrice: "₦ 8,000", discount: "-14%", img: "/images/p11.png" },
  { id: 12, name: "Hisense Microwave", price: "₦ 69,000", oldPrice: "₦ 82,000", discount: "-16%", img: "/images/p12.png" },
];

const HolidayDeals = () => {
  return (
    <div className="holiday-container">
      <div className="holiday-header">
        Holiday Sales deals | Up to 60% Off
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <span className="discount-badge">{item.discount}</span>
            <img src={item.img} alt={item.name} className="product-img" />
            <p className="name">{item.name}</p>
            <p className="price">{item.price}</p>
            <p className="old-price">{item.oldPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HolidayDeals;
