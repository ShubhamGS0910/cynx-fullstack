import { menuItems } from "../../data/MenuData";
import MenuItem from "./MenuItem";

const DesktopMenu = () => {
  return (
    <div className="flex space-x-6">
      {menuItems.map((item, idx) => (
        <MenuItem key={idx} {...item} />
      ))}
    </div>
  );
};

export default DesktopMenu;
