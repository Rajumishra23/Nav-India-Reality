import React from "react";
import frontImage from "../assets/frontImage.png"; // ✅ Update the path if needed

const About = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white" id="about">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4 animate-slideLeft">About Us</h2>
          <p className="text-gray-600 leading-relaxed mb-6 animate-slideLeft">
            We are India’s leading retail advisory firm offering tailored solutions to developers, brands, and investors across the hospitality & retail sectors. Our vision is to shape innovative spaces and profitable partnerships.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition animate-slideLeft">
            Learn More
          </button>
        </div>

       {/* Image Content with Animation */}
<div className="w-full h-full overflow-hidden rounded shadow-md animate-slideLeft order-1 md:order-none">
  <img
    src={frontImage}
    alt="Mall front1 View"
    className="w-full h-full object-cover"
  />
</div>
      </div>
    </section>
  );
};

export default About;