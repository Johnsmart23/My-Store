import React from "react";

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
    old_price: "₦170,000",
    discount: "20% OFF",
    image: "/images/camon20.png",
  },{
    id: 4,
    brand: "Apple",
    phone: "Smartphone",
    name: "iPhone 14",
    price: "₦630,000",
    old_price: "₦700,000",
    discount: "20% OFF",
    image: "/images/iphone14.png",
  },
  {
    id: 5,
    brand: "Tecno",
    phone: "Smartphone",
    name: "Tecno Camon 20",
    price: "₦145,000",
    old_price: "₦170,000",
    discount: "20% OFF",
    image: "/images/camon20.png",
  },
  
];

const categories = [
  { id: 1, name: "Mobile", img: "/images/mobile.png" },
  { id: 2, name: "Cosmetics", img: "/images/cosmetics.png" },
  { id: 3, name: "Electronics", img: "/images/electronics.png" },
  { id: 4, name: "Furniture", img: "/images/furniture.png" },
  { id: 5, name: "Watches", img: "/images/watch.png" },
  { id: 6, name: "Decor", img: "/images/plant.png" },
  { id: 7, name: "Accessories", img: "/images/necklace.png" },
];

export default function HomeSection() {
  return (
    <div className="home-container">

      {/* Smartphones Header */}
      <div className="section-header">
        <h2>
          Grab the best deal on <span>Smartphones</span>
        </h2>
        <button className="view-all">View All</button>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">

            {/* Discount Badge */}
            <span className="discount-badge">{item.discount}</span>

            <img src={item.image} alt={item.name} className="product-img" />

            <p className="product-name">{item.name}</p>

            <div className="price-row">
              <span className="price">{item.price}</span>
              <span className="old-price">{item.old_price}</span>
            </div>

          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="section-header" style={{ marginTop: "50px" }}>
        <h2>
          Shop From <span>Top Categories</span>
        </h2>
        <button className="view-all">View All</button>
      </div>

      <div className="categories-row">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <div className="category-circle">
              <img src={cat.img} alt={cat.name} />
            </div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
