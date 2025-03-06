import { motion } from "framer-motion";
import { FaCode, FaChartLine, FaRobot, FaPalette } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-blue-400 text-5xl" />,
    title: "Software Development",
    description: "Custom web & mobile applications tailored to your needs.",
  },
  {
    icon: <FaChartLine className="text-green-400 text-5xl" />,
    title: "Digital Marketing",
    description: "SEO, branding, content creation to grow your business.",
  },
  {
    icon: <FaRobot className="text-purple-400 text-5xl" />,
    title: "AI & Cloud Solutions",
    description: "Smart automation & cloud infrastructure for scalability.",
  },
  {
    icon: <FaPalette className="text-pink-400 text-5xl" />,
    title: "UI/UX & Design",
    description: "Creating stunning, user-friendly experiences.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-gradient-to-b min-h-100 from-blue-950 to-blue-900 text-white">
      {/* Section Heading */}
      <motion.h2
        className="text-center text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        What We Do
      </motion.h2>

      {/* Grid Layout */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg shadow-blue-500/20 p-6 rounded-2xl text-center transition-all transform hover:scale-105 hover:shadow-blue-500/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
