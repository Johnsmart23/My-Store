import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HomeSection from "./components/Home";
import Footer from "./components/Footer";
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HomeSection />
      <Footer />
    </div>
  );
};

export default App;
