import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

// ✅ Add these imports to fix the "Navbar is not defined" error
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Retail from './Pages/Retail';
import FoodAndBeverage from './Pages/FoodAndBeverage';
import JointVenture from './Pages/JointVenture';
import News from './Pages/News';
import Stats from './Pages/Stats';
import Testimonials from './Pages/Testimonials';

const App = () => {
  return (
   <BrowserRouter>
   <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Retail" element={<Retail />} />
          <Route path="/FoodAndBeverage" element={<FoodAndBeverage />} />
          <Route path="/joint-venture" element={<JointVenture />} />
          <Route path="/news" element={<News />} />
          <Route path="/Stats" element={<Stats />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>

   </BrowserRouter>
   
  );
};

export default App;