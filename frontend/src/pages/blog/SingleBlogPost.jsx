import { useState, useEffect } from "react";
import { FaClock, FaTwitter, FaLinkedin, FaFacebook, FaCopy } from "react-icons/fa";
import { useParams } from "react-router-dom";
import blogData from "../../data/blogData";
import CommentsSection from "./CommentSection";
import RelatedPosts from "./RelatedPost";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

const SingleBlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((post) => post.id === parseInt(id));
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  if (!post) return <h1 className="text-center text-red-500">Post not found</h1>;

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} p-6`}>
      {/* Hero Section */}
      <div className="relative w-full max-w-4xl mx-auto">
        <img src={post.image} alt={post.title} className="w-full rounded-xl shadow-lg" />
        <h1 className="text-4xl font-bold mt-6">{post.title}</h1>
        <p className="text-gray-500 mt-2 flex items-center gap-2">
          <FaClock /> {post.readingTime} min read
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4 mt-6">
        <img src={post.authorImage} className="w-14 h-14 rounded-full" alt={post.author} />
        <div>
          <p className="text-lg font-semibold">{post.author}</p>
          <div className="flex gap-3 text-blue-500">
            <a href={post.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href={post.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      {post.toc && (
        <div className="mt-6 p-4 border-l-4 border-orange-500 bg-gray-100 dark:bg-gray-800">
          <h3 className="text-lg font-semibold">Table of Contents</h3>
          <ul className="list-disc pl-6">
            {post.toc.map((item, index) => (
              <li key={index}><a href={`#${item.id}`} className="text-blue-500">{item.title}</a></li>
            ))}
          </ul>
        </div>
      )}

      {/* Blog Content */}
      <div className="mt-8">
        {post.content.map((section, index) => (
          <div key={index} id={section.id} className="mb-6">
            <h2 className="text-2xl font-semibold mt-4">{section.heading}</h2>
            <p className="mt-2 leading-relaxed">{section.text}</p>
            {section.code && (
              <div className="relative">
                <button 
                  className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-sm rounded"
                  onClick={() => navigator.clipboard.writeText(section.code)}
                >
                  <FaCopy /> Copy
                </button>
                <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                  <code className="language-javascript">{section.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Social Share Buttons */}
      <div className="flex gap-4 mt-6">
        <a href={`https://twitter.com/share?text=${post.title}&url=${window.location.href}`} target="_blank" className="text-blue-400"><FaTwitter size={24} /></a>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" className="text-blue-600"><FaLinkedin size={24} /></a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" className="text-blue-700"><FaFacebook size={24} /></a>
      </div>

      {/* Dark Mode Toggle */}
      <button onClick={() => setDarkMode(!darkMode)} className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-lg">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Comments Section */}
      <CommentsSection postId={post.id} />

      {/* Related Posts */}
      <RelatedPosts currentPostId={post.id} />
    </div>
  );
};

export default SingleBlogPost;
