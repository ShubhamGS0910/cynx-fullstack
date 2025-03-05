import CTAButton from "../components/ctaction/CTAButton";
import HeroSection from "./home/HeroSection";
import hsBG from "../assets/HomeHS.jpg";
import FeaturedPS from "./home/FeaturedPS";
import Badges from "./home/Badges";
import Partners from "./home/Partners";
import LatestNews from "./home/LatestNews";
import Testimonials from "./home/Testmonials";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import App from "../App";

const Home = () => {
  return (
    <App>
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center justify-center bg-red-950">
    
      <div className="w-full max-w-[1490px] ">
          <HeroSection />
          <section className="py-16 text-center bg-blue-900 px-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Welcome to <span className="text-orange-500">CYN-X</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Innovating the future with high-tech solutions.
            </p>
            <img src={hsBG} alt="Hero Background" className="w-full mt-6" />
          </section>
          <FeaturedPS />
          <Badges />
          <Partners />
          <LatestNews />
          <Testimonials />
          <section className="flex flex-col md:flex-row justify-between items-center bg-gray-100 dark:bg-gray-800 py-20 px-6">
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Ready to transform your business?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Let’s build something extraordinary together. Take the next step now.
              </p>
            </div>
            <CTAButton />
          </section>
        </div>
      </main>
      <Footer />
    </App>
  );
};

export default Home;