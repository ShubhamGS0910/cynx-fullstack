import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import MenuItem from "./MenuItem";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          CYN-X
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-200">
          <MenuItem name="Home" path="/" />
          <MenuItem name="About Us" path="/about" />
          <MenuItem name="Services" dropdown={[
            { name: "Software Development", path: "/services/software" },
            { name: "Digital Marketing", path: "/services/digital", children: [
              { name: "Product Shoot", path: "/services/digital/product-shoot" },
              { name: "Branding", path: "/services/digital/branding" },
              { name: "Videography", path: "/services/digital/videography" },
              { name: "Photography", path: "/services/digital/photography" },
              { name: "Content Creation", path: "/services/digital/content" },
            ]},
            { name: "AI Solutions", path: "/services/ai" },
            { name: "Cloud & DevOps", path: "/services/cloud-devops" },
            { name: "UI / UX Design", path: "/services/ui-ux" },
            { name: "Art & Crafts", path: "/services/art", children: [
              { name: "Sketching", path: "/services/art/sketching" },
              { name: "Painting", path: "/services/art/painting" },
              { name: "Caricatures", path: "/services/art/caricatures" },
            ]},
          ]} />
          <MenuItem name="Products" dropdown={[
            { name: "Mobile Applications", path: "/products/mobile" },
            { name: "Web Applications", path: "/products/web" },
            { name: "Custom Software", path: "/products/custom" },
            { name: "Enterprise Applications", path: "/products/enterprise" },
          ]} />
          <MenuItem name="Industries" dropdown={[
            { name: "Healthcare", path: "/industries/healthcare" },
            { name: "Finance", path: "/industries/finance" },
            { name: "Retail", path: "/industries/retail" },
            { name: "Automotive", path: "/industries/automotive" },
            { name: "Logistics", path: "/industries/logistics" },
            { name: "E-Tech", path: "/industries/etech" },
            { name: "Art", path: "/industries/art" },
            { name: "Farming", path: "/industries/farming" },
          ]} />
          <MenuItem name="Blog" path="/blog" />
          <MenuItem name="Contact Us" path="/contact" />
        </ul>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-900 dark:text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-3">
          <ul className="flex flex-col space-y-4">
            <MenuItem name="Home" path="/" mobile />
            <MenuItem name="About Us" path="/about" mobile />
            <MenuItem name="Services" dropdown={[
              { name: "Software Development", path: "/services/software" },
              { name: "Digital Marketing", path: "/services/digital", children: [
                { name: "Product Shoot", path: "/services/digital/product-shoot" },
                { name: "Branding", path: "/services/digital/branding" },
                { name: "Videography", path: "/services/digital/videography" },
                { name: "Photography", path: "/services/digital/photography" },
                { name: "Content Creation", path: "/services/digital/content" },
              ]},
              { name: "AI Solutions", path: "/services/ai" },
              { name: "Cloud & DevOps", path: "/services/cloud-devops" },
              { name: "UI / UX Design", path: "/services/ui-ux" },
              { name: "Art & Crafts", path: "/services/art", children: [
                { name: "Sketching", path: "/services/art/sketching" },
                { name: "Painting", path: "/services/art/painting" },
                { name: "Caricatures", path: "/services/art/caricatures" },
              ]},
            ]} mobile />
            <MenuItem name="Products" dropdown={[
              { name: "Mobile Applications", path: "/products/mobile" },
              { name: "Web Applications", path: "/products/web" },
              { name: "Custom Software", path: "/products/custom" },
              { name: "Enterprise Applications", path: "/products/enterprise" },
            ]} mobile />
            <MenuItem name="Blog" path="/blog" mobile />
            <MenuItem name="Contact Us" path="/contact" mobile />
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
