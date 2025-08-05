import React from "react";
import { motion } from "framer-motion";

const NewsBlogSection = () => {
  const blogs = [
    {
      title: "Navi Mumbai Leads 2025 Realty Boom",
      description:
        "Real estate prices surged by 17.4% in Navi Mumbai Q1‑2025—marking it the fastest‑growing property hub in India.",
      image:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
      link:
        "https://www.business-standard.com/finance/personal-finance/at-17-navi-mumbai-leads-2025-realty-boom-where-prices-are-rising-fastest-125073000487_1.html",
    },
    {
      title: "NavIndia Launches Premium Commercial Project",
      description:
        "NavIndia unveils a new commercial complex in the heart of Noida, focused on smart spaces and sustainable design.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      link: "https://www.navindiareality.com/news/project-launch-aug2025",
    },
    {
      title: "The Rise of Mixed-Use Projects in Indian Realty",
      description:
        "Know how projects combining retail, residential, and office spaces are reshaping India's real estate scene in 2025.",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      link:
        "https://realty.economictimes.indiatimes.com/news/commercial/mixed-use-trends-2025/102391487",
    },
  ];

  return (
    <section id="blogs" className="py-16 bg-yellow-50 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12 text-center">
          📰 Latest News & Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-blue-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow">
                  {blog.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 font-medium hover:underline"
                  >
                    Read More →
                  </a>
                  <a
                    href={blog.link}
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
};

export default NewsBlogSection;
