import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const ActivityCard = (catData) => {
  const { name, code, cover_image_url, event_image_url, id, url } = catData;
  const router = useRouter();
  const handleActivityClick = () => {
    console.log(id);
    // useFecth(IMPORT_URL.CITIES, id, dispatch, 'SET_CITY')
    // router.push(`city/${name}&=${id}`);
    router.push(`activity/${url}-${id}`);
  };
  return (
    <div className={styles.ActivityCard}>
      <img className={styles.img} src={cover_image_url} alt="Activity photo" />
      <div onClick={handleActivityClick} className={styles.overlay} />
      <h5 className={styles.title}>{name}</h5>
    </div>
  );
};

export default ActivityCard;
