import React from "react";
import { motion } from "framer-motion";

const retailOptions = [
  {
    title: "Anchor Spaces",
    image: "anchor.png",
    description:
      "Strategically located large-format spaces designed for high-impact visibility. Ideal for well-established brands seeking to serve as major footfall drivers within premium retail destinations.",
    link: "#",
  },
  {
    title: "Boutique Units",
    image: "boutique.png",
    description:
      "Compact and beautifully designed retail units tailored for upscale fashion labels, artisan stores, lifestyle concepts, and curated niche brands seeking a refined presence.",
    link: "#",
  },
  {
    title: "Pop-up Zones",
    image: "pop.png",
    description:
      "Flexible, short-term leasing spaces optimized for product launches, brand activations, and seasonal campaigns. Perfect for creating buzz and testing new concepts in real-time environments.",
    link: "#",
  },
];

const Retail = () => {
  return (
    <section id="retail" className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
          Retail Opportunities
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Explore tailored retail leasing options crafted to elevate brand presence, drive traffic, and enhance customer engagement across diverse commercial settings.
        </p>

        {/* Grid Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {retailOptions.map((option, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white border p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {option.title}
              </h3>
              <p className="text-gray-500 text-sm flex-grow">{option.description}</p>

              {/* Read More + Button */}
              <div className="mt-4 flex items-center justify-between">
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </a>
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full hover:bg-blue-700"
                >
                  →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Retail;
