import styles from "./index.module.scss";
import { EffectCoverflow, Navigation } from "swiper";
import { useEffect, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GET from "../../utils/GET/GET";
import { IMPORT_URL } from "../../utils/GET/URL";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";


export default memo(function App ({lang, currency}) {

  const dispatch = useDispatch();
   const {activities} = useSelector(state => state);
   const router = useRouter();
   const {uuid} = router.query

   useEffect(() => {
    uuid && GET(IMPORT_URL.ACTIVITIES, `/${uuid}/media`, dispatch, "SET_MEDIA_DATA", lang, currency);
   }, [uuid, dispatch, lang, currency]);

  return (
    <div className={styles.carousel_container}>
      <Swiper className={styles.Carousel}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 30,
          stretch: 10,
          depth: 10,
          modifier: 2,
          slideShadows: true,
        }}
        style={{
          "--swiper-navigation-color": "#024D5E",
          "--swiper-pagination-color": "#024D5E",
        }}
        
        modules={[Navigation, EffectCoverflow]}
        navigation={true}
      >
        {activities?.mediaData?.map((item, index)=><SwiperSlide className={styles.card} key={index}>
          <img src={item.url} alt={item.title}/>
        </SwiperSlide>)}
      </Swiper>
    </div>
  );
})
