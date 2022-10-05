import styles from "./index.module.scss";
import Modal from "../../components/Modal/Modal";
import ItemCardList from "../../components/ItemCardList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GET from "../../utils/GET/GET";
import { IMPORT_URL } from "../../utils/GET/URL";
import { useDispatch, useSelector } from "react-redux";
import { HiEmojiSad } from 'react-icons/hi';
import { FaHeartBroken } from 'react-icons/fa';

export default function Favorites({lang, currency}) {
  const router = useRouter();
  const { uuid } = router.query;
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state);

  // console.log(activities.activityData);
  
  useEffect(() => {
    uuid && GET(IMPORT_URL.ACTIVITIES, `/${uuid}`, dispatch, "SET_ACTIVITY", lang, currency);
  }, [uuid, dispatch]);

  return (
    <div className={styles.Favorites}>
    <div className={styles.titleContainer}>
      <h2 className={styles.FavoritesTitle}>FAVORITES</h2>
      <span className={styles.LineTitle}/>
    </div>
      <ItemCardList lang={lang} currency={currency}/>  
    </div>
  );
}
