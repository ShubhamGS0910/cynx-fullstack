import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Shubham GS",
    role: "Founder & CEO",
    image: "./assets/team/shubham.jpg",
    alt: "Shubham Image",
    quote: "Passionate about leveraging AI and technology to build scalable, future-ready solutions.",
    linkedin: "#",
    twitter: "#",
    github: "https://github.com/ShubhamGS0910/",
  },
  {
    name: "Pratik Chavan",
    role: "Co-Founder & CTO",
    image: "/assets/team/pratik.jpg",
    quote: "Engineering robust and cutting-edge systems for digital transformation.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Sumit G.",
    role: "AI & Data Science Expert",
    image: "/assets/team/sumit.jpg",
    quote: "Shaping the future of AI-driven innovation at CYN-X.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Omkar D.",
    role: "UI/UX & Product Designer",
    image: "/assets/team/omkar.jpg",
    quote: "Crafting seamless and futuristic user experiences.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

const MeetOurTeam = () => {
  return (
    <section className="w-full min-h-200 bg-blue-950 flex flex-col items-center justify-center py-12 px-6">
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet the Minds Behind CYN-X
      </motion.h2>

      <p className="text-lg text-gray-300 text-center max-w-2xl mb-12">
        A passionate team shaping the future of technology through innovation and excellence.
      </p>
      
      <div className="grid h-150 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <img src={member.image} alt={member.name} className="w-full h-90 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="mt-4 text-gray-500 italic">"{member.quote}"</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href={member.linkedin} className="text-blue-700 hover:text-blue-500">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.twitter} className="text-blue-400 hover:text-blue-300">
                  <FaTwitter size={24} />
                </a>
                <a href={member.github} className="text-gray-900 hover:text-gray-700">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.button
        className="mt-10 px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/50 transition-all"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        Join Our Mission
      </motion.button>
    </section>
  );
};

export default MeetOurTeam;
