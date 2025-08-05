import React from "react";
import mall from "../assets/mall.png"; // ✅ Update the path if needed

const About = () => {
  return (
    <section className="py-16 px-10 md:px-20 bg-yellow-50" id="about">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-5xl font-bold text-blue-700 mb-4 animate-slideLeft">About Us</h2>
          <p className="text-gray-600 leading-relaxed mb-6 animate-slideLeft">
            Welcome to one of India’s premier retail mall destinations. Our mall is more than just a shopping space — it's a vibrant hub where fashion, food, fun, and lifestyle come together under one roof. 
            <br /><br />
            We bring together leading national and international brands across fashion, electronics, home decor, and much more. Whether you're a shopper, a brand looking for premium space, or an investor seeking strategic partnerships, we offer the perfect ecosystem. 
            <br /><br />
            Our mission is to create a dynamic and profitable retail experience that benefits everyone — developers, businesses, and most importantly, our customers.
          </p>
          <button className="bg-blue-600 text-white px-20 py-10 rounded hover:bg-blue-700 transition animate-slideLeft">
            More about
          </button>
        </div>

        {/* Image Content */}
        <div className="w-full h-full overflow-hidden rounded shadow-md animate-slideLeft order-1 md:order-none">
          <img
            src={mall}
            alt="Mall front1 View"
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>
    </section>
  );
};

export default About;
