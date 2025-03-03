import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { menuItems } from "../data/menuItems";
import logo from "../assets/cynx-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md bg-gray-900 text-white shadow-lg py-2`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="flex items-center space-x-2">
          <motion.img
            src={logo}
            alt="CYN-X"
            className="h-12 w-auto drop-shadow-lg"
            whileHover={{ scale: 1.2, rotate: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="text-xl font-bold tracking-wide text-white">CYN-X</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.li key={index} whileHover={{ scale: 1.1 }} className="relative group">
              {item.dropdown ? (
                <div className="relative">
                  <button className="text-white hover:text-orange-500 transition-all">
                    {item.name}
                  </button>
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-gray-900 text-white shadow-lg rounded-lg transition-all duration-300">
                    {item.subMenu.map((subItem, subIndex) => (
                      <motion.div key={subIndex} whileHover={{ scale: 1.1 }}>
                        <Link
                          to={subItem.link}
                          className="block px-4 py-2 hover:bg-orange-500 transition-all duration-300"
                        > 
                          {subItem.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div>
                  <Link to={item.link} className="relative group text-white hover:text-orange-500 transition-all">
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={() => setDarkMode(!darkMode)} className="text-white hover:text-orange-500 transition-all">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-lg flex flex-col items-center space-y-4 py-4">
          {menuItems.map((item, index) => (
            <div key={index} className="w-full text-center">
              {item.dropdown ? (
                <details className="w-full">
                  <summary className="text-white px-4 py-2 hover:text-orange-500 cursor-pointer">
                    {item.name}
                  </summary>
                  <div className="flex flex-col bg-gray-800 rounded-lg">
                    {item.subMenu.map((subItem, subIndex) => (
                      <motion.div key={subIndex} whileHover={{ scale: 1.1 }}>
                        <Link
                          to={subItem.link}
                          className="block px-4 py-2 hover:bg-orange-500 transition-all duration-300"
                        >
                          {subItem.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </details>
              ) : (
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link
                    to={item.link}
                    className="block text-white px-4 py-2 hover:text-orange-500 transition-all"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
