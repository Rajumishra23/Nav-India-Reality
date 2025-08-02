import React from 'react';
import front1Image from '../assets/front1Image.png'; // 🖼️ mall image path
import frontImage from '../assets/frontImage.png'; // 🖼️ mall image path

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <div className="max-w-9xl mx-auto flex items-center px-6 md:px-20 lg:px-32 py-2">
          {/* ✅ Stylish Logo */}
         <h1 className="text-2xl justify-start text-left font-extrabold text-blue-700 tracking-tight ml-auto">
  NAV<span className="text-pink-600">INDIA</span>
  <span className="block text-xs text-gray-500 tracking-widest"><u>REALITY</u></span>
</h1>

          {/* Navigation Links — pushed to the right */}
          <ul className="list-none flex space-x-6 text-gray-700 font-sm ml-auto">
            <li><a href="#Header" className="hover:text-blue-600 transition"><u><b>Home</b></u></a></li>
            <li><a href="#About" className="hover:text-blue-600 transition"><u><b>About</b></u></a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition"><u><b>Hospitality</b></u></a></li>
            <li><a href="#retail" className="hover:text-blue-600 transition"><u><b>Retail</b></u></a></li>
            <li><a href="#F&BBrands" className="hover:text-blue-600 transition"><u><b>F&B Brands</b></u></a></li>
            <li><a href="#jointventure" className="hover:text-blue-600 transition"><u><b>Joint Venture</b></u></a></li>
            
          </ul>

          {/* CTA Button */}
          <button className="ml-6 bg-blue-700 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-800 transition hidden md:block">
            Contact Us
          </button>
        </div>
      </nav>

    <div className="pt-20 flex items-center gap-8 px-4">
  
  {/* 📸 Static Left Image */}
  <img
    src={front1Image}
    alt="Mall front View"
    className="w-full h-full object-cover rounded shadow-md"
  />

  {/* 📸 Sliding Right Image */}
  <div className="w-full h-full overflow-hidden rounded shadow-md animate-slideRight">
    <img
      src={frontImage}
      alt="Mall front1 View"
      className="w-full h-full object-cover"
    />
  </div>

</div>
    </>
  );
};

export default Navbar;