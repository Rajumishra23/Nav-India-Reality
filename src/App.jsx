import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About'; 
import Contact from './components/Contact';
import Footer from './components/Footer'; // Assuming you have a Footer component
import StatsSection from "./components/StatsSection";
import TestimonialsSection from './components/TestimonialsSection';
import OurServicesSection from './components/OurServiceSection';
import NewsBlogSection from    './components/NewsBlogSection';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
     <Navbar/>
     <About/>
      <StatsSection/>
      <TestimonialsSection/>
      <OurServicesSection/>
      <NewsBlogSection/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;