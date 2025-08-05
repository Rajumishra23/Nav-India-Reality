import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    title: "Retail Head, Orbit Malls",
    image: "/client1.png",
    review: "NavIndia’s team helped us optimize our leasing strategy. The turnaround was faster than we imagined!"
  },
  {
    name: "Sneha Verma",
    title: "Hospitality Lead, LuxeStay",
    image: "/girl.png",
    review: "Their design approach and responsiveness helped us attract premium clients seamlessly."
  },
  {
    name: "Rahul Mehra",
    title: "Realty Advisor, Nova Spaces",
    image: "/client3.png",
    review: "We appreciated the smooth collaboration, clear communication and top-notch design execution."
  }
];

function TestimonialsSection() {
  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.3 }}
              whileHover={{ scale: 1.05 }} // Added hover scale
              className="bg-white shadow-lg rounded-xl p-6 cursor-pointer transition-transform duration-300"
            >
              <motion.img
                src={person.image}
                alt={person.name}
                className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-2 border-indigo-500"
                whileHover={{ rotate: 5 }} // slight rotation on hover
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{person.title}</p>
              <p className="text-gray-700 text-sm italic">“{person.review}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
