import styles from "./index.module.scss";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`${styles.dropdown} ${dropdown ? styles.show : ""}`}>
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

export default Dropdown;
