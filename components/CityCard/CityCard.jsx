import styles from "./index.module.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const CityCard = ({ data }) => {
  const [fav, setFav] = useState(false);
  const onBtnClick = () => {};
  return (
  
    <div className={styles.CityCard}>
      <img
        className={styles.Image}
        src="https://picsum.photos/200/300"
        alt="CityPhoto"
      />
      <div className={styles.Content}>
        <h3 className={styles.Text}>Pisa</h3>

        <div className={styles.Row} />
        <p className={styles.Description}>365 Experiences</p>
      </div>
      <FaRegHeart className={styles.Heart} onClick={onBtnClick} />
      {/* <FaHeart/> */}
    </div>
  );
};

export default CityCard;
