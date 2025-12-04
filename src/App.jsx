import React from "react";
import './App.css'
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Hot from "./components/Hot";
import HomeSection from "./components/Home";
import Phone from "./components/Phone";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Hot />
      <HomeSection />
      <Phone />
      <Footer />
    </div>
  );
};

export default App;
