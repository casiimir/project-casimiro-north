import styles from "./index.module.scss";
import ItemCard from "../ItemCard";
import {memo } from "react";
import { useSelector } from "react-redux";
import { FaHeartBroken } from "react-icons/fa";
import { HiEmojiSad } from "react-icons/hi";


const ItemCardList = ({modalVisibility}) => {
  const { activities } = useSelector((state) => state);

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

export default memo(ItemCardList);
