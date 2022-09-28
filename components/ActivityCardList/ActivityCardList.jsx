import styles from "./index.module.scss";
import ActivityCard from "../ActivityCard/ActivityCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../utils/useFetch/useFetch";
import { IMPORT_URL } from "../../utils/useFetch/URL";

const ActivityCardList = () => {
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state);
  useEffect(() => {
    useFetch(IMPORT_URL.ACTIVITIES, "", dispatch, "SET_ACTIVITY_LIST");
  }, []);

  return (
    <div className={styles.ActivityCardList}>
      <h2 className={styles.Title}>Top Activities</h2>
      <div className={styles.Sublist}>
        {activities.activityList.map((activity, index) => (
          <ActivityCard catData={activity} key={index} />
        ))}
        {/* <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard /> */}
      </div>
    </div>
  );
};

export default ActivityCardList;
