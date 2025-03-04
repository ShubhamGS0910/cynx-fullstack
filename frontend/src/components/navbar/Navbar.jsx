import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MenuItem from "./MenuItem";
import { menuItems } from "../../data/MenuData";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full min-h-[40px] md:min-h-[50px] max-h-[60px] bg-white dark:bg-gray-900 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-15">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          
          CYN-X
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, idx) => (
            <MenuItem key={idx} {...item} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Full-Screen for better UX) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden flex flex-col items-center justify-center space-y-6`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-6 text-gray-700 dark:text-white"
          onClick={() => setMobileOpen(false)}
        >
          <X size={32} />
        </button>

        {/* Menu Items */}
        {menuItems.map((item, idx) => (
          <MenuItem key={idx} {...item} className="text-2xl" />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;