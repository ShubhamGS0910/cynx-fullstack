import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import BlogCard from "./BlogCard";
import blogPosts from "./blogData";

const categories = [
  "All",
  "Mobile App",
  "AI",
  "Web Development",
  "Cloud Computing",
  "Cybersecurity",
  "Sketching & Art",
  "Organic Products",
  "Digital Marketing",
  "Photography & Videography",
];

const sortOptions = ["Most Recent", "Trending", "Popular"];

const BCategories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Most Recent");

  const filteredPosts = blogPosts
    .filter((post) =>
      selectedCategory === "All" ? true : post.category === selectedCategory
    )
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "Most Recent") return new Date(b.date) - new Date(a.date);
      if (sortBy === "Trending") return b.engagement - a.engagement;
      if (sortBy === "Popular") return b.views - a.views;
      return 0;
    });

  return (
    <div className="min-h-300 bg-gray-900 text-white px-6 pb-8">
      <h1 className="text-4xl font-bold text-orange-500 text-center">
        🚀 CYN-X Blog
      </h1>
      <p className="text-gray-400 text-center mt-2">
        Stay ahead with the latest insights in AI, Web, and Future Tech!
      </p>

      {/* Search & Filter Bar */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg pl-10 focus:ring-2 focus:ring-orange-500 transition w-72"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        {/* Category Filter */}
        <select
          className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500 transition"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Sorting Filter */}
        <select
          className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500 transition"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Grid/List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <p className="text-center text-gray-400 col-span-3">
            No blogs found. Try a different filter or search.
          </p>
        )}
      </div>
    </div>
  );
};

export default BCategories;
