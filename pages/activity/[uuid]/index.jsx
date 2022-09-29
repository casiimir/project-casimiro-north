import styles from "./activity.module.scss";
import { useRouter } from "next/router";
import Hero from "../../../components/Hero/Hero";
import ActivityMainSection from "../../../components/ActivityMainSection/ActivityMainSection";
import { useEffect } from "react";
import GET from "../../../utils/GET/GET";
import { IMPORT_URL } from "../../../utils/GET/URL";
import { useDispatch, useSelector } from "react-redux";

export default function ActivityPage() {
  const router = useRouter();
  const { uuid } = router.query;
  const dispatch = useDispatch();
  const {activities} = useSelector((state) => state);

  // OGGETTO DELL'ATTIVITA' VVVVV
  console.log(activities.activityData) 
 
  useEffect(() => {
    uuid &&
      GET(
        IMPORT_URL.ACTIVITIES,
        `/${uuid}`,
        dispatch,
        "SET_ACTIVITY"
      );
  }, [uuid]);

  return (
    <div className={styles.Activity}>
      <Hero type="ActivityPage" />
      <ActivityMainSection />
    </div>
  );
}
