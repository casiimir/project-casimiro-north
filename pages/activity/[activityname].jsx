import styles from "./activity.module.scss";
import { useRouter } from "next/router";
import Hero from "../../components/Hero/Hero";
import ActivityMainSection from "../../components/ActivityMainSection/ActivityMainSection";
import { useEffect } from "react";
import GET from "../../utils/GET/GET";
import { IMPORT_URL } from "../../utils/GET/URL";
import { useDispatch, useSelector } from "react-redux";

export default function ActivityPage() {
  const router = useRouter();
  const { activityname } = router.query;
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => {
    cityname?.split("&=")[1] &&
      GET(
        IMPORT_URL.ACTIVITIES,
        cityname?.split("&=")[1],
        dispatch,
        "SET_CITY"
      );
  }, [cityname?.split("&=")[1]]);

  return (
    <div className={styles.Activity}>
      <Hero type="ActivityPage" />
      <ActivityMainSection />
    </div>
  );
}
