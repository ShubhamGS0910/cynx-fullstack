// src/pages/blog/RelatedPosts.jsx
import { Link } from "react-router-dom";
import blogData from "./blogData";

const RelatedPosts = ({ currentPostId }) => {
  // Find the current post
  const currentPost = blogData.find((post) => post.id === currentPostId);

  // Filter posts with at least one matching tag (excluding the current post)
  const relatedPosts = blogData
    .filter(
      (post) =>
        post.id !== currentPostId &&
        post.tags.some((tag) => currentPost?.tags.includes(tag))
    )
    .slice(0, 3); // Show only 3 related posts

  return (
    <div className="mt-12 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">📖 Related Posts</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {relatedPosts.length > 0 ? (
          relatedPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block p-4 bg-gray-800 rounded-lg hover:bg-orange-500 transition"
            >
              <h4 className="font-bold">{post.title}</h4>
              <p className="text-sm text-gray-400 mt-1">{post.date}</p>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No related posts found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedPosts;
