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
    old_price: "₦70,000",
    discount: "20% OFF",
    image: "/images/camon20.png",
  },{
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
    name: " Poco C75",
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

const categories = [
  { id: 1, name: "Phones", img: "/images/mobile.png" },
  { id: 2, name: "Cosmetics", img: "/images/cosmetics.png" },
  { id: 3, name: "Electronics", img: "/images/electronics.png" },
  { id: 4, name: "Fashion", img: "/images/fashion.png" },
  { id: 5, name: "Watches", img: "/images/watch.png" },
  { id: 6, name: "Laptops", img: "/images/laptop.png" },
  { id: 7, name: "Kitchen", img: "/images/home.png" },
  { id: 8, name: "TVs", img: "/images/television.png" },
  { id: 9, name: "Furniture", img: "/images/furniture.png" },
  { id: 10, name: "Games", img: "/images/game.png" },
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
