import styles from "./index.module.scss";
import ItemCard from "../ItemCard";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeartBroken } from "react-icons/fa";
import { HiEmojiSad } from "react-icons/hi";
// import GET from "../../utils/GET/GET";
// import { IMPORT_URL } from "../../utils/GET/URL";

const ItemCardList = ({modalVisibility}) => {
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state);

  console.log(activities.favorites)

  // useEffect(() => {
  //   GET(IMPORT_URL.ACTIVITIES, "", dispatch, "SET_ACTIVITY_LIST");
  // }, [dispatch]);

  return (
    <div className={styles.ItemCardList}>
      <div className={styles.FavoritesSublist}>
        {activities?.favorites?.filter((item) => item?.cover_image_url)
          .map((activity, index) => (
            <ItemCard cardData={activity} key={index} modalVisibility={modalVisibility}/>
          ))}
          {activities.favorites.length === 0 && <div className={styles.favorite_empty}><FaHeartBroken className={styles.broken}/><h2>Your Favorite List Seems Empty</h2> <HiEmojiSad className={styles.sad}/></div>}
        <div></div>
      </div>
    </div>
  );
};

export default ItemCardList;
