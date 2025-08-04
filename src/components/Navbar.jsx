import React from 'react';
import front1Image from '../assets/front1Image.png'; // 🖼️ mall image path
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';


const Navbar = () => {
  return (
    <>
      {/* 🌐 Top Bar */}
     <div className="bg-gray-100 text-xs text-gray-600 py-2 px-6 flex justify-between items-center border-b">
  <div className="flex items-center gap-4">
    {/* Social icons */}
    <div className="flex gap-3 text-lg">
      <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
      <a href="#" className="hover:text-blue-700"><FaFacebookF /></a>
      <a href="#" className="hover:text-blue-900"><FaLinkedinIn /></a>
    </div>
  </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <button className="bg-gray-300 text-gray-800 px-3 py-1 rounded shadow hover:bg-gray-400 transition">
            SCHEDULE A FREE CONSULTATION
          </button>
          <span className="flex items-center gap-1">
            <FaPhoneAlt className="text-gray-500" /> Call us: +011-25710036-37
          </span>
          <a href="#" className="flex items-center gap-1 hover:text-gray-800">
            <FaUser /> Employee Login
          </a>
          <FiSearch className="cursor-pointer hover:text-gray-800" />
        </div>
      </div>

      {/* 🧭 Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* 🏷️ Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-yellow-800 tracking-wide">
              NAV<span className="text-gray-800">INDIA</span>
              <span className="block text-xs text-gray-600 tracking-wider">
                <u>REALITY</u>
              </span>
            </h1>
          </div>

          {/* 📌 Navigation Links */}
          <ul className="flex gap-6 text-gray-800 font-semibold text-sm uppercase tracking-wide">
            <li className="text-center">
              <a href="#Header" className="hover:text-yellow-800">Home<br /><span className="block text-xs font-normal ">Welcome</span></a>
            </li>
            <li className="text-center">
              <a href="#About" className="hover:text-yellow-800">About Us<br /><span className="block text-xs font-normal">Who We Are</span></a>
            </li>
            <li className="text-center">
              <a href="#contact" className="hover:text-yellow-800">Hospitality<br /><span className="block text-xs font-normal">What We Do</span></a>
            </li>
            <li className="text-center">
              <a href="#retail" className="hover:text-yellow-800">Retail<br /><span className="block text-xs font-normal">Where We Serve</span></a>
            </li>
            <li className="text-center">
              <a href="#F&BBrands" className="hover:text-yellow-800">F&B Brands<br /><span className="block text-xs font-normal">Our Brands</span></a>
            </li>
            <li className="text-center">
              <a href="#jointventure" className="hover:text-yellow-800">Joint Venture<br /><span className="block text-xs font-normal">Grow With Us</span></a>
            </li>
          </ul>
        </div>
      </nav>

      {/* 🖼️ Hero Section */}
      <div className="pt-[130px] bg-yellow-50 flex flex-col md:flex-row items-center gap-8 px-6">
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
