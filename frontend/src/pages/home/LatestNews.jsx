import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const newsItems = [
  {
    title: "🚀 CYN-X Unveils Next-Gen AI Solutions",
    date: "March 2025",
    description: "Our AI-driven solutions are transforming industries with automation and intelligence.",
  },
  {
    title: "☁️ Cloud & DevOps Innovation Coming Soon",
    date: "April 2025",
    description: "Stay tuned for our cutting-edge cloud-native tools launching soon.",
  },
  {
    title: "📈 Breaking Barriers in Digital Marketing",
    date: "May 2025",
    description: "Revolutionizing branding, content, and digital experiences with AI-powered insights.",
  },
];

const LatestNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };

  return (
    <section className="relative py-16 bg-gray-950 text-white overflow-auto h-auto w-auto">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90"></div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold tracking-wide text-white mb-6 uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What’s Next for <span className="text-blue-500">CYN-X?</span>
        </motion.h2>
        <p className="text-lg text-gray-400 mb-12">Stay updated with our latest innovations and milestones.</p>

        {/* News Slider */}
        <div className="relative w-full max-w-3xl mx-auto">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              className={`absolute w-full p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-gray-700 
                bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-white transition-all duration-700 
                ${
                  index === currentIndex
                    ? "opacity-100 scale-105 shadow-blue-500/50"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index === currentIndex ? 1 : 0, y: index === currentIndex ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <div className="flex items-center text-gray-400">
                  <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                  <span>{item.date}</span>
                </div>
              </div>
              <p className="text-gray-300">{item.description}</p>
              <div className="mt-4">
                <motion.button
                  className="flex items-center text-blue-400 hover:text-blue-500 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Read More <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <motion.button
            onClick={prevSlide}
            className="p-2 bg-gray-800/70 hover:bg-gray-700 transition-all rounded-full shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <motion.button
            onClick={nextSlide}
            className="p-2 bg-gray-800/70 hover:bg-gray-700 transition-all rounded-full shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {newsItems.map((_, index) => (
            <motion.div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                currentIndex === index ? "bg-blue-500 scale-125 shadow-lg" : "bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
