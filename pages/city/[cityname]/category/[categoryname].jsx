import styles from "./category.module.scss";
import ActivityCardList from "../../../../components/ActivityCardList/ActivityCardList";
import DropdownComp from "../../../../components/Dropdown/DropdownComp";
import Hero from "../../../../components/Hero/Hero";

export default function CategoryPage() {
  return (
    <div className={styles.CategoryPage}>
      <Hero type="ActivityPage" />
      
      <ActivityCardList />
    </div>
  );
}
