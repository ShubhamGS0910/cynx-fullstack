import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const MenuItem = ({ name, path, dropdown, mobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});

  // Handle hover for desktop
  const handleMouseEnter = () => {
    if (!mobile) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!mobile) setIsOpen(false);
  };

  // Toggle main dropdown (for mobile mode)
  const toggleDropdown = () => {
    if (mobile) setIsOpen(!isOpen);
  };

  // Toggle submenus (nested dropdowns)
  const toggleSubMenu = (index) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <li
      className={`relative group ${mobile ? "w-full" : "inline-block"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {dropdown ? (
        <>
          {/* Main Dropdown Button */}
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full px-4 py-2 text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 md:cursor-pointer"
          >
            {name}
            <FaChevronDown className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          <ul
            className={`absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-opacity duration-300 z-50 ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            } md:group-hover:opacity-100 md:group-hover:visible md:block md:absolute md:mt-0 md:min-w-[200px]`}
          >
            {dropdown.map((item, index) => (
              <li key={index} className="relative group">
                {item.children ? (
                  <>
                    {/* Parent Dropdown Item with Nested Menu */}
                    <button
                      onClick={() => toggleSubMenu(index)}
                      className="flex items-center justify-between w-full px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {item.name}
                      <FaChevronDown className={`ml-2 transition-transform ${subMenuOpen[index] ? "rotate-180" : ""}`} />
                    </button>

                    {/* Nested Submenu */}
                    <ul
                      className={`absolute left-full top-0 mt-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg min-w-[180px] transition-all duration-300 z-50 
                        ${subMenuOpen[index] ? "block" : "hidden"} 
                        md:group-hover:block md:group-hover:opacity-100 md:group-hover:visible`}
                    >
                      {item.children.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          to={path}
          className="block px-4 py-2 text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400"
        >
          {name}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
