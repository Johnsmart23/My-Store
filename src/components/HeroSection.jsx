import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "Smart Wearables",
    subtitle: "Best Deal Online On Smart Devices",
    desc: "Up to 80% Off",
    img: "/images/watch.png",
    bg: "#5D3FD3",
  },
  {
    title: "Phones",
    subtitle: "Best Deal Online On Mobile Devices",
    desc: "Up to 70% Off",
    img: "/images/phone.png",
    bg: "#4C2CB0",
  },
  {
    title: "Electronics",
    subtitle: "Best Deal Online On Gadgets & Devices",
    desc: "Up to 80% Off",
    img: "/images/electronics.png",
    bg: "#3A1F99",
  },
  {
    title: "Fashion",
    subtitle: "Best Deal Online On Trendy Styles",
    desc: "Up to 80% Off",
    img: "/images/fashion.png",
    bg: "#6A1B9A",
  },
  {
    title: "Beauty Care",
    subtitle: "Best Deal Online On Skin & Body care",
    desc: "Up to 40% Off",
    img: "/images/beauty.png",
    bg: "#8E24AA",
  },
  {
    title: "Groceries",
    subtitle: "Best Deal Online On Food & Drinks",
    desc: "Up to 10% Off",
    img: "/images/groceries.png",
    bg: "#7B1FA2",
  },
  {
    title: "Accessories",
    subtitle: "Best Deal Online On Stylish Add-ons",
    desc: "Up to 20% Off",
    img: "/images/accessories.png",
    bg: "#512DA8",
  },
  {
    title: "Laptop",
    subtitle: "Best Deal Online On Portable Computers",
    desc: "Up to 20% Off",
    img: "/images/laptop.png",
    bg: "#4527A0",
  },
  {
    title: "Television",
    subtitle: "Best Deal Online On Smart TV",
    desc: "Up to 80% Off",
    img: "/images/television.png",
    bg: "#311B92",
  },
  {
    title: "Home Appliances",
    subtitle: "Best Deal Online On Essentials",
    desc: "Up to 400% Off",
    img: "/images/home.png",
    bg: "#673AB7",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  // Auto Slide Every 4 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setFade(true); // Fade out
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(false); // Fade in
    }, 500);
  };

  const goToSlide = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrent(index);
      setFade(false);
    }, 500);
  };

  return (
    <div
      className={`hero-slide ${fade ? "fade" : ""}`}
      style={{ background: slides[current].bg }}
    >
      {/* TEXT */}
      <div className="hero-text">
        <h4>{slides[current].subtitle}</h4>
        <h1>{slides[current].title}</h1>
        <p>{slides[current].desc}</p>
      </div>

      {/* IMAGE */}
      <div className="hero-img">
        <img src={slides[current].img} alt="Hero" />
      </div>

      {/* DOTS INDICATOR (Under Text) */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
