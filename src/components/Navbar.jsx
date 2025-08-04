import React from 'react';
import front1Image from '../assets/front1Image.png'; // 🖼️ mall image path

const Navbar = () => {
  return (
    <>
      {/* 🌟 Top Bar */}
      <div className="bg-gray-100 text-sm text-gray-600 px-6 py-2 flex justify-between items-center">
        {/* You can add content like working hours or contact here if needed */}
      </div>

      {/* 🧭 Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* 🏷️ Logo aligned left */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-yellow-800 tracking-wide">
              NAV<span className="text-gray-800">INDIA</span>
              <span className="block text-xs text-gray-600 tracking-wider">
                <u>REALITY</u>
              </span>
            </h1>
          </div>

          {/* 📌 Nav Links + Button aligned right */}
          <div className="flex items-center gap-8">
            <ul className="flex gap-6 text-gray-700 font-medium text-lg">
              <li><a href="#Header" className="hover:text-yellow-800 hover:underline transition">Home</a></li>
              <li><a href="#About" className="hover:text-yellow-800 hover:underline transition">About</a></li>
              <li><a href="#contact" className="hover:text-yellow-800 hover:underline transition">Hospitality</a></li>
              <li><a href="#retail" className="hover:text-yellow-800 hover:underline transition">Retail</a></li>
              <li><a href="#F&BBrands" className="hover:text-yellow-800 hover:underline transition">F&B Brands</a></li>
              <li><a href="#jointventure" className="hover:text-yellow-800 hover:underline transition">Joint Venture</a></li>
            </ul>
            <button className="bg-yellow-800 text-white px-4 py-2 rounded-full text-sm hover:bg-yellow-900 transition hidden md:block">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* 🖼️ Hero Section (perfect spacing below navbar) */}
      <div className="pt-[70px] bg-yellow-50 flex flex-col md:flex-row items-center gap-8 px-6">
        <img
          src={front1Image}
          alt="Mall front View"
          className="w-full h-auto max-h-[450px] object-cover rounded shadow-lg"
        />
      </div>
    </>
  );
};

export default Navbar;