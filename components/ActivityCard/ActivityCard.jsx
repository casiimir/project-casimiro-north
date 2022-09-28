import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const ActivityCard = ({catData}) => {
  const { cover_image_url, id,  title, uuid } = catData;
  const router = useRouter();
  const handleActivityClick = () => {
    console.log(id);
    // useFecth(IMPORT_URL.CITIES, id, dispatch, 'SET_CITY')
    // router.push(`city/${name}&=${id}`);
    router.push(`activity/${uuid}`);
  };
  return (
    <div className={styles.ActivityCard}>
      <img className={styles.img} src={cover_image_url} alt="Activity photo" />
      <div onClick={handleActivityClick} className={styles.overlay} />
      <h5 className={styles.title}>{title}</h5>
    </div>
  );
};

export default ActivityCard;
