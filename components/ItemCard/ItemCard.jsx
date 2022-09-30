import styles from "./index.module.scss";

const ItemCard = ({ cardData, modalVisibility }) => {
  const { id, title, cover_image_url, description, retail_price } = cardData;

  return (
    <div className={styles.CardContainer}>
      <span className={styles.DeleteFavorite}>x</span>
      <div className={styles.ItemCard}>
        <div className={styles.imgContainer}>
        <div className={styles.overlayimg}/>
          <img src={cover_image_url} key={id} id={id} />
        </div>
        <div className={styles.MainText}>
          <h1 className={styles.ActivityTitle}>{title}</h1>
          <p className={styles.ActivityDescription}>{description}</p>
        </div>
        <div className={styles.CartItem}>
          <h1 className={styles.retailprice}>{retail_price.formatted_value}</h1>{" "}
          
            <p className={styles.addCart}  onClick={() => modalVisibility(true)}> add to cart </p>
        
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
