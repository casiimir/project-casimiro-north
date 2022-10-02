import { useDispatch } from "react-redux";
import styles from "./index.module.scss";

const CartSectionItem = ({ cartData, id }) => {

  // console.log(cartData)
  const dispatch = useDispatch();
  const {title, retail_price, uuid } = cartData

  const handleOnRemoveClick = () => {
    dispatch({type: "REMOVE_PRODUCT", payload: id})
  }

  return (
    <li className={styles.cartItem}>
      <div className={styles.ticketType}>
        <span>●</span><h3 className={styles.ticketName}>{title}</h3>
        <h3 className={styles.ticketPrice}>{retail_price.formatted_value.split(" ")[1]}</h3>
      </div>

      <div className={styles.ticketAmount}>
        {/* <h3 className={styles.ticketAmountText}>quantità</h3> */}
        <div className={styles.ticketAmountSelection}>
          <button className={styles.removeBtn} onClick={handleOnRemoveClick}>remove</button>
        </div>
      </div>
    </li>
  );
};

export default CartSectionItem;
