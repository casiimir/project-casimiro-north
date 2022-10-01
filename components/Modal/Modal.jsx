import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import ModalIcon from "./modalIcon";

const Modal = () => {

  const dispatch = useDispatch();
  const {modalVisibility} = useSelector(state => state)

  const handleOnOverlayClick = () => {
    dispatch({type: "SET_FALSE"})
  }

  return (
    modalVisibility && (
      <div className={styles.modaloverlay}>
        <div className={styles.overlay} onClick={handleOnOverlayClick}/>
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
