import React from "react";
import frontImage from '../assets/frontImage.png';
import front1Image from '../assets/frontImage.png';

const NewsBlogSection = () => {
  return (
    <section id="blogs" className="py-16 bg-yellow-50 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center">
          📰 Latest News & Blogs
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
  <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80"
       alt="Navi Mumbai Realty Surge" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-xl font-semibold mb-2">
      Navi Mumbai Leads 2025 Realty Boom
    </h3>
    <p className="text-gray-600 mb-4">
      Real estate prices surged by 17.4% in Navi Mumbai Q1‑2025—marking it the fastest‑growing property hub in India.
    </p>
    <a href="https://www.business-standard.com/finance/personal-finance/at-17-navi-mumbai-leads-2025-realty-boom-where-prices-are-rising-fastest-125073000487_1.html"
       target="_blank" className="text-blue-600 font-medium hover:underline">
      Read Article
    </a>
  </div>
</div>


          {/* Blog Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
              alt="NavIndia Launch"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                NavIndia Realty Launches Premium Commercial Project
              </h3>
              <p className="text-gray-600 mb-4">
                NavIndia unveils a new commercial complex in the heart of Noida, focused on smart spaces and sustainable design.
              </p>
              <a
                href="https://www.navindiareality.com/news/project-launch-aug2025"
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                Know More
              </a>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src='https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80
'
              alt="Mixed Use Projects"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                The Rise of Mixed-Use Projects in Indian Realty
              </h3>
              <p className="text-gray-600 mb-4">
                Know how projects combining retail, residential, and office spaces are reshaping India's real estate scene in 2025.
              </p>
              <a
                href="https://realty.economictimes.indiatimes.com/news/commercial/mixed-use-trends-2025/102391487"
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                Explore Article
              </a>
            </div>
          </div>

        
  
</div>


        </div>
    </section>
  );
};

export default NewsBlogSection;
