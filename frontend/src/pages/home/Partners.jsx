import { motion } from "framer-motion";
import { useState } from "react";

// Sample Partner Data (Replace with actual partners)
const partners = [
  { name: "AWS", logo: "/assets/partners/aws.png" },
  { name: "Google Cloud", logo: "/assets/partners/gcp.png" },
  { name: "Microsoft Azure", logo: "/assets/partners/azure.png" },
  { name: "DigitalOcean", logo: "/assets/partners/digitalocean.png" },
  { name: "Vercel", logo: "/assets/partners/vercel.png" },
  { name: "GitHub", logo: "/assets/partners/github.png" },
];

const Partners = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-200 uppercase tracking-widest">
        Our Partners
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-6 md:px-12">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="relative flex items-center justify-center bg-gray-800 p-4 rounded-xl shadow-lg cursor-pointer overflow-hidden"
            whileHover={{ scale: 1.2, zIndex: 10 }}
            animate={{
              scale: activeIndex === index ? 1.2 : 1,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            onHoverStart={() => setActiveIndex(index)}
            onHoverEnd={() => setActiveIndex(null)}
          >
            {/* Partner Logo */}
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-24 object-contain transition-transform duration-300"
            />

            {/* Overlay on Hover */}
            <motion.div
              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            >
              <p className="text-lg font-semibold">{partner.name}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
