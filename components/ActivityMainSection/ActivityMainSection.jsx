import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET from "../../utils/GET/GET";
import { IMPORT_URL } from "../../utils/GET/URL";
import { FaRegHeart, FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
// import Carousel from '../components/Carousel';

const ActivityMainSection = () => {
  const { activities } = useSelector((state) => state);
  const router = useRouter();
  const dispatch = useDispatch();

  const { activityname } = router.query;

  return (
    <div className={styles.ActMainSection}>
      <p className={styles.Header}>
        Art in <b>Palermo</b>
      </p>
      <div className={styles.Act2List}>
        <h4 className={styles.SubHeader}> museum </h4>

        <div className={styles.ImageDiv}>
          <img
            className={styles.Image}
            src="https://picsum.photos/400/300"
            alt="ActImg"
          />
          <div className={styles.Times}>
            <p className={styles.Ttext}> 12:00-13:00</p>
          </div>
          <FaRegHeart className={styles.Heart} />
        </div>

        <div className={styles.Content}>
          <div className={styles.Pricing}>
            <p className={styles.Ptext}> Price:</p>
            <p className={styles.Price}> £12</p>
          </div>
          {/* <p> <Link href={"/activity"}/> </p> */}
          <div className={styles.Addz}>
            <p className={styles.More}> See more</p>
            <FaShoppingCart className={styles.Cart} />
          </div>
        </div>
      </div>
    </div>

    /* <p className={styles.description}>{activities.activityData.description}</p>
      <div className={styles.activitiesDiv}>
        <h3 className={styles.title}>Activities in {activities.activityData.title}</h3>
        <div className={styles.activitiesList}>
          {activities?.activityTopList?.map((data) => (
            <div className={styles.activity} key={data.id}>
              <a>{data.title}</a>
            </div>
          ))}

        </div>
      </div> */
  );
};

export default ActivityMainSection;
