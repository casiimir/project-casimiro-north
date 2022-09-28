import MiniCard from "../MiniCard/MiniCard";
import styles from "./index.module.scss";
import { useEffect } from "react";
import useFetch from "../../utils/useFetch/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { IMPORT_URL } from "../../utils/useFetch/URL";

const MiniCarousel = () => {

  const dispatch = useDispatch();
  const {activities} = useSelector(state => state);

  useEffect(() => {
    useFetch(IMPORT_URL.ACTIVITIES, '?discounted=YES&limit=10', dispatch, "SET_DISCOUNT_LIST");
  },[])

  return (
    <div className={styles.miniCarousel}>
      <h3 className={styles.title}>Voucher for you</h3>
      <div className={styles.voucherDiv}>
        {activities?.discountList?.data.map((cardData) => (
          // <div>
          //   <img src={cardData.url} key={cardData.id} id={cardData.id} />
          // </div>
          <MiniCard cardData={cardData} key={cardData.id} />
        ))}
      </div>
    </div>
  );
};

export default MiniCarousel;
