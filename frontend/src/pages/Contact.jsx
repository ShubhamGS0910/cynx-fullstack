import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ContactHero from "./contact/ContactHero";
import App from "../App";
import ContactForm from "./contact/ContactForm";
import ContactDetails from "./contact/ContactDetails";
import ChatSupport from "./contact/ChatSupport";

const Contact = () => {
  return (
    <App>
    <Navbar />
    <main className="flex-1 w-full flex flex-col items-center justify-center bg-red-950">
    <div className="w-full max-w-[1600px]">
          <section className="text-center bg-gray-900 text-white py-10">
            <ContactHero />
          </section>
          <section className=" text-center">
            <ContactForm />
          </section>
          <section className=" bg-gray-100">
            <ContactDetails />
          </section>
          <section className=" text-center">
            <ChatSupport /> 
          </section>
          <section className=" bg-gray-100 text-center">

          </section>
        </div>

  
    </main>
    <Footer />
  </App>
  );
};

export default Contact;
