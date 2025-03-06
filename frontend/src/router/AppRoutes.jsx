import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Services from "../pages/Services.jsx";
import Blog from "../pages/Blog.jsx";
import Industries from "../pages/Industries.jsx";
import SingleBlogPost from "../pages/blog/SingleBlogPost.jsx";

const AppRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/software-development" element={<Services />} />
        
        {/* <Route path="/" element={<BlogList />} /> */}
        <Route path="/blog/:id" element={<SingleBlogPost />} />

      </Routes>

      {/* Footer */}
    </div>
  );
};

export default AppRoutes;
