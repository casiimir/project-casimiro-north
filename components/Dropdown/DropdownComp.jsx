
import styles from "./index.module.scss";
import { useState } from "react";
import {MdPlayArrow } from 'react-icons/md';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function DropdownComp({heroRef}) {

  const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    const closeDropdown = () => dropdown && setDropdown(false);
    const router = useRouter();
    const {categoryname} = router.query

    return (
      <li className={styles.menuItems} onClick={closeDropdown}>
      
            <button
              type="button"
              aria-haspopup={dropdown ? "true" : false}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {categoryname?.split('&=')[0]}<MdPlayArrow className={`${styles.arrow_menu} ${dropdown ? styles.active : ''}`}/>
            </button>
            <Dropdown  dropdown={dropdown} />
        
      </li>
    );
  };

  const Dropdown = ({ dropdown }) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const {categoryname, cityname} = router.query

    const handleClickLink = (id) => {

      dispatch({type: "SET_INDEX_CAT", payload: id})
      dispatch({type: "SET_ACTIVITY_LIST", payload: {}})

      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: heroRef.current.offsetTop + heroRef.current.offsetHeight,
          behavior: 'smooth'
        })
      }
    }


    const {activities} = useSelector(state => state);

    return (
      <ul className={`${styles.dropdown} ${dropdown && styles.show}`}>
        {activities?.categoryList?.filter((item) => item.name != categoryname).map((submenu, index) => (
          <li
            key={index}
            className={styles.menuItems}
            style={dropdown ? { transitionDelay: `0.${index}s` } : {}}
            onClick={() => handleClickLink(index)}  
          >
            <Link scroll={false} href={`/city/${cityname}/category/${submenu.name}&=${submenu.code}`}>{submenu.name}</Link>
          </li>
        ))}
      </ul>
    );
  };
  
  const CatDiv = () => {

    return (
      <nav>
        <ul className={styles.menu}>    
            <MenuItems  /> 
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