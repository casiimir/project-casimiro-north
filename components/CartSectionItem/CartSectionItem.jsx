import styles from "./index.module.scss";

const CartSectionItem = ({ cartData }) => {
  return (
    <li className={styles.cartItem}>
      <div className={styles.ticketType}>
        <h3 className={styles.ticketName}>● {cartData.obj}</h3>
        <h3 className={styles.ticketPrice}>{cartData.prezzo}</h3>
      </div>

      <div className={styles.ticketAmount}>
        <h3 className={styles.ticketAmountText}>quantità</h3>
        <div className={styles.ticketAmountSelection}>
          <button>-</button>
          <p>2</p>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartSectionItem;
