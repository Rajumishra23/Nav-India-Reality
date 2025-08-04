import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const blogs = [
  {
    title: "Navi Mumbai Leads 2025 Realty Boom",
    desc: "Real estate prices surged by 17.4% in Navi Mumbai Q1‑2025—marking it the fastest‑growing property hub in India.",
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.business-standard.com/finance/personal-finance/at-17-navi-mumbai-leads-2025-realty-boom-where-prices-are-rising-fastest-125073000487_1.html"
  },
  {
    title: "NavIndia Realty Launches Premium Commercial Project",
    desc: "NavIndia unveils a new commercial complex in the heart of Noida, focused on smart spaces and sustainable design.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.navindiareality.com/news/project-launch-aug2025"
  },
  {
    title: "The Rise of Mixed-Use Projects in Indian Realty",
    desc: "Know how projects combining retail, residential, and office spaces are reshaping India's real estate scene in 2025.",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    link: "https://realty.economictimes.indiatimes.com/news/commercial/mixed-use-trends-2025/102391487"
  },
];

const NewsBlogSection = () => {
  return (
    <section id="blogs" className="py-16 bg-yellow-50 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center">
          📰 Latest News & Blogs
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.desc}</p>
                  <a href={blog.link} target="_blank" rel="noreferrer" className="text-blue-600 font-medium hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewsBlogSection;
