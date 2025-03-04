import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Info } from "lucide-react";
import CountUp from "react-countup";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Lottie from "lottie-react";

const HeroSection = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/assets/heroAnimation.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={async (main) => await loadFull(main)}
        options={{
          particles: {
            number: { value: 50 },
            move: { enable: true, speed: 1.5 },
            opacity: { value: 0.3 },
            size: { value: 2 },
            links: { enable: true, opacity: 0.1, distance: 150 },
          },
        }}
        className="absolute inset-0"
      />

      {/* Typing Animated Text */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 animate-glow"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Innovate. Disrupt. Conquer. <span className="text-white animate-blink">|</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-gray-200 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Empowering Businesses with Cutting-Edge Digital Solutions.
      </motion.p>

      {/* Counter Stats */}
      <div className="mt-6 flex gap-8">
        <motion.div
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <CountUp start={0} end={500} duration={3} className="text-4xl" />+ Businesses Served
        </motion.div>

        <motion.div
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <CountUp start={0} end={50} duration={3} className="text-4xl" />+ AI Solutions Deployed
        </motion.div>
      </div>

      {/* CTA Buttons */}
      <motion.div
        className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Get Started <ArrowRight className="inline-block ml-2" />
        </button>
        <button className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-lg shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white">
          Learn More <Info className="inline-block ml-2" />
        </button>
      </motion.div>

      {/* Lottie Animation */}
      {animationData && (
        <Lottie
          animationData={animationData}
          className="absolute right-12 bottom-12 w-60 h-60"
        />
      )}
    </section>
  );
};

export default HeroSection;
