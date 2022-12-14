import styles from "./activity.module.scss";
import { useRouter } from "next/router";
import { FiMapPin } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import Hero from "../../../components/Hero/Hero";
import Carousel from "../../../components/Carousel";
import {
  RiEmotionFill,
  RiEmotionHappyFill,
  RiEmotionNormalFill,
  RiEmotionUnhappyFill,
} from "react-icons/ri";
import { MdOutlineStar } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import GET from "../../../utils/GET/GET";
import { IMPORT_URL } from "../../../utils/GET/URL";
import { useDispatch, useSelector } from "react-redux";
import { languages } from "../../../utils/mook";
import NavigatorLink from "../../../components/NavigatorLink/NavigatorLink";
import MapComponent from "../../../components/Map";

export default function ActivityPage({ lang, currency, reviewRef }) {
  const router = useRouter();
  const { uuid } = router.query;
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state);
  const [smileFilterValue, setSmileFilterValue] = useState(8);

  const handleOnCartClick = () => {
    dispatch({ type: "SET_TRUE" });
    dispatch({ type: "ADD_PRODUCT", payload: activities.activityData });
  };

  const handleHeartClick = () => {
    dispatch({ type: "SET_FAVORITE", payload: activities.activityData });
    localStorage.setItem('favorites', JSON.stringify(activities.favorites));

    if (activities.favorites.find((item) => item.uuid === uuid)) {
      dispatch({ type: "REMOVE_FAVORITE", payload: uuid })
      localStorage.setItem('favorites', JSON.stringify(activities.favorites));
    }
  };

  useEffect(() => {
    uuid &&
      GET(
        IMPORT_URL.ACTIVITIES,
        `/${uuid}`,
        dispatch,
        "SET_ACTIVITY",
        lang,
        currency
      );
    uuid &&
      GET(
        IMPORT_URL.ACTIVITIES,
        `/${uuid}/reviews?limit=50`,
        dispatch,
        "SET_REVIEWS",
        lang,
        currency
      );
  }, [uuid, dispatch, lang, currency]);

  const filterBySmile = (value) => {
    setSmileFilterValue(value);
  };

  return (
    <div className={styles.Activity}>
      <Hero type="SingleActivity" lang={lang} currency={currency} reviewRef={reviewRef} />
      <div className={styles.activityMainSection}>
        <NavigatorLink />
        <div className={styles.activityDescriptionDiv}>
          <p className={styles.activityDescription}>
            {activities?.activityData?.description}
          </p>
          {activities?.activityData?.latitude && <div className={styles.nameless}>
            <MapComponent
             latitude={activities?.activityData?.latitude}
            longitude={activities?.activityData?.longitude}
             />
          </div>}
        </div>

        <div className={styles.activityInfo}>
          <div className={styles.activityInfoTextDiv}>
            <div className={styles.activityInfoText}>
              <div className={styles.icondiv}>
                <AiOutlineFieldTime className={styles.iconTime} />
              </div>
              {activities.activityData.when_text ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: activities?.activityData?.when_text,
                  }}
                  className={styles.activityInfoTimetable}
                />
              ) : (
                <p className={styles.activityInfoTimetable}>Not specified!</p>
              )}
            </div>

            <div className={styles.activityInfoText}>
              <div className={styles.icondiv}>
                <FiMapPin className={styles.iconLocation} />
              </div>
              {activities.activityData.where_text ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: activities?.activityData?.where_text,
                  }}
                  className={styles.activityInfoTimetable}
                />
              ) : (
                <p className={styles.activityInfoTimetable}>Not specified!</p>
              )}
            </div>
          </div>
          <div className={styles.activityInfolanguagesDiv}>
            <h2>LANGUAGES</h2>
            {activities?.activityData?.languages?.length > 0 && (
              <div>
                {
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
          <Carousel lang={lang} currency={currency} />
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
            </ul>
          </div>
        )}
        <div className={styles.activityPriceInfoDiv}>
          <div className={styles.activityPriceInfo}>
            <span className={styles.activityPriceValue}>
              {activities?.activityData?.retail_price?.formatted_value}
            </span>
          </div>
          <div className={styles.buttons_container}>
            <button onClick={handleOnCartClick} className={styles.cartBtn}>
              BUY NOW
            </button>
            {!activities.favorites.find((item) => item.uuid === uuid) ? (
              <FaRegHeart onClick={handleHeartClick} className={styles.Heart} />
            ) : (
              <FaHeart
                onClick={handleHeartClick}
                className={`${styles.Heart} ${styles.active}`}
              />
            )}
          </div>
        </div>
        <div ref={reviewRef} className={styles.reviewsContainer}>
          <div className={styles.reviewTitle}>
            <h2>REVIEWS</h2>
            <div className={styles.filter_by_rating}>
              <RiEmotionFill
                onClick={() => filterBySmile(8)}
                className={`${styles.iconsmile} ${
                  smileFilterValue >= 8 && styles.active
                }`}
              />
              <RiEmotionHappyFill
                onClick={() => filterBySmile(6)}
                className={`${styles.iconsmile} ${
                  smileFilterValue >= 6 && smileFilterValue < 8 && styles.active
                }`}
              />
              <RiEmotionNormalFill
                onClick={() => filterBySmile(3)}
                className={`${styles.iconsmile} ${
                  smileFilterValue >= 3 && smileFilterValue < 6 && styles.active
                }`}
              />
              <RiEmotionUnhappyFill
                onClick={() => filterBySmile(0)}
                className={`${styles.iconsmile} ${
                  smileFilterValue >= 0 && smileFilterValue < 3 && styles.active
                }`}
              />
            </div>
          </div>
          <ul className={styles.reviewList}>
            {activities.reviewsData.filter(
              (item) =>
                Math.floor(item.rating_value) >= smileFilterValue &&
                Math.floor(item.rating_value) <= smileFilterValue + 2
            ).length !== 0 ? (
              activities.reviewsData
                .filter(
                  (item) =>
                    Math.floor(item.rating_value) >= smileFilterValue &&
                    Math.floor(item.rating_value) <= smileFilterValue + 2
                )
                .map((review, index) => (
                  <li key={index} className={styles.review}>
                    <div className={styles.reviewsData}>
                      <div className={styles.user}>
                        <i>
                          {Math.floor(review.rating_value) >= 8 && (
                            <RiEmotionFill className={styles.iconsmile} />
                          )}
                          {Math.floor(review.rating_value) >= 6 &&
                            Math.floor(review.rating_value) < 8 && (
                              <RiEmotionHappyFill
                                className={styles.iconsmile}
                              />
                            )}
                          {Math.floor(review.rating_value) >= 3 &&
                            Math.floor(review.rating_value) < 6 && (
                              <RiEmotionNormalFill
                                className={styles.iconsmile}
                              />
                            )}
                          {Math.floor(review.rating_value) >= 0 &&
                            Math.floor(review.rating_value) < 3 && (
                              <RiEmotionUnhappyFill
                                className={styles.iconsmile}
                              />
                            )}
                        </i>
                        <h2 className={styles.nameUser}>Anonymous</h2>
                        {
                          <img
                            className={styles.user_lang}
                            src={
                              languages.find(
                                (lang) =>
                                  lang.code === review.locale.slice(0, 2)
                              )?.icon
                            }
                            alt="lang icon"
                          />
                        }
                      </div>
                      <div className={styles.rating}>
                        <p>
                          {review.rating_value}/10
                          <i>
                            <MdOutlineStar className={styles.star} />
                          </i>{" "}
                        </p>
                      </div>
                    </div>
                    <div className={styles.reviewsComment}>
                      <p>{review.comment}</p>
                    </div>
                  </li>
                ))
            ) : (
              <p
                style={{
                  opacity: "0.5",
                  textAlign: "center",
                  padding: "40px 0",
                }}
              >
                no results
              </p>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}
