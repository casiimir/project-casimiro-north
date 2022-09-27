import styles from "./index.module.scss";
import CityCard from "../CityCard/CityCard";

const CityCardList = () => {
  return (
    <div className={styles.Footer}>
      <CityCard />
    </div>
  );
};

export default CityCardList;
