import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePos = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", updateMousePos);
    return () => window.removeEventListener("mousemove", updateMousePos);
  }, []);

  return (
    <div className="relative h-80 flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6 sm:px-12 lg:px-24">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-blue-900 to-black opacity-50"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-70"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 1.2 + 0.8,
            }}
            animate={{ y: ["100vh", "0vh"], opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: Math.random() * 6 + 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-6 py-12 sm:px-16 sm:py-16 lg:px-24 lg:py-20 rounded-2xl shadow-lg w-full max-w-3xl"
        animate={{ scale: [0.98, 1, 0.98] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-blue-400 drop-shadow-lg">
          Get in Touch with CYN-X
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-3">
          Let’s Build the Future Together
        </p>
      </motion.div>
    </div>
  );
}
