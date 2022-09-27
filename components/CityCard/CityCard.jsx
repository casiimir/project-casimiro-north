import styles from "./index.module.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const CityCard = ({ data }) => {
  const [fav, setFav] = useState();
  const onBtnclick = () => {};
  return (
    <div className={styles.CityCard}>
      <img
        className={styles.Image}
        src="https://picsum.photos/200/300"
        alt="CityPhoto"
      />
      <div className={styles.Content}>
        <h3 className={styles.Text}>Nomi</h3>
        {/* <div>
          <span>_____</span>
        </div> */}
        <p className={styles.Description}>Cose</p>
      </div>

      <button className={styles.Button} onClick={onBtnclick}>
        <FaRegHeart />
      </button>
    </div>
  );
};

export default CityCard;
