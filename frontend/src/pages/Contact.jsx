import React from "react";

const Contact = () => {
  return (
    
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Heading Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Contact <span className="text-orange-500">CYN-X</span>
        </h1>
        <p className="text-center text-lg text-gray-300 mb-10">
          Innovation | Creativity | Sustainability
        </p>

        {/* Sections */}
        <div className="space-y-12">
          {/* Software Development */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-orange-400">
              Software Development
            </h2>
            <p className="text-gray-300 mt-2">
              We specialize in **building high-quality** and **scalable** mobile
              and web applications.
            </p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>✅ Mobile App Development (Android & iOS)</li>
              <li>✅ Web App Development (Full-stack solutions)</li>
              <li>✅ Custom Software Development</li>
              <li>✅ UI/UX Design</li>
            </ul>
          </div>

          {/* Artistic Creations */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-orange-400">
              Artistic Creations
            </h2>
            <p className="text-gray-300 mt-2">
              We craft **handmade and digital sketches** for art lovers
              worldwide.
            </p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>🎨 Custom Portraits & Digital Sketches</li>
              <li>🎨 Art for Home & Office Décor</li>
              <li>🎨 Worldwide Shipping</li>
            </ul>
          </div>

          {/* Organic Farming */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-orange-400">
              Organic Farming
            </h2>
            <p className="text-gray-300 mt-2">
              Our organic farming ensures **chemical-free, sustainable products**.
            </p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>🌿 Fresh & Organic Produce</li>
              <li>🌿 Eco-Friendly Farming Practices</li>
              <li>🌿 Locally Sourced, Globally Delivered</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-orange-400">
            Why Choose CYN-X?
          </h2>
          <ul className="mt-6 space-y-2 text-center text-gray-300">
            <li>✔ Innovation-Driven Solutions</li>
            <li>✔ Quality & Excellence</li>
            <li>✔ Global Reach</li>
            <li>✔ Sustainability-Focused</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-orange-400">Let's Connect</h2>
          <p className="text-gray-400 mt-2">📧 Email: your@email.com</p>
          <p className="text-gray-400">📍 Location: Your Address</p>
          <p className="text-gray-400">🌐 Website: www.yourwebsite.com</p>
        </div>
      </div>
    </div>

   
  );
};

export default Contact;
