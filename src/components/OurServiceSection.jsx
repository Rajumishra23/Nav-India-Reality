import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const services = [
  {
    title: "Retail Leasing Strategy",
    image: "/building.png",
    description:
      "End-to-end leasing advisory for malls and commercial retail spaces. Covering tenant curation, layout optimization & ROI strategy.",
  },
  {
    title: "Hospitality Brand Deployment",
    image: "hotel.png",
    description:
      "13+ hospitality brand integrations across premium properties. From UI design to deployment and performance monitoring.",
  },
  {
    title: "Real Estate UI Solutions",
    image: "realestae.png",
    description:
      "Interactive real-estate platforms using React, Tailwind, and Framer Motion. Built for conversions and lead generation.",
  },
  {
    title: "Frontend Development",
    image: "frontend.png",
    description:
      "Responsive, animated interfaces using React, TailwindCSS, Framer Motion, and mobile optimization best practices.",
  },
];

export default function OurServicesSection() {
  return (
    <section className="bg-yellow-50 py-16" id="services">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-10">
          We deliver scalable solutions tailored to hospitality, real estate, and retail sectors.
        </p>

        <Swiper
          modules={[Pagination, Navigation]}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-lg rounded-xl p-6 text-left">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
