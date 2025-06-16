import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BackgroundWaves from './components/BackgroundWaves';
import Platforms from './components/Platforms';
// import { Features } from 'tailwindcss';
import Features from './components/Features';
import TokenSaleSection from './components/TokenSales';
import Timeline from './components/Timeline';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import Downloads from './components/Downloads';
import Faq from './components/Faq';
import Latestnews from './components/Latestnews.jsx';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
  <BackgroundWaves />
  <Navbar />
  <HeroSection />
  <Platforms />
  <Features />
  <TokenSaleSection/>
  <Timeline/>
  <TeamSection/>
  <Testimonials/>
  <Downloads/>
  <Faq/>
  <Latestnews/>
  <Contact/>
  <Newsletter />
  <Footer/>
</div>
  );
}

export default App;