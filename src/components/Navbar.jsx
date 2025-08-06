import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaUser, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import resturent from '../assets/resturent.png';

const Navbar = () => {
  return (
    <>
      {/* 🌐 Top Bar */}
      <div className="bg-gray-100 text-xs text-gray-600 py-2 px-6 flex justify-between items-center border-b">
        <div className="flex gap-3 text-lg">
          <a href="#"><FaTwitter className="hover:text-blue-500" /></a>
          <a href="#"><FaFacebookF className="hover:text-blue-700" /></a>
          <a href="#"><FaLinkedinIn className="hover:text-blue-900" /></a>
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
        <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="logo.png" alt="Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-xl font-serif font-bold text-yellow-800 tracking-wide leading-tight">
              NAV<span className="text-gray-800">INDIA</span>
              <span className="block text-xs text-gray-600 tracking-wider">
                <u>REALITY</u>
              </span>
            </h1>
          </div>

          <ul className="flex gap-6 text-gray-800 font-semibold text-sm uppercase tracking-wide">
            <li className="text-center">
              <Link to="/" className="hover:text-yellow-800">
                Home<br /><span className="block text-xs font-normal">Welcome</span>
              </Link>
            </li>
            <li className="text-center">
              <Link to="/About" className="hover:text-yellow-800">
                About<br /><span className="block text-xs font-normal">Who We Are</span>
              </Link>
            </li>
            <li className="text-center">
              <Link to="/Retail" className="hover:text-yellow-800">
                Retail<br /><span className="block text-xs font-normal">Where We Serve</span>
              </Link>
            </li>
            <li className="text-center">
              <Link to="/FoodAndBeverage" className="hover:text-yellow-800">
                F&B Brands<br /><span className="block text-xs font-normal">Our Brands</span>
              </Link>
            </li>
            <li className="text-center">
              <Link to="/joint-venture" className="hover:text-yellow-800">
                Joint Venture<br /><span className="block text-xs font-normal">Grow With Us</span>
              </Link>
            </li>
            <li className="text-center">
              <Link to="/news" className="hover:text-yellow-800">
                News<br /><span className="block text-xs font-normal">Latest</span>
              </Link>
            </li>
            <li className="text-center">
              <Link to="/Stats" className="hover:text-yellow-800">
                Stats<br /><span className="block text-xs font-normal">Numbers</span>
              </Link>
            </li>
            <li className="text-center">
              <Link to="/testimonials" className="hover:text-yellow-800">
                Testimonials<br /><span className="block text-xs font-normal">Happy Clients</span>
              </Link>
            </li>
           <li className="text-center">
  <Link
  to="/Contact"
  className="inline-block bg-yellow-600 text-white px-1.5 py-0.5 rounded-sm text-xs font-medium hover:bg-yellow-700 transition"
>
  Contact
</Link>
</li>
          </ul>
        </div>
      </nav>

      {/* 🖼️ Auto Sliding Image Section */}
      <div className="pt-[130px] bg-yellow-50 px-6">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src="realestae.png" alt="Mall front View" className="w-full h-auto max-h-[500px] object-cover rounded shadow-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="pop.png" alt="Retail View" className="w-full h-auto max-h-[500px] object-cover rounded shadow-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={resturent} alt="Restaurant View" className="w-full h-auto max-h-[500px] object-cover rounded shadow-lg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Navbar;