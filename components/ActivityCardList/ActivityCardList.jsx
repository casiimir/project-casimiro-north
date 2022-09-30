import styles from "./index.module.scss";
import ActivityCard from "../ActivityCard/ActivityCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET from "../../utils/GET/GET";
import { IMPORT_URL } from "../../utils/GET/URL";
import { useRouter } from "next/router";

const ActivityCardList = () => {
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state);

  const router = useRouter();

  const {cityname, categoryname} = router.query

  useEffect(() => {
    // if (cityname) {
    //   GET(IMPORT_URL.ACTIVITIES, `${cityname.split('&=')[1]}`, dispatch, "SET_ACTIVITY_LIST");
    // } 
    // else {
        GET(IMPORT_URL.ACTIVITIES, "", dispatch, "SET_ACTIVITY_LIST");
    // }
  }, [cityname, dispatch]);

  return (
    <div className={styles.ActivityCardList}>
      <h2 className={!cityname ? styles.Title : styles.Title_cat_page}>{
      !cityname 
      ? "Top Activities" 
      : <>
          <span>{categoryname} in </span> 
          <span>{cityname.split('&=')[0]}</span>
        </>
        }
      </h2>
      <div className={!cityname ? styles.Sublist : styles.Sublist_cat_page}>
        {activities?.activityList?.data?.filter((item) => item?.cover_image_url).filter((_, index) => index <= 5).map((activity, index) => (
          
            <ActivityCard catData={activity} key={index} />
          
        ))}
      </div>
    </div>
  );
};

export default ActivityCardList;
