import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";

const themes = [
  {
    id: "ai",
    title: "AI & Machine Learning",
    subtitle: "Empowering the Future with Intelligent Systems",
    bg: "bg-gradient-to-r from-blue-900 to-black",
    effect: "animate-pulse",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    subtitle: "Protecting Digital Assets with Cutting-Edge Security",
    bg: "bg-black bg-grid-cyber",
    effect: "animate-flicker",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    subtitle: "Scalable & Reliable Cloud Infrastructure",
    bg: "bg-gradient-to-b from-blue-600 to-purple-900",
    effect: "animate-cloudFloat",
  },
  {
    id: "blockchain",
    title: "Blockchain & Web3",
    subtitle: "Decentralized & Secure Digital Transactions",
    bg: "bg-gradient-to-t from-gray-900 to-black bg-glow",
    effect: "animate-pulse",
  },
  {
    id: "quantum",
    title: "Quantum Computing",
    subtitle: "Harnessing Quantum Mechanics for Supercomputing",
    bg: "bg-gradient-to-r from-purple-900 to-black",
    effect: "animate-quantumGlow",
  },
];

const clickSound = new Howl({ src: ["/sounds/click.mp3"] });

const HeroSection = () => {
  const [currentTheme, setCurrentTheme] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTheme((prev) => (prev + 1) % themes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-100% h-100 overflow-hidden flex items-center justify-center transition-all ${themes[currentTheme].bg}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={themes[currentTheme].id}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Title */}
          <motion.h1
            className={`text-4xl md:text-6xl font-extrabold text-amber-100 drop-shadow-lg ${themes[currentTheme].effect}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {themes[currentTheme].title}
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            className="mt-4 text-lg md:text-xl font-bold text-gray-300 font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {themes[currentTheme].subtitle}
          </motion.p>

          {/* Animated Button */}
          <motion.button
            className="mt-8 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 rounded-xl shadow-lg shadow-blue-500/50 transition-all backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.1, filter: "blur(2px)" }}
            onClick={() => clickSound.play()}
          >
            Learn More
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
