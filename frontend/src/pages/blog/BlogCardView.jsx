import { useState, useMemo } from "react";
import { FaRegClock, FaTags, FaThLarge, FaList } from "react-icons/fa";
import { motion } from "framer-motion";
import blogPosts from "./blogData";

const BlogCardView = () => {
  const [viewMode, setViewMode] = useState("grid");

  const filteredPosts = useMemo(() => blogPosts, [blogPosts]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12">
      {/* Header Section */}
      <div className="flex justify-between  items-center mb-8">
        <h1 className="text-5xl h-15 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
          🚀 CYN-X Blogs
        </h1>

        {/* View Toggle */}
        <div className="flex gap-4">
          {["grid", "list"].map((mode) => (
            <motion.button
              key={mode}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-xl transition-all shadow-lg backdrop-blur-md bg-opacity-50 hover:shadow-orange-500/50 ${
                viewMode === mode ? "bg-orange-500" : "bg-gray-800"
              }`}
              onClick={() => setViewMode(mode)}
            >
              {mode === "grid" ? <FaThLarge size={24} /> : <FaList size={24} />}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Blog Display */}
      <div
        className={`mt-8 transition-all duration-500 ${
          viewMode === "grid"
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "flex flex-col gap-8"
        }`}
      >
        {filteredPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.05 }}
            className={`relative overflow-hidden rounded-xl backdrop-blur-lg bg-gray-800/70 border border-gray-700 shadow-lg hover:shadow-orange-500/50 transition-all duration-500 ${
              viewMode === "list" ? "flex gap-6 p-6" : "p-4"
            }`}
          >
            {/* Thumbnail (Dynamically Fetched from Unsplash) */}
            <motion.img
                src={`https://source.unsplash.com/random/400x300/?${post.tags[0]}`}
                alt={post.title}
                className={`rounded-lg object-cover transition-all duration-500 ${
                    viewMode === "list" ? "w-48 h-48" : "w-full h-56"
                }`}
            />

            {/* Content */}
            <div className={`${viewMode === "list" ? "w-3/4" : "mt-4"}`}>
              <h2 className="text-2xl font-bold hover:text-orange-400 transition">
                <a href={`/blog/${post.id}`}>{post.title}</a>
              </h2>
              <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                {post.description}
              </p>

              {/* Metadata */}
              <div className="text-gray-500 text-xs mt-3 flex items-center gap-2">
                <span>{post.date}</span> •
                <a
                  href={`/author/${post.author}`}
                  className="hover:text-orange-400"
                >
                  {post.author}
                </a>
                <FaRegClock size={12} />
                <span>{post.readingTime} min read</span>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 px-3 py-1 rounded-full text-xs flex items-center gap-1 cursor-pointer hover:bg-orange-500 transition"
                  >
                    <FaTags size={12} /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogCardView;
