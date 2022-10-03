import MiniCard from "../MiniCard/MiniCard";
import styles from "./index.module.scss";
import { useEffect, useRef } from "react";
import GET from "../../utils/GET/GET";
import { useSelector, useDispatch } from "react-redux";
import { IMPORT_URL } from "../../utils/GET/URL";
import ScrollBtn from "../ScrollBtn";

const MiniCarousel = () => {
  const miniCarouselRef = useRef(null);
  const dispatch = useDispatch();
  const {activities} = useSelector(state => state);

  useEffect(() => {
    GET(IMPORT_URL.ACTIVITIES, '?discounted=YES&limit=20', dispatch, "SET_DISCOUNT_LIST");
  },[dispatch])

  return (
    <div className={styles.miniCarousel}>
      <div className={styles.title}>
        <h3>Voucher for you</h3>
        <ScrollBtn itemRef={miniCarouselRef} />
      </div>
      <div ref={miniCarouselRef} className={styles.voucherDiv}>
        {activities?.discountList?.data?.map((cardData, index) => 
          <MiniCard cardData={cardData} key={index} />
        )}
      </div>
    </div>
  );
};

export default MiniCarousel;
