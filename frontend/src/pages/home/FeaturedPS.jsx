import { motion } from "framer-motion";
import { Briefcase, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { title: "Software Development", icon: <Briefcase />, path: "/services/software-development", description: "Custom software solutions for business growth." },
  { title: "AI Solutions", icon: <Briefcase />, path: "/services/ai-solutions", description: "Leverage AI to optimize workflows and automation." },
  { title: "Cloud & DevOps", icon: <Briefcase />, path: "/services/cloud-devops", description: "Scalable cloud solutions & DevOps automation." },
  { title: "UI/UX Design", icon: <Briefcase />, path: "/services/ui-ux", description: "Creative and user-friendly UI/UX experiences." },
  { title: "Digital Marketing", icon: <Briefcase />, path: "/services/digital-marketing", description: "Boost your brand with top-tier digital strategies." },
  { title: "Art & Crafts", icon: <Briefcase />, path: "/services/art-crafts", description: "Creative sketches, paintings, and caricatures." },
];

const products = [
  { title: "Mobile Applications", icon: <Layers />, path: "/products/mobile-applications", description: "High-performance mobile apps for Android & iOS." },
  { title: "Web Applications", icon: <Layers />, path: "/products/web-applications", description: "Robust and scalable web applications." },
  { title: "Custom Software", icon: <Layers />, path: "/products/custom-software", description: "Tailored software solutions for business needs." },
  { title: "Enterprise Applications", icon: <Layers />, path: "/products/enterprise-applications", description: "Advanced applications for large-scale enterprises." },
];

const FeaturedPS = () => {
  return (
    <section className="py-16 bg-gray-900 text-white pr-10 pl-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
        <p className="text-lg text-gray-300 mb-10">
          Discover our cutting-edge services and innovative products.
        </p>

        {/* Services Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-6">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-blue-400 text-3xl">{service.icon}</span>
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <Link to={service.path} className="text-blue-500 hover:underline">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-6">Our Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-green-400 text-3xl">{product.icon}</span>
                  <h4 className="text-xl font-semibold">{product.title}</h4>
                </div>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <Link to={product.path} className="text-green-400 hover:underline">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPS;
