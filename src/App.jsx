import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About'; 
import Contact from './components/Contact';
import Footer from './components/Footer'; // Assuming you have a Footer component

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
     <Navbar/>
     <About/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;