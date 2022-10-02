import styles from "./activity.module.scss";
import { useRouter } from "next/router";
import { BsCart } from "react-icons/bs";
import Hero from "../../../components/Hero/Hero";
// import ActivityMainSection from "../../../components/ActivityMainSection/ActivityMainSection";
import { useEffect } from "react";
import GET from "../../../utils/GET/GET";
import { IMPORT_URL } from "../../../utils/GET/URL";
import { useDispatch, useSelector } from "react-redux";

export default function ActivityPage() {
  const router = useRouter();
  const { uuid } = router.query;
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state);

  const handleOnCartClick = () => {
    dispatch({type: "SET_TRUE"})
    dispatch({type: "ADD_PRODUCT", payload: activities.activityData})
  }

  useEffect(() => {
    uuid && GET(IMPORT_URL.ACTIVITIES, `/${uuid}`, dispatch, "SET_ACTIVITY");
  }, [uuid, dispatch]);

  return (
    <div className={styles.Activity}>

      <Hero type="SingleActivity" />
      <div className={styles.activityMainSection}>
        {/* <h1 className={styles.activityTitle}>
          {activities.activityData.title}
        </h1> */}
        <p className={styles.activityDescription}>
          {activities.activityData.about}
        </p>
        <div className={styles.activityPriceInfo}>
          <span className={styles.activityPriceTitle}>PRICE</span>
          <span className={styles.activityPriceValue}>
            {activities?.activityData?.retail_price?.formatted_value}
          </span>
        </div>
        <div className={styles.cartIconDiv}>
          <BsCart onClick={handleOnCartClick} className={styles.cartIcon} />
        </div>

        <div className={styles.activityInfo}>
          <h2 className={styles.activityInfoTitle}>TIMETABLE</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: activities?.activityData?.when_text,
            }}
            className={styles.activityInfoTimetable}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: activities?.activityData?.where_text,
            }}
            className={styles.activityInfoTimetable}
          />
        </div>
      </div>
    </div>
  );
}
