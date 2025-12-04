import React from 'react';

// --- 1. Mock Data (badge changed to brand) ---
const PHONE_PRODUCTS_DATA = [
  { 
    id: 1, 
    name: "Samsung S22", 
    newPrice: 420000, 
    oldPrice: 480000, 
    discount: "20% OFF", 
    image: "/images/phone.png",
    brand: "Samsung"
  },
  { 
    id: 2, 
    name: "iPhone 14", 
    newPrice: 630000, 
    oldPrice: 700000, 
    discount: "20% OFF", 
    image: "/images/iphone14.png",
    brand: "Apple"
  },
  { 
    id: 3, 
    name: "Tecno Camon 20", 
    newPrice: 145000, 
    oldPrice: 70000, 
    discount: "20% OFF", 
    image: "/images/camon20.png",
    brand: "Tecno"
  },
  { 
    id: 4, 
    name: "Redmi 14C", 
    newPrice: 630000, 
    oldPrice: 70000, 
    discount: "20% OFF", 
    image: "/images/Redmi14C.png",
    brand: "Xiaomi"
  },
  { 
    id: 5, 
    name: "Infinx Hot 60i", 
    newPrice: 145000, 
    oldPrice: 10000, 
    discount: "20% OFF", 
    image: "/images/hot60i.png",
    brand: "Infinix"
  },
  { 
    id: 6, 
    name: "Itel S25 Ultra", 
    newPrice: 145000, 
    oldPrice: 10000, 
    discount: "20% OFF", 
    image: "/images/itel.png",
    brand: "Itel"
  },
  { 
    id: 7, 
    name: "Poco C75", 
    newPrice: 170000, 
    oldPrice: 8000, 
    discount: "20% OFF", 
    image: "/images/poco.png",
    brand: "Xiaomi"
  },
  { 
    id: 8, 
    name: "Nokia G100", 
    newPrice: 40000, 
    oldPrice: 7000, 
    discount: "20% OFF", 
    image: "/images/nokia.png",
    brand: "Nokia"
  },
  { 
    id: 9, 
    name: "iPhone 17", 
    newPrice: 1000000, 
    oldPrice: 700000, 
    discount: "20% OFF", 
    image: "/images/iphone17.png",
    brand: "Apple"
  },
  { 
    id: 10, 
    name: "Samsung S26", 
    newPrice: 1200000, 
    oldPrice: 480000, 
    discount: "20% OFF", 
    image: "/images/samsung.png",
    brand: "Samsung"
  }
];


// Helper function to format Naira currency
const formatPrice = (price) => `₦${price.toLocaleString('en-US')}`;

// --- 2. ProductCard Component (Defined locally) ---
const ProductCard = ({ product }) => {
  // Destructuring updated to use 'brand'
  const { name, newPrice, oldPrice, discount, image, brand } = product; 
  
  return (
    // Uses the .product-card CSS class defined in products.css
    <div className="products-card"> 
      
      {discount && (
        <span className="discount-tag">
          {discount}
        </span>
      )}
      {/* Rendering updated to use 'brand' and class name changed to products-brand */}
      {brand && ( 
          <span className="products-brand">{brand}</span> 
      )}
      
      <div className="products-image-container">
        <img src={image} alt={name} className="products-image" />
      </div>

      <div className="products-info">
        <p className="products-name">{name}</p>
        <p className="new-price">{formatPrice(newPrice)}</p>
        {oldPrice && (
          <p className="old-price">{formatPrice(oldPrice)}</p>
        )}
      </div>
    </div>
  );
};

// --- 3. Main Phone Accessories Section Component ---
const Phone = () => {
  return (
    // Uses the .product-section CSS class
    <section className="products-section">
      
      {/* Section Banner/Header (Green) */}
      <div className="sections-header">
        <h2 className="sections-title">Phones Accessories</h2>
        <a href="#" className="see-all-link">
          See All &gt;
        </a>
      </div>
      
      {/* Horizontal Scrolling Product List */}
      <div className="products-scroll-view">
        {PHONE_PRODUCTS_DATA.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default Phone;