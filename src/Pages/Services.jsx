import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Retail Leasing Strategy",
    image: "/building.png",
    description:
      "End-to-end leasing advisory for malls and commercial retail spaces. Covering tenant curation, layout optimization & ROI strategy.",
    link: "#", // Replace with actual link if available
  },
  {
    title: "Hospitality Brand Deployment",
    image: "hotel.png",
    description:
      "13+ hospitality brand integrations across premium properties. From UI design to deployment and performance monitoring.",
    link: "#",
  },
  {
    title: "Real Estate UI Solutions",
    image: "realestae.png",
    description:
      "Interactive real-estate platforms using React, Tailwind, and Framer Motion. Built for conversions and lead generation.",
    link: "#",
  },
];

export default function OurServicesSection() {
  return (
    <section className="bg-white py-16" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-indigo-700 text-2xl font-bold text-base font-semibold uppercase tracking-wide mb-2">
          Our Services
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          We Are India’s Leading Real Estate Consultancy
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base mb-10">
          Real Leasing India offers a comprehensive range of services designed to meet the specific requirements of our clients. Our expertise includes Corporate Leasing, Retail Leasing, Residential Leasing, Investment Advisory, and Interior Solutions and Designer.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-base font-semibold text-blue-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Read More Link + Arrow */}
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 font-medium hover:underline"
                  >
                    Read More →
                  </a>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full hover:bg-blue-700"
                  >
                    →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
