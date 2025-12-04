import React from "react";

export default function PhoneSection() {
  const products = [
    {
      id: 1,
      brand: "Samsung",
      phone: "Smartphone",
      name: "Samsung S22",
      price: "₦420,000",
      old_price: "₦480,000",
      discount: "20% OFF",
      image: "/images/phone.png",
    },
    {
      id: 2,
      brand: "Apple",
      phone: "Smartphone",
      name: "iPhone 14",
      price: "₦630,000",
      old_price: "₦700,000",
      discount: "20% OFF",
      image: "/images/iphone14.png",
    },
    {
      id: 3,
      brand: "Tecno",
      phone: "Smartphone",
      name: "Tecno Camon 20",
      price: "₦145,000",
      old_price: "₦70,000",
      discount: "20% OFF",
      image: "/images/camon20.png",
    },
    {
      id: 4,
      brand: "Xiaomi",
      phone: "Smartphone",
      name: "Redmi 14C",
      price: "₦630,000",
      old_price: "₦70,000",
      discount: "20% OFF",
      image: "/images/Redmi14C.png",
    },
    {
      id: 5,
      brand: "Infinix",
      phone: "Smartphone",
      name: "Infinx Hot 60i",
      price: "₦145,000",
      old_price: "₦10,000",
      discount: "20% OFF",
      image: "/images/hot60i.png",
    },
    {
      id: 6,
      brand: "Itel",
      phone: "Smartphone",
      name: "Itel S25 Ultra",
      price: "₦145,000",
      old_price: "₦10,000",
      discount: "20% OFF",
      image: "/images/itel.png",
    },
    {
      id: 7,
      brand: "Xiaomi",
      phone: "Smartphone",
      name: "Poco C75",
      price: "₦170,000",
      old_price: "₦8,000",
      discount: "20% OFF",
      image: "/images/poco.png",
    },
    {
      id: 8,
      brand: "Nokia",
      phone: "Smartphone",
      name: "Nokia G100",
      price: "₦40,000",
      old_price: "₦7,000",
      discount: "20% OFF",
      image: "/images/nokia.png",
    },
    {
      id: 9,
      brand: "Apple",
      phone: "Smartphone",
      name: "iPhone 17",
      price: "₦1,000,000",
      old_price: "₦700,000",
      discount: "20% OFF",
      image: "/images/iphone17.png",
    },
    {
      id: 10,
      brand: "Samsung",
      phone: "Smartphone",
      name: "Samsung S26",
      price: "₦1,200,000",
      old_price: "₦480,000",
      discount: "20% OFF",
      image: "/images/samsung.png",
    },
  ];

  return (
    <div className="phone-container">
      {/* Header */}
      <div className="phone-header">Phone</div>

      {/* Products Grid */}
      <div className="phone-grid">
        {products.map((item) => (
          <div key={item.id} className="phone-card">
            <span className="discount-badge">{item.discount}</span>
            <img src={item.image} alt={item.name} className="phone-img" />
            <p className="product-name">{item.name}</p>
            <div className="price-row">
              <span className="price">{item.price}</span>
              <span className="old-price">{item.old_price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
