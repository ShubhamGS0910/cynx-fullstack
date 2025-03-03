// Footer.jsx
import { useState, useEffect } from "react";
import { Sun, Moon, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <footer className={`w-full mt-auto transition-all duration-300 backdrop-blur-md ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div className="text-xl font-semibold" whileHover={{ scale: 1 }} transition={{ duration: 0.2 }}>
          © {new Date().getFullYear()} CYN-X. All rights reserved.
        </motion.div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all" whileHover={{ scale: 1.2 }}>
            <Facebook size={24} />
          </motion.a>
          <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all" whileHover={{ scale: 1.2 }}>
            <Twitter size={24} />
          </motion.a>
          <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all" whileHover={{ scale: 1.2 }}>
            <Instagram size={24} />
          </motion.a>
          <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all" whileHover={{ scale: 1.2 }}>
            <Linkedin size={24} />
          </motion.a>
        </div>

        <button onClick={() => setDarkMode(!darkMode)} className="mt-4 md:mt-0 border border-gray-500 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 hover:text-white transition-all">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;