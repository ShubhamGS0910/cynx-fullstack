import { useState } from "react";
import { ChevronDown, PlayCircle, Calendar, MessageCircle } from "lucide-react";

const CTAButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        Get Started
        <ChevronDown className="w-5 h-4" />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="text-gray-800 dark:text-white">
            <li className="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 flex items-center gap-2 cursor-pointer">
              <PlayCircle className="w-5 h-5 text-blue-500" />
              Start Free Trial
            </li>
            <li className="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 flex items-center gap-2 cursor-pointer">
              <Calendar className="w-5 h-5 text-green-500" />
              Book Demo
            </li>
            <li className="hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 flex items-center gap-2 cursor-pointer">
              <MessageCircle className="w-5 h-5 text-purple-500" />
              Let's Connect
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CTAButton;
