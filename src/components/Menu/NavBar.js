import { menuItemsConstants } from './MenuItemConstants';
import MenuItems from './MenuItems';
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItemsConstants.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;