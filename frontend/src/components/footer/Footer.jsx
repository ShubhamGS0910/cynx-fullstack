import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import X3D from "../ctaction/X3D";

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-gray-300 py-16 px-6 md:px-12">
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-transparent"></div>

      {/* Footer Sections */}
      <div className="relative container mx-auto border-b border-gray-700 pb-12">
        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-base">
          {/* Left Section - Company Info */}
          <div className="flex flex-col space-y-5 md:items-start items-center text-center md:text-left">
            <h3 className="text-xl font-semibold text-orange-500">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-orange-400 transition">About Us</a></li>
              <li><a href="/services" className="hover:text-orange-400 transition">Services</a></li>
              <li><a href="/products" className="hover:text-orange-400 transition">Products</a></li>
              <li><a href="/resources" className="hover:text-orange-400 transition">Resources</a></li>
            </ul>
          </div>

          {/* Center Section - Logo & Social Media */}
          <div className="flex flex-col items-center text-center">
            <X3D />
            <p className="text-gray-400 max-w-sm text-lg mt-3">
              Innovation meets technology. Crafting the future, one solution at a time.
            </p>
            <div className="flex space-x-6 mt-4">
              {[
                { icon: FaFacebookF, link: "#" },
                { icon: FaLinkedinIn, link: "#" },
                { icon: FaTwitter, link: "#" },
                { icon: FaInstagram, link: "#" },
                { icon: FaGithub, link: "#" },
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  className="text-gray-400 hover:text-orange-500 transition duration-300 transform hover:scale-125"
                >
                  {<social.icon size={24} />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Support & Legal */}
          <div className="flex flex-col space-y-5 md:items-end items-center text-center md:text-right">
            <h3 className="text-xl font-semibold text-orange-500">Support & Legal</h3>
            <ul className="space-y-2">
              <li><a href="/support" className="hover:text-orange-400 transition">Support</a></li>
              <li><a href="/legal" className="hover:text-orange-400 transition">Legal</a></li>
              <li><a href="/contact" className="hover:text-orange-400 transition">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section - Below the 3 Columns */}
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-lg px-6 py-8 bg-gray-900 rounded-lg shadow-lg text-center">
            <h4 className="text-2xl font-semibold text-orange-500">Stay Updated</h4>
            <p className="text-gray-300 mt-2 text-sm">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="relative mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 px-4 pr-36 bg-gray-800 text-white rounded-lg outline-none placeholder-gray-400 focus:ring-2 focus:ring-orange-500 transition-all"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 px-5 py-2 rounded-lg text-white font-medium hover:bg-orange-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="relative text-center text-sm text-gray-500 mt-10">
        <span>© 2025 CYN-X. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
