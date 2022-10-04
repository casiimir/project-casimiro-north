import styles from "./index.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import Placeholder from '../../assets/placeholder.gif'

const CityCard = ({ data }) => {

  const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

  const { name, cover_image_url, activities_count, id } = data;
  const router = useRouter();
  const onBtnClick = () => {};
  const dispatch = useDispatch();

  const handleCityClick = () => {
    router.push(`city/${name}&=${id}`);
    dispatch({type: "SET_CITY", payload: []})
    dispatch({type: "SET_ACTIVITY_TOP_LIST", payload: []})
  };

  return (
    <div className={styles.CityCard}>
      {/* <img className={styles.Image} src={cover_image_url} alt="CityPhoto" /> */}
      <Image className={styles.Image} src={cover_image_url} alt="CityPhoto" layout="fill" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}/>
      <div onClick={handleCityClick} className={styles.overlay} />
      <div className={styles.Content}>
        <h3 className={styles.Text}>{name}</h3>

        <div className={styles.Row} />
        <p className={styles.Description}>{activities_count} Experiences</p>
      </div>
      {/* <FaRegHeart className={styles.Heart} onClick={onBtnClick} /> */}
    </div>
  );
};

export default CityCard;
