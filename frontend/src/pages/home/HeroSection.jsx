import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import GetStartedButton from "../../components/buttons/GetStratedButton";
import ReadMoreButton from "../../components/buttons/ReadMoreButton";

const words = [
  { text: "Innovate. Disrupt. Conquer.", color: "text-blue-500" }, 
  { text: "Create. Elevate. Dominate.", color: "text-green-400" },
  { text: "Transform. Accelerate. Lead.", color: "text-orange-400" }
];

const TypingText = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex].text;
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    const timer = setTimeout(() => {
      setDisplayedText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <motion.h1 
      className={`text-4xl md:text-5xl font-extrabold drop-shadow-lg ${words[wordIndex].color}`}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      {displayedText}
      <span className="text-white animate-blink">|</span> {/* Blinking cursor */}
    </motion.h1>
  );
};

const messages = [
  "🚀 Empowering Businesses with Cutting-Edge Digital Solutions.",
  "🏆 Transform Your Vision into Reality with AI & Software Solutions!"
];

const RotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // Change message every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      key={index}
      className="text-lg md:text-xl text-gray-200 mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
    >
      {messages[index]}
    </motion.p>
  );
};


const HeroSection = () => {
  return (
    <section
      className="w-full min-h-[calc(100vh-80px)] p-0 flex items-center justify-center text-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/assets/HomeHS.png')`,
        backgroundSize: "cover",
        backgroundPosition: "top center",  
        backgroundRepeat: "no-repeat",
        minHeight: "35rem",  
      }}
    >
      {/* Overlay with Blur Effect */}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/40 backdrop-blur-sm"></div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 px-6 md:px-12 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        {/* Typing Text Component */}
        <TypingText />

        <RotatingText />

        <motion.div 
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
         <GetStartedButton />
         <ReadMoreButton />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
