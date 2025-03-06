import { FaClock } from "react-icons/fa";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-orange-400">{post.title}</h3>
        <p className="text-gray-400 text-sm mt-2">{post.description}</p>
        
        {/* Meta Info */}
        <div className="flex justify-between items-center text-gray-400 text-xs mt-3">
          <span>{post.date} • {post.author}</span>
          <span className="flex items-center">
            <FaClock className="mr-1" /> {post.readingTime} min read
          </span>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-orange-500 text-white px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
