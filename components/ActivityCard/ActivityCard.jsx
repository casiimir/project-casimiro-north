import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import Image from "next/image";
import { toBase64, shimmer } from "../../utils/shimmer";
import { memo, useEffect } from "react";
// import {POST_ITEM} from "../../utils/GET/CART_METHOD";

const ActivityCard = ({catData}) => {
  const { cover_image_url, retail_price,  title, uuid, reviews_avg
  } = catData;
  const router = useRouter();
  const dispatch = useDispatch();

  const { activities } = useSelector(state => state);

  const {cityname} = router.query

  const handleActivityClick = () => {
    router.push({
      pathname: `/../activity/[uuid]`,
      query: {uuid: uuid}
    });
  };

  const handleOnAddCart = () => {
    dispatch({type: "SET_TRUE"})
    dispatch({type: "ADD_PRODUCT", payload: catData})
    // POST_ITEM(catData, localStorage.getItem('cart_uuid'))
  }

  const handleHeartClick = () => {
    dispatch({type: "SET_FAVORITE", payload: catData});
    localStorage.setItem('favorites', JSON.stringify(activities.favorites));

    if (activities.favorites.find((item) => item.uuid === uuid)) {
      dispatch({type: "REMOVE_FAVORITE", payload: uuid});
    } 
  }


  return (
    <div className={styles.ActivityCard_main} style={cityname && {width: '100%'}}>
      {cityname && <h5 className={styles.title_cat_page}>{title}</h5>}
      <div className={styles.ActivityCard} style={cityname && {borderRadius: '2px'}}>
        {/* <img  className={styles.img} src={cover_image_url} alt="Activity photo" /> */}
        <div className={styles.img} >
        <Image src={cover_image_url} alt="Activity photo" layout="fill" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} />
       </div>
       {!cityname ? <div onClick={handleActivityClick} className={styles.overlay} /> : <div className={styles.overlay} />}
        {!cityname ? 
        <h5 className={styles.title}>{title}</h5> 
        : <>
        {/* <h5 className={styles.title_cat_page}>{title}</h5> */}
        <div className={styles.data_fav_container}>
          <p className={styles.rating}>{reviews_avg}</p>
          { !activities.favorites.find((item) => item.uuid === uuid) ? <FaRegHeart onClick={handleHeartClick} className={styles.Heart} /> : <FaHeart onClick={handleHeartClick} className={`${styles.Heart} ${styles.active}`}/>}
        </div>
        </>}
      </div>
      {cityname ? 
      <div className={styles.info_container}>
        <div className={styles.price_details}>  
          <h3>price:</h3>
          <h3>{retail_price.formatted_value}</h3>
        </div>
        <div className={styles.more_details}>
          <p onClick={handleActivityClick}>see more</p>
          <BsCart2 onClick={handleOnAddCart} className={styles.cart}/>
        </div>
        </div> : null
        }
        
    </div>
  );
};

export default memo(ActivityCard);
