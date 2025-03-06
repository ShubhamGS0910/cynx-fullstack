import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCopy, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaYoutube, FaWhatsapp } from "react-icons/fa";

const ContactDetails = () => {
  const officeAddress = "CYN-X HQ, Bangalore, India";
  const mapsLink = "https://www.google.com/maps/place/Gurukrupa+PG/@18.5851085,73.7515034,17z/data=!4m14!1m7!3m6!1s0x3bc2b9a0370a87a3:0x44e7f41e70ff75a1!2sGurukrupa+PG!8m2!3d18.5851034!4d73.7540783!16s%2Fg%2F11lcpwh0k9!3m5!1s0x3bc2b9a0370a87a3:0x44e7f41e70ff75a1!8m2!3d18.5851034!4d73.7540783!16s%2Fg%2F11lcpwh0k9?entry=ttu";
  const phoneNumber = "+91 7083942199";
  const whatsappNumber = "https://wa.me/917083942199";
  const emailAddresses = {
    business: "business@cynx.com",
    support: "support@cynx.com",
    careers: "careers@cynx.com",
  };

  const socialLinks = {
    linkedin: "https://linkedin.com/company/cyn-x",
    twitter: "https://twitter.com/cynx_official",
    instagram: "https://instagram.com/cynx.official",
    github: "https://github.com/ShubhamGS0910/cynx-fullstack",
    youtube: "https://youtube.com/cynx",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 py-12  px-6 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          📍 Get in Touch with <span className="text-blue-600">CYN-X</span>
        </h2>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column (Address & Google Maps) */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
              <FaMapMarkerAlt className="mr-2 text-red-500" /> Office Location
            </h3>
            <div className="mt-4">
              <iframe
                title="CYN-X Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62837.04386686997!2d73.7015034!3d18.5851085"
                className="w-full h-64 rounded-lg border border-gray-300 dark:border-gray-700 shadow-md"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition w-full text-center"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Right Column (Contact Details) */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            {/* Email Section */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
              <FaEnvelope className="mr-2 text-green-500" /> Contact Emails
            </h3>
            <div className="mt-4 space-y-2">
              {Object.entries(emailAddresses).map(([type, email]) => (
                <div key={type} className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 p-3 rounded-md">
                  <a href={`mailto:${email}`} className="text-blue-600 dark:text-blue-400">{email}</a>
                  <button onClick={() => copyToClipboard(email)} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
                    <FaCopy />
                  </button>
                </div>
              ))}
            </div>

            {/* Phone & WhatsApp Section */}
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white flex items-center">
              <FaPhone className="mr-2 text-blue-500" /> Phone & WhatsApp
            </h3>
            <div className="mt-4">
              <div className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 p-3 rounded-md">
                <a href={`tel:${phoneNumber}`} className="text-blue-600 dark:text-blue-400">{phoneNumber}</a>
                <button onClick={() => copyToClipboard(phoneNumber)} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
                  <FaCopy />
                </button>
              </div>
              <a
                href={whatsappNumber}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition w-full justify-center"
              >
                <FaWhatsapp className="mr-2" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            🕒 Business Hours
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (IST)
          </p>
          <p className="text-gray-700 dark:text-gray-300">🚀 Closed on Weekends & Public Holidays</p>
        </div>

        {/* Social Media */}
        <div className="mt-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
             Follow Us On
          </h3>
          <div className="flex justify-center space-x-10 mt-4">
            <a href={socialLinks.linkedin} className="text-blue-600 hover:text-blue-800"><FaLinkedin size={32} /></a>
            <a href={socialLinks.twitter} className="text-blue-400 hover:text-blue-600"><FaTwitter size={32} /></a>
            <a href={socialLinks.instagram} className="text-pink-500 hover:text-pink-700"><FaInstagram size={32} /></a>
            <a href={socialLinks.github} className="text-black hover:text-gray-800"><FaGithub size={32} /></a>
            <a href={socialLinks.youtube} className="text-red-600 hover:text-red-800"><FaYoutube size={32} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
