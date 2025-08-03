import React from 'react';
import front1Image from '../assets/front1Image.png'; // 🖼️ mall image path
import frontImage from '../assets/frontImage.png'; // 🖼️ mall image path

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white-500 shadow">
  <div className="flex justify-between items-center max-w-screen-xl mx-auto px-6 py-3">
    
    {/* ✅ Stylish Logo */}
    <div>
      <h1 className="text-2xl font-extrabold text-blue-700 tracking-tight">
        NAV<span className="text-pink-600">INDIA</span>
        <span className="block text-xs text-gray-500 tracking-widest">
          <u>REALITY</u>
        </span>
      </h1>
    </div>

    {/* ✅ Navigation + CTA Button */}
    <div className="flex items-center gap-6">
      <ul className="flex gap-6 text-gray-700 font-semibold">
        <li><a href="#Header" className="hover:text-blue-600 transition"><b>Home</b></a></li>
        <li><a href="#About" className="hover:text-blue-600 transition"><b>About</b></a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition"><b>Hospitality</b></a></li>
        <li><a href="#retail" className="hover:text-blue-600 transition"><b>Retail</b></a></li>
        <li><a href="#F&BBrands" className="hover:text-blue-600 transition"><b>F&B Brands</b></a></li>
        <li><a href="#jointventure" className="hover:text-blue-600 transition"><b>Joint Venture</b></a></li>
      </ul>

      {/* CTA Button */}
      <button className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-800 transition hidden md:block">
        Contact Us
      </button>
    </div>
  </div>
</nav>

      {/* 🖼️ Hero Section */}
      <div className="pt-20 bg-yellow-50 flex flex-col md:flex-row items-center gap-8 px-4">
        {/* 📸 Static Left Image */}
        <img
          src={front1Image}
          alt="Mall front View"
          className="w-full h-full object-cover rounded shadow-md"    />
          
      </div>
    </>
  );
};

export default Navbar;