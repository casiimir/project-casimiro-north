import styles from "./index.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const CityCard = ({ data }) => {

  const { name, cover_image_url, activities_count, id } = data;
  const router = useRouter();
  const onBtnClick = () => {};
  const dispatch = useDispatch();

  const handleCityClick = () => {
    console.log(id);
    router.push(`city/${name}&=${id}`);
    dispatch({type: "SET_CITY", payload: []})
  };

  return (
    <div className={styles.CityCard}>
      <img className={styles.Image} src={cover_image_url} alt="CityPhoto" />
      <div onClick={handleCityClick} className={styles.overlay} />
      <div className={styles.Content}>
        <h3 className={styles.Text}>{name}</h3>

        <div className={styles.Row} />
        <p className={styles.Description}>{activities_count} Experiences</p>
      </div>
      <FaRegHeart className={styles.Heart} onClick={onBtnClick} />
    </div>
  );
};

export default CityCard;
