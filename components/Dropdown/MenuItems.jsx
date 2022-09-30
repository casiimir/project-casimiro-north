import styles from "./index.module.scss";
import Dropdown from "./Dropdown";
import { useState } from "react";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  const closeDropdown = () => {
    return dropdown && setDropdown(false);
  };

  return (
    <li className={styles.menuItems} onClick={closeDropdown}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup={dropdown ? "true" : false}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
