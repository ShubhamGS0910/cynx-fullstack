import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MenuItem from "./MenuItem";
import { menuItems } from "../../data/MenuData";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          {menuItems.map((item, idx) => (
            <MenuItem key={idx} {...item} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
