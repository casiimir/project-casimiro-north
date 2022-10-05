import styles from "./activity.module.scss";
import { useRouter } from "next/router";
import { BiMapAlt } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineFieldTime } from "react-icons/ai";
import Hero from "../../../components/Hero/Hero";
import Carousel from "../../../components/Carousel";
// import ActivityMainSection from "../../../components/ActivityMainSection/ActivityMainSection";
import { useEffect } from "react";
import GET from "../../../utils/GET/GET";
import { IMPORT_URL } from "../../../utils/GET/URL";
import { useDispatch, useSelector } from "react-redux";
import { languages } from "../../../utils/mook";

export default function ActivityPage() {
  const router = useRouter();
  const { uuid } = router.query;
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state);

  const handleOnCartClick = () => {
    dispatch({ type: "SET_TRUE" });
    dispatch({ type: "ADD_PRODUCT", payload: activities.activityData });
  };

  useEffect(() => {
    uuid && GET(IMPORT_URL.ACTIVITIES, `/${uuid}`, dispatch, "SET_ACTIVITY");
  }, [uuid, dispatch]);

  return (
    <div className={styles.Activity}>
      <Hero type="SingleActivity" />
      <div className={styles.activityMainSection}>
        <div className={styles.activityDescriptionDiv}>
          <p className={styles.activityDescription}>
            {activities?.activityData?.description}
          </p>
          <div className={styles.nameless}></div>
          {/* <button className={styles.activityDescriptionBtn}>read more</button> */}
        </div>

        <div className={styles.activityInfo}>
          <div className={styles.activityInfoTextDiv}>
            <div className={styles.activityInfoText}>
              <div className={styles.icondiv}>
                <AiOutlineFieldTime className={styles.iconTime} />
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: activities?.activityData?.when_text,
                }}
                className={styles.activityInfoTimetable}
              />
            </div>

            <div className={styles.activityInfoText}>
              <div className={styles.icondiv}>
                <FiMapPin className={styles.iconLocation} />
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: activities?.activityData?.where_text,
                }}
                className={styles.activityInfoTimetable}
              />
            </div>
          </div>
          <div className={styles.activityInfolanguagesDiv}>
            <h2>LANGUAGES</h2>
            {activities?.activityData?.languages?.length > 0 && (
              <div>
                {
                  // activities?.activityData?.languages?.filter((source)=> languages.find((flag) => flag.code === source.code))?.map((language)=> <span>{language.icon}</span>)
                  languages
                    .filter((flag) =>
                      activities?.activityData?.languages?.find(
                        (source) => source.code === flag.code
                      )
                    )
                    ?.map((language, i) => (
                      <img key={i} src={language.icon} alt={language.name} />
                    ))
                }
              </div>
            )}
          </div>
        </div>
        <div className={styles.Carousel}>
          <Carousel />
        </div>
      </div>

      <section className={styles.servicesSection}>
        {activities?.activityData?.services?.length > 0 && (
          <div className={styles.servicesListDiv}>
            <h2 className={styles.servicesListTitle}>SERVICES:</h2>
            <ul className={styles.servicesList}>
              {activities?.activityData?.services?.map((item, index) => (
                <li key={index} className={styles.servicesListItem}>
                  {item.name}
                </li>
              ))}
              {/* <li className={styles.servicesListItem}>boh</li>
            <li className={styles.servicesListItem}>boh</li>
            <li className={styles.servicesListItem}>boh</li>
            <li className={styles.servicesListItem}>boh</li>
            <li className={styles.servicesListItem}>boh</li>
            <li className={styles.servicesListItem}>boh</li> */}
            </ul>
          </div>
        )}
        <div className={styles.activityPriceInfoDiv}>
          <div className={styles.activityPriceInfo}>
            <span className={styles.activityPriceValue}>
              {activities?.activityData?.retail_price?.formatted_value}
            </span>
          </div>
          <button onClick={handleOnCartClick} className={styles.cartBtn}>
            BUY NOW
          </button>
        </div>
      </section>
    </div>
  );
}
