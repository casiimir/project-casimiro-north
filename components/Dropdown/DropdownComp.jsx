
import styles from "./index.module.scss";
import { useState } from "react";
import {MdPlayArrow } from 'react-icons/md';
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function DropdownComp() {

  const [category, setCategory] = useState("Arts and Culture");

  const state = useSelector(state => state)

  console.log(state)

  const listItems = [
    {
      title: category,
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
    const router = useRouter();
    const {categoryname} = router.query

    return (
      <li className={styles.menuItems} onClick={closeDropdown}>
        {items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup={dropdown ? "true" : false}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {categoryname}<MdPlayArrow className={`${styles.arrow_menu} ${dropdown ? styles.active : ''}`}/>
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

    const router = useRouter();
    const {categoryname, cityname} = router.query



    const {activities} = useSelector(state => state);

    return (
      <ul className={`${styles.dropdown} ${dropdown && styles.show}`}>
        {activities?.activityTopList?.filter((item) => item.title != categoryname).map((submenu, index) => (
          <li
            key={index}
            className={styles.menuItems}
            style={dropdown ? { transitionDelay: `0.${index}s` } : {}}
            
          >
            <Link href={`/city/${cityname}/category/${submenu.title}`}>{submenu.title}</Link>
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