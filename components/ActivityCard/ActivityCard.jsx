import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

const ActivityCard = ({catData}) => {
  const { cover_image_url, id,  title, uuid } = catData;
  const router = useRouter();
  const dispatch = useDispatch();

  const {moneyValue } = useSelector(state => state);

  const {cityname} = router.query

  const handleActivityClick = () => {
    router.push({
      pathname: `/../activity/[uuid]`,
      query: {uuid: uuid}
    });
  };

  const  handleOnSeeMoreClick = () => {
    console.log('vuoi vedere altro?')
  }

  const handleOnAddCart = () => {
    console.log('vuoi comprare o pescc')
    dispatch({type: "SET_TRUE"})
  }

  const handleHeartClick = () => {
    console.log('cliccato il cuore');
    dispatch({type: "SET_FAVORITE", payload: catData});
  }

  return (
    <div className={styles.ActivityCard_main} style={cityname && {width: '100%'}}>
      {cityname && <h5 className={styles.title_cat_page}>{title}</h5>}
      <div className={styles.ActivityCard} style={cityname && {borderRadius: '2px'}}>
        <img className={styles.img} src={cover_image_url} alt="Activity photo" />
       {!cityname ? <div onClick={handleActivityClick} className={styles.overlay} /> : <div className={styles.overlay} />}
        {!cityname ? 
        <h5 className={styles.title}>{title}</h5> 
        : <>
        {/* <h5 className={styles.title_cat_page}>{title}</h5> */}
        <div className={styles.data_fav_container}>
          <p className={styles.hours}>12:00 - 13:00</p>
          <FaRegHeart onClick={handleHeartClick} className={styles.Heart} />
        </div>
        </>}
      </div>
      {cityname ? 
      <div className={styles.info_container}>
        <div className={styles.price_details}>  
          <h3>price:</h3>
          <h3><span>{moneyValue}</span>12,00</h3>
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

export default ActivityCard;
