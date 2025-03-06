import { motion } from "framer-motion";
import { FaBrain, FaStar, FaHandshake, FaUsers, FaLeaf } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-200 bg-gray-900 text-white px-6">
      {/* Section Header */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Who We Are
      </motion.h2>

      {/* Introduction */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        At <span className="text-blue-400 font-semibold">CYN-X</span>, we are not just a software company—we are <span className="text-purple-400">pioneers of the digital revolution</span>. Our goal is to create cutting-edge solutions that reshape industries and elevate human experiences.
      </motion.p>

      {/* Mission Statement */}
      <motion.div
        className="mt-8 bg-white/10 backdrop-blur-lg px-6 py-4 rounded-lg border border-white/20 shadow-lg shadow-blue-500/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <p className="text-lg md:text-xl font-medium text-white text-center">
          <span className="text-purple-400 font-bold">Our Mission:</span>  
          Empower businesses with <span className="text-blue-400">intelligent, scalable, and future-proof</span> digital solutions.
        </p>
      </motion.div>

      {/* Core Values */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Value 1 - Innovation */}
        <motion.div
          className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <FaBrain className="text-blue-400 text-4xl" />
          <h3 className="text-xl font-semibold mt-2">Innovation</h3>
          <p className="text-gray-400 text-center text-sm">We push the limits of technology to create breakthrough solutions.</p>
        </motion.div>

        {/* Value 2 - Excellence */}
        <motion.div
          className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <FaStar className="text-yellow-400 text-4xl" />
          <h3 className="text-xl font-semibold mt-2">Excellence</h3>
          <p className="text-gray-400 text-center text-sm">We strive for perfection in every project we deliver.</p>
        </motion.div>

        {/* Value 3 - Integrity */}
        <motion.div
          className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <FaHandshake className="text-green-400 text-4xl" />
          <h3 className="text-xl font-semibold mt-2">Integrity</h3>
          <p className="text-gray-400 text-center text-sm">Transparency, ethics, and honesty drive our work.</p>
        </motion.div>

        {/* Value 4 - Customer-Centricity */}
        <motion.div
          className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <FaUsers className="text-red-400 text-4xl" />
          <h3 className="text-xl font-semibold mt-2">Customer-Centricity</h3>
          <p className="text-gray-400 text-center text-sm">We prioritize user experience in every product we build.</p>
        </motion.div>

        {/* Value 5 - Sustainability */}
        <motion.div
          className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <FaLeaf className="text-green-500 text-4xl" />
          <h3 className="text-xl font-semibold mt-2">Sustainability</h3>
          <p className="text-gray-400 text-center text-sm">We create eco-friendly solutions for a better tomorrow.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;
