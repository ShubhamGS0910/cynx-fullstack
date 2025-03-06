import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import HeroSection from "./aboutus/HeroSection.jsx";
import App from "../App.jsx";
import WhoWeAre from "./aboutus/WhoWeAre.jsx";
import WhatWeDo from "./aboutus/WhatWeDo.jsx";
import JourneyTimeline from "./aboutus/JourneyTimeline.jsx";
import MeetOurTeam from "./aboutus/MeetOurTeam.jsx";

const About = () => {
  return (
    <App>
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center justify-center bg-blue-950">
        <div className="w-full max-w-[1600px]">
          <section className="text-center bg-gray-900 text-white py-10">
            <HeroSection />
          </section>
          <section className=" text-center">
            <WhoWeAre />
          </section>
          <section className=" bg-gray-100">
           <WhatWeDo />
          </section>
          <section className=" text-center">
            <JourneyTimeline />
          </section>
          <section className=" bg-gray-100 text-center">
            <MeetOurTeam />
          </section>
        </div>
      </main>
      <Footer />
    </App>
  );
};

export default About;