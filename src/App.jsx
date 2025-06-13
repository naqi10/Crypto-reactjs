import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BackgroundWaves from './components/BackgroundWaves';
import Platforms from './components/Platforms';
// import { Features } from 'tailwindcss';
import Features from './components/Features';
function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
  <BackgroundWaves />
  <Navbar />
  <HeroSection />
  <Platforms />
  <Features />
</div>
  );
}

export default App;