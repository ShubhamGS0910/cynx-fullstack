import { motion } from "framer-motion";
import { FaRocket, FaBriefcase, FaGlobe, FaBrain, FaCloud, FaTrophy } from "react-icons/fa";

const milestones = [
  {
    year: "2024",
    title: "CYN-X Founded",
    description: "Revolutionizing software with AI-driven solutions.",
    icon: <FaRocket className="text-orange-500" />,
  },
  {
    year: "2025",
    title: "Enterprise Software Launched",
    description: "Delivered scalable applications for businesses.",
    icon: <FaBriefcase className="text-blue-500" />,
  },
  {
    year: "2026",
    title: "Global Expansion",
    description: "Partnered with international clients & businesses.",
    icon: <FaGlobe className="text-green-500" />,
  },
  {
    year: "2027",
    title: "AI-Driven SaaS Products",
    description: "Automated solutions for cybersecurity & fintech.",
    icon: <FaBrain className="text-purple-500" />,
  },
  {
    year: "2028",
    title: "Blockchain & Cloud Solutions",
    description: "Secure, decentralized applications for enterprises.",
    icon: <FaCloud className="text-indigo-500" />,
  },
  {
    year: "2029",
    title: "Industry Leader",
    description: "Recognized globally for AI & DevOps excellence.",
    icon: <FaTrophy className="text-yellow-500" />,
  },
];

const JourneyTimeline = () => {
  return (
    <div className="relative flex items-center justify-center min-h-100 bg-gradient-to-r from-blue-950 to-black px-8 py-16">
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          🚀 Our Journey: From Startup to Industry Leader
        </h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-10 md:space-x-16 px-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center w-64 md:w-72 p-6 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-5xl">{milestone.icon}</div>
                <h3 className="text-xl font-bold mt-3">{milestone.year}</h3>
                <h4 className="text-lg font-semibold text-gray-700">{milestone.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{milestone.description}</p>
                {index < milestones.length - 1 && (
                  <div className="absolute w-16 h-1 bg-orange-400 top-1/2 right-[-50px] hidden md:block"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;
