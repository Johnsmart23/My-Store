import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HomeSection from "./components/Home";
import Sale from "./components/Sale";
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HomeSection />
      <Sale />
    </div>
  );
};

export default App;
