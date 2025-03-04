import { motion } from "framer-motion";
import { ShieldCheck, Brain, Cloud, Rocket, Users, Globe, Award, Lightbulb } from "lucide-react";
import { useState } from "react";

const badges = [
  { title: "AI-Driven Solutions", icon: <Brain />, description: "Leveraging AI & ML for smarter solutions." },
  { title: "Cloud-Native Architecture", icon: <Cloud />, description: "Scalable, cloud-based applications & services." },
  { title: "Industry 4.0 Ready", icon: <Rocket />, description: "Innovative solutions for the next-gen industry." },
  { title: "Trusted by Clients", icon: <Users />, description: "Delivering excellence with 100% satisfaction." },
  { title: "Global Presence", icon: <Globe />, description: "Serving businesses worldwide with expertise." },
  { title: "Award-Winning Team", icon: <Award />, description: "Recognized for innovation & tech leadership." },
  { title: "Security First", icon: <ShieldCheck />, description: "Enterprise-grade security & compliance standards." },
  { title: "Innovation Focused", icon: <Lightbulb />, description: "R&D driven solutions for future challenges." },
];

const Badges = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-900 text-white p-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Our Recognitions & Trust Badges</h2>
        <p className="text-lg text-gray-300 mb-10">
          We are driven by innovation, AI, and industry best practices.
        </p>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className={`relative p-6 rounded-xl shadow-lg transition-all bg-gray-800/70 backdrop-blur-md border border-gray-700 text-center cursor-pointer ${
                hoveredIndex === index ? "z-10 scale-110 shadow-2xl" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.15, y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col items-center text-center">
                <motion.span
                  className="text-blue-400 text-5xl mb-4"
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {badge.icon}
                </motion.span>
                <h4 className="text-xl font-semibold text-white">{badge.title}</h4>
                <p className="text-gray-300 text-sm mt-2">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;
