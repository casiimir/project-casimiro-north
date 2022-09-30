import styles from "./activity.module.scss";
import { useRouter } from "next/router";
import { BsCart } from "react-icons/bs";
import Hero from "../../../components/Hero/Hero";
// import ActivityMainSection from "../../../components/ActivityMainSection/ActivityMainSection";
import { useEffect } from "react";
import GET from "../../../utils/GET/GET";
import { IMPORT_URL } from "../../../utils/GET/URL";
import { useDispatch, useSelector } from "react-redux";
import { icons } from "react-icons/lib";

export default function ActivityPage() {
  const router = useRouter();
  const { uuid } = router.query;
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state);

  // OGGETTO DELL'ATTIVITA' VVVVV
  console.log(activities.activityData);

  useEffect(() => {
    uuid && GET(IMPORT_URL.ACTIVITIES, `/${uuid}`, dispatch, "SET_ACTIVITY");
  }, [uuid]);

  return (
    <div className={styles.Activity}>
      <Hero type="ActivityPage" />
      {/* <ActivityMainSection /> */}
      <div className={styles.activityMainSection}>
        <h1 className={styles.activityTitle}>
          {activities.activityData.title}
        </h1>
        <p className={styles.activityDescription}>
          {activities.activityData.about}
        </p>
        <div className={styles.activityPriceInfo}>
          <span className={styles.activityPriceTitle}>PRICE</span>
          <span className={styles.activityPriceValue}>
            {/* {activities.activityData.retail_price.formatted_value} */}
          </span>
        </div>
        <div className={styles.cartIconDiv}>
          <BsCart className={styles.cartIcon} />
        </div>

        <div className={styles.activityInfo}>
          <h2 className={styles.activityInfoTitle}>TIMETABLE</h2>
          <div className={styles.activityInfoTimetable}>
            {activities.activityData.when_text} <br />
            {activities.activityData.where_text}
          </div>
        </div>
      </div>
    </div>
  );
}
