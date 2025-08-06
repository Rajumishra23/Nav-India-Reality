import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="relative  bg-blue-200 py-16 px-6 md:px-12 lg:px-24">
      
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[url('/city-blur.jpg')] bg-cover bg-center opacity-20 z-0"></div>

      {/* Main Layer */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Building Image */}
        <div className="w-full h-full overflow-hidden rounded shadow-md animate-slideLeft">
          <img
            src="/building.png"
            alt="Modern Building"
            className="w-[1500px] h-full object-cover"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-green bg-opacity-90 p-6 rounded-lg shadow-lg animate-slideLeft">
          <h1 className="text-lg font-semibold mb-2">Quick Enquiry.</h1>
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Want more Information?</h2>

          <form className="space-y-6 ">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Service */}
            <div>
              <input
                type="text"
                placeholder="Our Service"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition w-full"
            >
              📞 Get a Call Back
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;