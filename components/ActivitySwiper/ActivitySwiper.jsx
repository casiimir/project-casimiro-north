import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import GET from "../../utils/GET/GET";
import { IMPORT_URL } from "../../utils/GET/URL";
import developersData from "../../constants";
import DeveloperCard from "../DeveloperCard/DeveloperCard";

export default function ActivitySwiper({ type }) {
  const { activities } = useSelector((state) => state);
  const rotuer = useRouter();
  const dispatch = useDispatch();
  const { cityname } = rotuer.query;

  useEffect(() => {
    cityname?.split("&=")[1] &&
      GET(
        IMPORT_URL.CITIES,
        `${cityname?.split("&=")[1]}/activities?limit=10`,
        dispatch,
        "SET_TODAY_ACTIVITIES"
      );
  }, [cityname, dispatch]);

  return (
    <div className={styles.ActivitySwiper}>
      {type === "aboutUs" ? (
        <></>
      ) : (
        <div className={styles.today_text}>Today</div>
      )}
      <Swiper
        className="myswiper"
        modules={[Navigation]}
        navigation={true}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {type === "aboutUs" ? (
          <>
            {developersData.map((developer, index) => (
              <SwiperSlide key={index}>
                <DeveloperCard data={developer} />
              </SwiperSlide>
            ))}
          </>
        ) : (
          !activities.activitiesTodayList.message &&
          activities?.activitiesTodayList?.data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.swiper_container}>
                <img src={item.cover_image_url} alt="activity" />
                <div className={styles.text_container}>
                  <h3>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}

// https://api.musement.com/api/v3/cities/{cityId}/activities/today
