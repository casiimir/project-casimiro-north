import styles from "./index.module.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import useFecth from "../../utils/useFetch/useFetch";
import { IMPORT_URL } from "../../utils/useFetch/URL";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const CityCard = ({ data }) => {
  // const [fav, setFav] = useState(false);

  const { name, cover_image_url, activities_count, id} = data;
  const dispatch = useDispatch()
  const router = useRouter();
  const onBtnClick = () => {};

  const handleCityClick = () => {
    console.log(id)
    // useFecth(IMPORT_URL.CITIES, id, dispatch, 'SET_CITY')
    router.push(`city/${name}&=${id}`)
  };

  return (
  
    <div  className={styles.CityCard}>
      <img
        className={styles.Image}
        src={cover_image_url}
        alt="CityPhoto"
      />
      <div onClick={handleCityClick} className={styles.overlay} />
      <div className={styles.Content}>
        <h3 className={styles.Text}>{name}</h3>

        <div className={styles.Row} />
        <p className={styles.Description}>{activities_count} Experiences</p>
      </div>
      <FaRegHeart className={styles.Heart} onClick={onBtnClick} />
      {/* <FaHeart/> */}
    </div>
  );
};

export default CityCard;
