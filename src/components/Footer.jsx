import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 w-full min-h-[200px]">
      <div className="max-w-7xl bg-[#03112f] mx-auto px-6 grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
          <p className="flex items-start gap-2 mb-2">
            <FaMapMarkerAlt />
            CITIZEN REGIONAL OFFICE - DELHI. 810, 8th Floor Padma Tower-I Rajendra Place, New Delhi - 110008 India.
          </p>
          <p className="flex items-start gap-2 mb-2">
            <FaPhoneAlt />
            011-25710036-37
          </p>
          <p className="flex items-start gap-2 mb-2">
            <FaEnvelope />
            NavIndia@gmail.com
          </p>
          <p className="flex items-start gap-2">
            <FaGlobe />
            <a href="https://NavIndia.com" className="hover:text-blue-400 transition-colors">NavIndia-Reality</a>
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Our Blogs</a></li>
            <li><a href="#" className="hover:text-blue-400">Hotels for Lease in Udaipur</a></li>
            <li><a href="#" className="hover:text-blue-400">Joint Ventures in India</a></li>
            <li><a href="#" className="hover:text-blue-400">Joint Venture Opportunities in India</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Retail Leasing</a></li>
            <li><a href="#" className="hover:text-blue-400">F&B Brands</a></li>
            <li><a href="#" className="hover:text-blue-400">Joint Ventures</a></li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
          <p>
            We are the top real estate advisory company serving 100+ retail brands and 30+ developers across India.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t pt-4 border-gray-700">
        © {new Date().getFullYear()} <a href="https://4bigha.com" className="hover:text-blue-300 font-semibold">NavIndia.com</a>. All Rights Reserved.
      </div>
      <h2 className="text-center text-sm text-gray-500 mt-2">Designed by -- Bigdesign Software Technologies</h2>
    </footer>
  );
};

export default Footer;