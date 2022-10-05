import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styles from "./index.module.scss";

const ItemCard = ({ cardData }) => {
  const { id, title, cover_image_url, retail_price, uuid } = cardData;

  const dispatch = useDispatch();
  const router = useRouter();

  console.log(router.pathname)

  const handleOnDeleteBtn = () => {
    dispatch({type: "REMOVE_FAVORITE", payload: uuid})
  }

  const handleOnAddCartClick = () => {
    dispatch({type: "SET_TRUE"})
    dispatch({type: "ADD_PRODUCT", payload: cardData})
  }

  const handleActivityClick = () => {
    router.push({
      pathname: `/../activity/[uuid]`,
      query: {uuid: uuid}
    });
  };

  return (
    <div className={styles.CardContainer}>
      {router.pathname !== "/mytrip" ? <span onClick={handleOnDeleteBtn} className={styles.DeleteFavorite}>x</span> : null}
      <div className={styles.ItemCard}>
        <div className={styles.imgContainer}>
        <div className={styles.overlayimg}/>
          <img src={cover_image_url} id={id} alt="img"/>
        </div>
        <div className={styles.all_text_container}>
          <div className={styles.MainText}>
            <h1 onClick={handleActivityClick} className={styles.ActivityTitle}>{title}</h1>
            {/* <p className={styles.ActivityDescription}>{description}</p> */}
          </div>
         {router.pathname !== "/mytrip" ? <div className={styles.CartItem}>
            <h1 className={styles.retailprice}>{retail_price.formatted_value}</h1>
              <p className={styles.addCart}  onClick={handleOnAddCartClick}> add to cart </p>
          </div> : null}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
