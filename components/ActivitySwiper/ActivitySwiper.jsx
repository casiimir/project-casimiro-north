import styles from './index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import 'swiper/css';

export default function ActivitySwiper () {
    return (
      <div>
        <Swiper className={styles.mySwiper}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide><img src="https://picsum.photos/300/200" alt="img" /> </SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/300/200" alt="img" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/300/200" alt="img" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/300/200" alt="img" /></SwiperSlide>
        </Swiper>
      </div>
    );
  };