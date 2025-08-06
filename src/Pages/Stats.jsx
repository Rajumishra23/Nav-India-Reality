import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaBuilding, FaHotel, FaStore, FaChartArea, FaRegClock } from 'react-icons/fa';

const stats = [
  { label: "JV Projects", value: 30, icon: <FaBuilding />, desc: "Joint venture projects completed" },
  { label: "Hospitality Brands", value: 50, icon: <FaHotel />, desc: "Top hotel chains partnered" },
  { label: "Retail Brands", value: 99, icon: <FaStore />, desc: "Leading retail outlets opened" },
  { label: "Sqft Leased", value: 1000000, suffix: "+", icon: <FaChartArea />, desc: "Commercial space leased" },
  { label: "Years Experience", value: 10, icon: <FaRegClock />, desc: "Years of industry expertise" },
];

function StatsSection() {
  return (
    <section className="bg-gradient-to-b from-yellow-100 to-white py-20">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl text-indigo-700 md:text-5xl font-bold "
      >
        Key Achievements 
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-14 text-lg"
      >
        A legacy of trust, performance, and excellence – reflected through numbers that speak for themselves.
      </motion.p>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white border border-yellow-100 shadow-md hover:shadow-2xl rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="text-yellow-600 text-4xl mb-3 mx-auto">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-gray-800">
              <CountUp
                end={stat.value}
                duration={2}
                suffix={stat.suffix ? stat.suffix : "+"}
              />
            </h3>
            <p className="text-lg font-medium text-gray-700 mt-2">{stat.label}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
