import { motion } from "framer-motion";

const GetStartedButton = ({ text = "Get Started", onClick }) => {
  return (
    <motion.button
      className="relative px-8 py-3 text-white font-semibold rounded-md shadow-xl transition-all 
                 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600
                 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
    >
      {text}
      {/* Glow Effect */}
      <span className="absolute inset-0 rounded-full opacity-20 blur-lg bg-blue-500"></span>
      
    </motion.button>
    
  );
};

export default GetStartedButton;
