import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET from "../../utils/GET/GET";
import { IMPORT_URL } from "../../utils/GET/URL";
import ActivitySwiper from "../ActivitySwiper/ActivitySwiper";
import styles from "./index.module.scss";

const CityMainSection = () => {
  const { cities, activities } = useSelector((state) => state);
  const router = useRouter();
  const dispatch = useDispatch();

  const { cityname } = router.query;

  useEffect(() => {
    cityname?.split("&=")[1] &&
      GET(
        IMPORT_URL.CITIES,
        `${cityname?.split("&=")[1]}/lists?limit=10`,
        dispatch,
        "SET_ACTIVITY_TOP_LIST"
      );
  }, [cityname, dispatch]);

  console.log(activities)

  return (
    <div className={styles.CityMainSection}>
      <p className={styles.description}>{cities.cityData.content}</p>
      <div className={styles.activitiesDiv}>
        <h3 className={styles.title}>Activities in {cities.cityData.name}</h3>
        <div className={styles.activitiesList}>
          {!activities.activityTopList.message ? 
          
          activities?.activityTopList?.map((data) => (
            <div className={styles.activity} key={data.id}>
              <Link href={`${cityname}/category/${data.title}`}><a className={styles.categorylink}>{data.title}</a></Link>
            </div> 
          ))
          
          : <div className={styles.activity}>
          <a>No Activities!</a>
        </div> 
        }
        </div>
      </div>
      <ActivitySwiper />
    </div>
  );
};

export default CityMainSection;
