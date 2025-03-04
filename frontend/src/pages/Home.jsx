import CTAButton from "../components/ctaction/CTAButton";
import HeroSection from "./home/HeroSection";
import hsBG from "../assets/HomeHS.jpg";
import FeaturedPS from "./home/FeaturedPS";
import Badges from "./home/Badges";
import Partners from "./home/Partners";
import LatestNews from "./home/LatestNews";
import Testimonials from "./home/Testmonials";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <div className="w-max  bg-white shadow-lg rounded-lg">
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="container mx-auto  py-16 text-center bg-blue-900 ">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Welcome to <span className="text-orange-500">CYN-X</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 pb-20">
            Innovating the future with high-tech solutions.
          </p>
        </div>
        <img src={hsBG} alt="HS BG" className="w-full" />
      </section>

      <FeaturedPS />
      <Badges />
      <Partners />
      <LatestNews />
      <Testimonials />
      {/* Call-to-Action Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-6 bg-gray-100 dark:bg-gray-900 py-20 px-6">
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            Ready to transform your business?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Let’s build something extraordinary together. Take the next step now.
          </p>
        </div>
        <div className="flex justify-center">
          <CTAButton />
        </div>
      </section>
    </div>
    </div>
  );
};

export default Home;
