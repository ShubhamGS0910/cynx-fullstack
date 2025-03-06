import { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaSearch } from "react-icons/fa";

const BlogHero = () => {
  useEffect(() => {
    loadFull();
  }, []);

  return (
    <section className="relative w-full h-130 flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 100 },
            color: { value: "#0ff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 1.5 },
          },
        }}
        className="absolute inset-0"
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl min-h-30 md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500">
          🚀 Stay Ahead with Tech Insights!
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          "Explore the latest in AI, Cloud, DevOps, and Digital Innovation—crafted for tech enthusiasts, professionals, and visionaries."
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-87">
          <a href="/blogs" className="bg-orange-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-orange-600 transition">
            Explore Insights
          </a>
          <a href="/subscribe" className="border border-gray-500 px-6 py-3 rounded-lg text-gray-300 hover:border-orange-500 hover:text-orange-500 transition">
            Subscribe for Updates
          </a>
        </div>

        {/* Search Bar */}
        <div className="relative mt-8">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full h-12 px-5 pr-12 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        {/* Trending Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {["AI", "Cloud", "DevOps", "Blockchain", "Cybersecurity"].map((tag, index) => (
            <span key={index} className="px-4 py-2 bg-gray-800 text-cyan-400 text-sm rounded-full border border-cyan-400 cursor-pointer hover:bg-cyan-400 hover:text-gray-900 transition">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
