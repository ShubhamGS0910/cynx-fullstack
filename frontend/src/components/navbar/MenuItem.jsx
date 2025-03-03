import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MenuItem = ({ title, path, icon: Icon, submenus }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group">
      <Link
        to={path || "#"}
        className="flex items-center gap-2 px-4 py-2 hover:text-orange-500 transition"
        onClick={(e) => submenus && e.preventDefault()} 
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {Icon && <Icon size={18} />}
        {title}
        {submenus && <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />}
      </Link>

      {submenus && open && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {submenus.map((submenu, idx) => (
            <SubMenuItem key={idx} {...submenu} />
          ))}
        </div>
      )}
    </div>
  );
};

const SubMenuItem = ({ title, path, submenus }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group">
      <Link
        to={path || "#"}
        className="flex justify-between px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        onClick={(e) => submenus && e.preventDefault()}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {title}
        {submenus && <ChevronRight size={14} />}
      </Link>

      {submenus && open && (
        <div
          className="absolute left-full top-0 mt-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {submenus.map((submenu, idx) => (
            <Link
              key={idx}
              to={submenu.path}
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {submenu.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
