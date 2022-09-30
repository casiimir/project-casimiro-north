
import styles from "./index.module.scss";
import { useState } from "react";
export default function DropdownComp() {
  const listItems = [
    {
      title: "Arts and Culture",
      submenu: [
        {
          title: "Sightseeing",
        },
        {
          title: "Food and Wine",
        },
        {
          title: "Entertainment",
        },
        {
          title: "Sports",
        },
        {
          title: "Adventure",
        },
        {
          title: "Nightlife",
        },
      ],
    },
  ];
  const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    const closeDropdown = () => dropdown && setDropdown(false);

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

  const Dropdown = ({ submenus, dropdown }) => {
    return (
      <ul className={`${styles.dropdown} ${dropdown && styles.show}`}>
        {submenus.map((submenu, index) => (
          <li
            key={index}
            className={styles.menuItems}
            style={{ transitionDelay: `0.${index * 2}s` }}
          >
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    );
  };
  const CatDiv = () => {
    return (
      <nav>
        <ul className={styles.menu}>
          {listItems.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
        </ul>
      </nav>
    );
  };
  return (
    <div className={styles.Main}>
      <CatDiv />
    </div>
  );
}