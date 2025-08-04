import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StatsSection from "./components/StatsSection";
import TestimonialsSection from './components/TestimonialsSection';
import OurServicesSection from './components/OurServiceSection';
import NewsBlogSection from './components/NewsBlogSection';
import Retail from './components/Retail';

import JointVenture from './components/JointVenture';

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <About />
      <StatsSection />
      <TestimonialsSection />
      <OurServicesSection />
      <Retail />
      <JointVenture />
      <NewsBlogSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;