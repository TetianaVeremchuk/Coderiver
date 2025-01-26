import React from "react";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { PopularSection } from "./components/PopularSection/PopularSection";
import Scene from "./components/Scene/Scene";
import "./App.css";

const App: React.FC = () => {
  const handleStreamNowClick = () => {
    console.log("Stream Now button clicked!");
  };

  return (
    <div className="app">
      <div className="background">
        <Scene />
      </div>

      <div className="content">
        <Header />
        <HeroSection onStreamNowClick={handleStreamNowClick} />
        <PopularSection />
      </div>
    </div>
  );
};

export default App;
