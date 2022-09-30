import styles from "./index.module.scss";
import { listItems } from "./listItems";
import MenuItems from "./MenuItems.jsx";

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

export default CatDiv;
