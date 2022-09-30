import MiniCard from "../MiniCard/MiniCard";
import styles from "./index.module.scss";
import { useEffect } from "react";
import GET from "../../utils/GET/GET";
import { useSelector, useDispatch } from "react-redux";
import { IMPORT_URL } from "../../utils/GET/URL";

const MiniCarousel = () => {

  const dispatch = useDispatch();
  const {activities} = useSelector(state => state);

  useEffect(() => {
    GET(IMPORT_URL.ACTIVITIES, '?discounted=YES&limit=10', dispatch, "SET_DISCOUNT_LIST");
  },[dispatch])

  return (
    <div className={styles.miniCarousel}>
      <h3 className={styles.title}>Voucher for you</h3>
      <div className={styles.voucherDiv}>
        {activities?.discountList?.data?.map((cardData, index) => 
          <MiniCard cardData={cardData} key={index} />
        )}
      </div>
    </div>
  );
};

export default MiniCarousel;
