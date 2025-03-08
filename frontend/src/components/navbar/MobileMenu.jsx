import { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram , FaWhatsapp} from "react-icons/fa";
import { menuItems } from "../../data/MenuData";

const MobileMenu = ({ closeMenu }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderMenu = (items, parentKey = "") => {
    return items.map((item, idx) => {
      const currentKey = `${parentKey}-${idx}`;
      return (
        <div key={currentKey} className="group">
          <div className="flex justify-between items-center px-4 py-3 text-lg font-medium 
            text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 
            rounded-md shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700">
            
            <Link
              to={item.path || "#"}
              className="flex-1 transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => {
                if (!item.submenus) closeMenu();
              }}
            >
              {item.title}
            </Link>

            {item.submenus && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu(currentKey);
                }}
                className="ml-2 text-gray-600 dark:text-gray-400 transition-all duration-300 
                  transform group-hover:scale-110"
              >
                {openMenus[currentKey] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            )}
          </div>

          {item.submenus && openMenus[currentKey] && (
            <div className="pl-6 mt-2 space-y-2">{renderMenu(item.submenus, currentKey)}</div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={closeMenu} />

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-72 bg-white/90 dark:bg-gray-900/90 
        shadow-xl transform transition-transform duration-300 ease-in-out translate-x-0 
        backdrop-blur-md z-50 flex flex-col border-l border-gray-200 dark:border-gray-700">

        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-300 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <img
              src="/assets/X-Logo.png" // Update with actual logo
              alt="Company Logo" 
              className="w-10 h-10 rounded-full shadow-md"
            />
            <span className="text-xl font-semibold text-gray-800 dark:text-orange-500  tracking-wide">
              CYN-X
            </span>
          </div>

          {/* Close Button */}
          <button
            className="text-gray-700 dark:text-white transition-transform transform hover:rotate-90"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-grow overflow-y-auto space-y-4 px-4 py-5">{renderMenu(menuItems)}</div>

        {/* Footer */}
        <div className="mt-auto py-4 border-t border-gray-300 dark:border-gray-700">
        <div className="flex justify-center space-x-4 mb-3">
            {[
            { icon: FaFacebook, color: "hover:text-blue-500", link: "https://www.facebook.com/cynx.official" },
            { icon: FaTwitter, color: "hover:text-blue-400", link: "https://twitter.com/cynx_official" },
            { icon: FaLinkedin, color: "hover:text-blue-700", link: "https://www.linkedin.com/company/cynx-tech" },
            { icon: FaInstagram, color: "hover:text-pink-500", link: "https://www.instagram.com/cynx.official" },
            { icon: FaWhatsapp, color: "hover:text-pink-500", link: "https://wa.me/7083942199" },
            ].map((social, index) => (
            <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-gray-600 dark:text-gray-400 transition-transform transform hover:scale-110 ${social.color}`}
            >
                <social.icon size={22} />
            </a>
            ))}
        </div>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} CYN-X. All rights reserved.
        </p>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
