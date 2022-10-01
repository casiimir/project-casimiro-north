import styles from "./index.module.scss";
import { BsCart2, BsCheckCircleFill } from "react-icons/bs";
import ModalIcon from "./modalIcon";

const Modal = ({ isVisibile, onModalClick }) => {
  return (
    isVisibile && (
      <div className={styles.modaloverlay}>
        <div className={styles.overlay} onClick={() => onModalClick(false)}/>
        <div className={styles.modal}>
          <h2 className={styles.mainText}>ADDED TO CART!</h2>
          <div className={styles.cart_icon}>
          <ModalIcon className={styles.carrello}/>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
