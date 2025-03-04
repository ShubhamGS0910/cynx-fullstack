import { motion } from "framer-motion";
import { useState } from "react";

// Sample Testimonials (Replace with real ones later)
const testimonials = [
  {
    name: "Sumit GD",
    role: "Industry Expert",
    quote: "AI-powered solutions like these are the future of tech! CYN-X is on the right path to innovation.",
    avatar: "/assets/testimonials/expert.png",
  },
  {
    name: "SHubham GS",
    role: "Founder & CEO",
    quote: "We’re here to revolutionize digital solutions, making technology accessible, scalable, and powerful for all businesses.",
    avatar: "/assets/testimonials/founder.png",
  },
  {
    name: "Pratik Chavan",
    role: "Beta Tester",
    quote: "The features and UI of CYN-X's platform are mind-blowing! The future of digital solutions is here.",
    avatar: "/assets/testimonials/user.png",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-gray-900 text-white text-center relative overflow-hidden">
      {/* Glowing Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-900 opacity-80"></div>

      {/* Floating Glows */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30"></div>

      <motion.h2
        className="relative text-4xl md:text-5xl font-bold mb-8 uppercase tracking-widest z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Trusted by Visionaries
      </motion.h2>

      {/* Testimonials Container */}
      <div className="relative flex flex-col items-center space-y-6 px-6 md:px-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`relative w-full max-w-2xl bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transform transition-all duration-500 ${
              activeIndex === index ? "scale-105 shadow-2xl" : "scale-95 opacity-75"
            }`}
            whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {/* Avatar */}
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full border-4 border-blue-400 mb-4"
            />

            {/* Quote */}
            <p className="text-lg italic text-gray-300">"{testimonial.quote}"</p>

            {/* Name & Role */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-blue-400">{testimonial.name}</h3>
              <p className="text-gray-400">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
