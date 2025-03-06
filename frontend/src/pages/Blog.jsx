import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import BlogHero from "../pages/blog/BlogHero";
import BCategories from "../pages/blog/BCategories";
import App from "../App";
import BlogCardView from "./blog/BlogCardView";
import SingleBlogPost from "./blog/SingleBlogPost";

const Blog = () => {
  return (
  <App>
    <Navbar />
    <main className="flex-1 w-full flex flex-col items-center justify-center bg-red-950">
    <div className="w-full max-w-[1600px]">
          <section className="text-center bg-gray-900 text-white py-10">
            <BlogHero />
          </section>
          <section className=" text-center">
            <BCategories />
          </section>
          <section className=" bg-gray-100">
            <BlogCardView />
          </section>
          <section className=" text-center">
            <SingleBlogPost />
          </section>
          <section className=" bg-gray-100 text-center">

          </section>
        </div>

  
    </main>
    <Footer />
  </App>
    );
};

export default Blog;
