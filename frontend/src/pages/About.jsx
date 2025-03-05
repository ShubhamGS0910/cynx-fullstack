import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import HeroSection from "./aboutus/HeroSection.jsx";
import App from "../App.jsx";

const About = () => {
  return (
    <App>
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1600px]">
          <section className="text-center bg-gray-900 text-white py-10">
            <HeroSection />
          </section>
          <section className="p-10 text-center">
            <h2 className="text-3xl font-bold text-orange-500">Who We Are</h2>
            <p className="mt-2 text-gray-600">
              CYN-X is a forward-thinking technology company dedicated to building cutting-edge digital solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              <div className="p-4 border rounded">🚀 Mission Statement</div>
              <div className="p-4 border rounded">💡 Core Values</div>
              <div className="p-4 border rounded">🌍 Vision for the Future</div>
            </div>
          </section>
          <section className="p-10 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-orange-500">What We Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-center">
              <div className="p-4 border rounded bg-white shadow">Software Development</div>
              <div className="p-4 border rounded bg-white shadow">Digital Marketing</div>
              <div className="p-4 border rounded bg-white shadow">AI & Cloud Solutions</div>
              <div className="p-4 border rounded bg-white shadow">UI/UX & Design</div>
            </div>
          </section>
          <section className="p-10 text-center">
            <h2 className="text-3xl font-bold text-orange-500">Our Journey</h2>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="p-4 border rounded bg-gray-100 shadow">2024 - CYN-X Founded</div>
              <div className="p-4 border rounded bg-gray-100 shadow">2025 - Launched first enterprise software</div>
              <div className="p-4 border rounded bg-gray-100 shadow">2026 - Expanded to AI solutions</div>
            </div>
          </section>
          <section className="p-10 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold text-orange-500">Meet Our Team</h2>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="p-4 border rounded bg-white shadow">🎯 Christol - Founder & CEO</div>
              <div className="p-4 border rounded bg-white shadow">🌟 Other Team Members</div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </App>
  );
};

export default About;