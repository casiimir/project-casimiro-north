import styles from "./index.module.scss";
import ItemCardList from "../../components/ItemCardList";
import { useRouter } from "next/router";
import { useEffect } from "react";
import GET from "../../utils/GET/GET";
import { IMPORT_URL } from "../../utils/GET/URL";
import { useDispatch, useSelector } from "react-redux";

export default function Favorites() {
  const router = useRouter();
  const { uuid } = router.query;
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state);

  console.log(activities.activityData);

  useEffect(() => {
    uuid && GET(IMPORT_URL.ACTIVITIES, `/${uuid}`, dispatch, "SET_ACTIVITY");
  }, [uuid]);

  return (
    <div className={styles.Favorites}>
    <div className={styles.titleContainer}>
      <h2 className={styles.FavoritesTitle}>FAVORITES</h2>
      <span className={styles.LineTitle}></span></div>
      <ItemCardList />
    </div>
  );
}
