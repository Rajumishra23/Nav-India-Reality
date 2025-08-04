import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-blue-700 text-white rounded-full p-2"
    onClick={onClick}
  >
    &gt;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-blue-700 text-white rounded-full p-2"
    onClick={onClick}
  >
    &lt;
  </div>
);

const NewsBlogSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="blogs" className="py-16 bg-yellow-50 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center">
          📰 Latest News & Blogs
        </h2>

        <Slider {...settings}>
          {/* Blog 1 */}
          <div className="px-4">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80"
                alt="Navi Mumbai Realty Surge"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Navi Mumbai Leads 2025 Realty Boom
                </h3>
                <p className="text-gray-600 mb-4">
                  Real estate prices surged by 17.4% in Navi Mumbai Q1‑2025—marking it the fastest‑growing property hub in India.
                </p>
                <a
                  href="https://www.business-standard.com/finance/personal-finance/at-17-navi-mumbai-leads-2025-realty-boom-where-prices-are-rising-fastest-125073000487_1.html"
                  target="_blank"
                  className="text-blue-600 font-medium hover:underline"
                  rel="noopener noreferrer"
                >
                  Read Article
                </a>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="px-4">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
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
                  rel="noopener noreferrer"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="px-4">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
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
                  rel="noopener noreferrer"
                >
                  Explore Article
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default NewsBlogSection;
