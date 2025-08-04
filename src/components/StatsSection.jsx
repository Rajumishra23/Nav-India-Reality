import { motion } from 'framer-motion';


const stats = [
  { label: "JV Projects", value: "30+" },
  { label: "Hospitality Brands", value: "50+" },
  { label: "Retail Brands", value: "99+" },
  { label: "Sqft Leased", value: "1M+" },
  { label: "Years Experience", value: "10+" },
];

function StatsSection() {
  return (
    <section className="bg-yellow-50 py-12">
         <h1 className='text-center font-bold text-4xl text-blue-500 '>Our Milestone</h1>
         <br></br>
        
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
        
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: idx * 0.2 }}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <h3 className="text-3xl font-bold text-indigo-600">{stat.value}</h3>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;