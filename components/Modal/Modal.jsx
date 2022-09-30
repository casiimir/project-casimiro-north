import styles from "./index.module.scss";
import { BsCart2, BsCheckCircleFill } from "react-icons/bs";

const Modal = ({ isVisibile, onModalClick }) => {
  return (
    isVisibile && (
      <div className={styles.modaloverlay} onClick={() => onModalClick(false)}>
        <div className={styles.modal}>
          <h2 className={styles.mainText}>ADDED TO CART!</h2>

          <BsCart2 className={styles.cart} />
          <BsCheckCircleFill className={styles.check} />
        </div>
      </div>
    )
  );
};

export default Modal;
