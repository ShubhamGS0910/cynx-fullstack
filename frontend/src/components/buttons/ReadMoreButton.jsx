import { motion } from "framer-motion";

const ReadMoreButton = ({ text = "Read More ...", onClick }) => {
  return (
    <motion.button
      className="px-6 py-3 bg-transparent border-0 hover:bg-blue-600 hover:text-amber-200 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default ReadMoreButton;
