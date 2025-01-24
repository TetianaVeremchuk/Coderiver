import React from 'react';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { PopularSection } from './components/PopularSection/PopularSection';
import './App.css';

const App: React.FC = () => {
  const handleStreamNowClick = () => {
    console.log('Stream Now button clicked!');
  };

  return (
    <div className="app">
      <Header />
      <HeroSection onStreamNowClick={handleStreamNowClick} />
      <PopularSection />
    </div>
  );
};

export default App;
