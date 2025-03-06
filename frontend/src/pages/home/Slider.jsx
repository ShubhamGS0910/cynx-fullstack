import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Innovating the Future",
    description: "Building cutting-edge software solutions with advanced technology.",
    image: "/images/slide1.jpg", // Replace with actual images
    button1: "Learn More",
    button2: "Get Started",
  },
  {
    id: 2,
    title: "Empowering Businesses",
    description: "Helping companies achieve success through technology and innovation.",
    image: "/images/slide2.jpg",
    button1: "Explore Services",
    button2: "Contact Us",
  },
  {
    id: 3,
    title: "AI-Powered Solutions",
    description: "Leveraging artificial intelligence to transform industries.",
    image: "/images/slide3.jpg",
    button1: "Discover AI",
    button2: "Request Demo",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-100 overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={index === current ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {slide.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
                {slide.button1}
              </button>
              <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition">
                {slide.button2}
              </button>
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
      >
        <FaArrowRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-orange-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
