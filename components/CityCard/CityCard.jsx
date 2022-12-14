import styles from "./index.module.scss";

import { memo } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { toBase64, shimmer } from "../../utils/shimmer";

const CityCard = ({ data }) => {

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
      <Image className={styles.Image} src={cover_image_url} alt="CityPhoto" layout="fill" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}/>
      <div onClick={handleCityClick} className={styles.overlay} />
      <div className={styles.Content}>
        <h3 className={styles.Text}>{name}</h3>

        <div className={styles.Row} />
        <p className={styles.Description}>{activities_count} Experiences</p>
      </div>
    </div>
  );
};

export default memo(CityCard);
