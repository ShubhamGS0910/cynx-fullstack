import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          CYN-X
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <DesktopMenu />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 dark:text-white"
          onClick={() => setMobileOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && <MobileMenu closeMenu={() => setMobileOpen(false)} />}
    </nav>
  );
};

export default Navbar;
